let page = require('./page');

class mainPage extends page {

    constructor() {

        super();
        this.url = 'https://www.lego.com/en-us';

        this.metadata = {

            'emptyLogin':
                {
                    username: '',
                    password: '',
                },

            'invalidLogin':
                {
                    username: 'ABC',
                    password: 'ABC12345',
                }
        };

        this.elementData = {
            username: element(by.id('fieldUsername')),
            password: element(by.id('fieldPassword')),
            emptyNameError: element(by.css("p[for='fieldUsername']")),
            emptyPasswordError: element(by.css("p[for='fieldPassword']")),
            invalidCredsError:  element(by.id('invalidUsernameOrPasswordCnt'))
        }

    }

    async login(creds) {

        await element(by.css("a[data-uitest='login-link']")).click();
        browser.ignoreSynchronization = true;
        await browser.switchTo().frame(element(by.id('legoid-iframe')).getWebElement());
        this.elementData.username.sendKeys(this.metadata[creds]['username']);
        this.elementData.password.sendKeys(this.metadata[creds]['password']);
        await element(by.css("button[id='buttonSubmitLogin']")).click();
    }
}

module.exports = new mainPage;