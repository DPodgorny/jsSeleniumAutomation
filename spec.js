let page = require('./mainPage');
let mainPage = page.page;
let searchResult = page.searchResult;
//page = new page2();

describe('Homepage', function() {

    beforeEach (function() {
        browser.ignoreSynchronization = false;
        return browser.get('https://www.lego.com')
            .then(element(by.css("area[alt='No']")).click()
                .then(() => {return;}, () => {return;}))
    });


    xit('has logo', () => {

        mainPage.open('https://www.lego.com/en-us');
        expect(mainPagepage.logo.isPresent()).toBe(true);
    });

    it('search is performed', () => {

        mainPage.open('https://www.lego.com/en-us');
        mainPage.search('Ninjago');
        expect(searchResult.item('').isPresent()).toBe(true);
    })
    /*it('has logo', () => {

        return expect(element(by.css(".l-logo__img")).isPresent()).toBe(true);

        });

    xit('notification is shown on going to shop', () => {

        return element(by.css("[href='https://shop.lego.com/#shopxlink']")).click()
            .then(() => expect(element(by.css("article[class='lego-modal-grid-column']")).isPresent()).toBe(true));
        });

    xit('login has validation', () => {

        var errorName = element(by.css("p[for='fieldUsername']"));
        var errorPassword = element(by.css("p[for='fieldPassword']"));

        element(by.css("a[data-uitest='login-link']")).click()
            .then(() => {
                browser.ignoreSynchronization = true;
                return browser.switchTo().frame(element(by.id('legoid-iframe')).getWebElement());
            })
            .then(() => element(by.css("button[id='buttonSubmitLogin']")).click())
            .then(() => {
                expect(errorName.getText()).toEqual('Enter your username');
                expect(errorPassword.getText()).toEqual('Enter your password');
            })
            .then(() => browser.switchTo().defaultContent())
            .then(() => element(by.className('legoid-close')).click())
    });

    xit('search is performed', () => {

        var product = element(by.css("a[href='//shop.lego.com/en-US/Lloyd-Spinjitzu-Master-70628'] span"));

        return element(by.css(".l-gh__main-wrapper button[class='l-search__toggle']")).click()
            .then(() => element(by.css(".l-gh__main-wrapper input[type='search']")).sendKeys('Ninjago'))
            .then(() => element(by.css(".l-gh__main-wrapper button[type='submit'")).click())
            .then(() => {
                browser.ignoreSynchronization = true;
                expect(product.getText()).toEqual('Lloyd - Spinjitzu Master');
            })
    });*/
})