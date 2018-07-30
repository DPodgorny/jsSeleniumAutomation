describe('Homepage', function() {

    it('login has validation', function () {
        browser.get('https://www.lego.com')
            .then(
                element(by.css("area[alt='No']")).click()
                    .then(function() {return;}, function() {return;})
            )
            .then(element(by.css("a[data-uitest='login-link']")).click())
            .then(browser.switchTo().frame(element(by.id('legoid-iframe')).getWebElement()))
            .then(browser.driver.findElement(by.css("button[id='buttonSubmitLogin']")).click());

            var errorName = browser.driver.findElement(by.css("p[for='fieldUsername']"));
            var errorPassword = browser.driver.findElement(by.css("p[for='fieldPassword']"));

            expect(errorName.getText()).toEqual('Enter your username');
            expect(errorPassword.getText()).toEqual('Enter your password');

            browser.switchTo().defaultContent()
                .then(element(by.className('legoid-close')).click())
    });

    it('search is performed', function() {
        browser.get('https://www.lego.com')
            .then(element(by.css(".l-gh__main-wrapper button[class='l-search__toggle']")).click())
            .then(element(by.css(".l-gh__main-wrapper input[type='search']")).sendKeys('Ninjago'))
            .then(element(by.css(".l-gh__main-wrapper button[type='submit'")).click());

        var product = browser.driver.findElement(by.css("a[href='//shop.lego.com/en-US/Lloyd-Spinjitzu-Master-70628'] span"));

        expect(product.getText()).toEqual('Lloyd - Spinjitzu Master');
    })
})