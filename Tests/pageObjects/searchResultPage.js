let page = require('./page')

class searchResultPage extends page {

    constructor() {

        super();
    }

    foundItem(itemName) {
        browser.ignoreSynchronization = true;
        return element(by.xpath("//*[contains(text(), '" + itemName + "')]"));
    }

}

module.exports = new searchResultPage;