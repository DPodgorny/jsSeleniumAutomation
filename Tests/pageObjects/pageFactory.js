let mainPage = require('../pageObjects/mainPage');
let searchResultPage = require('../pageObjects/searchResultPage');

let pageFactory = {
    'Main page': mainPage,
    'Search result page': searchResultPage,
    currentPage: null
}

module.exports = pageFactory;