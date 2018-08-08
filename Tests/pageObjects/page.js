class page {

    constructor() {

        this.parentElementData = {

            logo: element(by.css(".l-logo__img")),
            shopButton: element(by.css("[href='https://shop.lego.com/#shopxlink']")),
            shopModal: element(by.css("[class='lego-modal-grid-column lego-modal-grid-column-figure']"))
        }
    }

    open() {return browser.get(this.url)};

    async search(req) {

        await element(by.css(".l-gh__main-wrapper button[class='l-search__toggle']")).click();
        await element(by.css(".l-gh__main-wrapper input[type='search']")).sendKeys(req);
        await element(by.css(".l-gh__main-wrapper button[type='submit'")).click();
    }

    async skipSurvey() {

        element(by.css("area[alt='No']")).click()
            .then(() => {return;}, () => {return;});
    }
}

module.exports = page;