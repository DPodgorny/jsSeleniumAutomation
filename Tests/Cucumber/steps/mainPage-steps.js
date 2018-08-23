let { Given, When, Then } = require('cucumber');
//let cucumber = require('cucumber');
let mainPage = require('../../pageObjects/mainPage');
let searchResultPage = require('../../pageObjects/searchResultPage');
let pageFactory = require('../../pageObjects/pageFactory');
let expect = require('chai').expect;
let assert = require('assert')

Given(/^I open '(.+)'$/, async function(page) {
    pageFactory.currentPage = pageFactory[page];
    await pageFactory.currentPage.open();
    await pageFactory.currentPage.skipSurvey();
});


Then(/^'(.+)' is visible$/, async function(element) {
    let expected = await pageFactory.currentPage.elementData[element].isPresent();
    expect(expected).to.equal(true);
});


When(/^I press '(.+)'$/, async function(button) {
    await pageFactory.currentPage.elementData[button].click();
});

When(/^I search '(.+)' item$/, async function (item) {
    pageFactory.currentPage = pageFactory['Search result page'];
    await pageFactory.currentPage.search(item);
})

Then(/^'(.+)' item is visible$/, async function (item) {
    let expected = await pageFactory.currentPage.foundItem(item).isPresent();
    expect(expected).to.equal(true);
})

When(/^I login with '(.+)' creds$/, async function(creds) {
    await pageFactory.currentPage.login(creds);
})

Then('I see empty login error messages', async function() {
    let expectedName = await pageFactory.currentPage.elementData.emptyNameError.isPresent();
    let expectedPass = await pageFactory.currentPage.elementData.emptyPasswordError.isPresent();
    expect(expectedName).to.equal(true);
    expect(expectedPass).to.equal(true);
})

Then('I see invalid login error message', async function() {
    var expected = await pageFactory.currentPage.elementData.invalidCredsError.isPresent();
    expect(expected).to.equal(true);
})