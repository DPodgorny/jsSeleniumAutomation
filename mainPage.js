class page {

    constructor() {

        this.logo = element(by.css(".l-logo__img"));

    }

    open(url) {browser.get(url)};

    async search(req) {

        await element(by.css(".l-gh__main-wrapper button[class='l-search__toggle']")).click();
        element(by.css(".l-gh__main-wrapper input[type='search']")).sendKeys(req);
        element(by.css(".l-gh__main-wrapper button[type='submit'")).click();
    }
}

class searchResult {

    constructor() {

        browser.ignoreSynchronization = true;
        this.item = {}
    }

    getItem() {
        return element(by.xpath(".//*[text()='Spinjitzu']/.."));
    }

}

module.exports.page = new page;
module.exports.searchResult = new searchResult;
//module.exports = searchResult;
//module.exports = new page, new searchResult();
//modeule.exports = new searchResult;