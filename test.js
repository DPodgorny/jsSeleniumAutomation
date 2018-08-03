export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }
}

// login.page.js
import Page from './page';

class LoginPage extends Page {

    get username()  { return browser.element('#username'); }
    get password()  { return browser.element('#password'); }
    get form()      { return browser.element('#login'); }
    get flash()     { return browser.element('#flash'); }

    open() {
        super.open('login');
    }

    submit() {
        this.form.submitForm();
    }

}

export default new LoginPage();

LoginPage.username.setValue('Max Mustermann');

// login.spec.js
import LoginPage from '../pageobjects/login.page';

var expect = require('chai').expect;

describe('login form', => {
    it('should deny access with wrong creds', => {
        LoginPage.open();
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();

        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

    it('should allow access with correct creds', => {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();

        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});