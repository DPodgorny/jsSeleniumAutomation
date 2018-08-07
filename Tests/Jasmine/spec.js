let mainPage = require('../pageObjects/mainPage');
let searchResultPage = require('../pageObjects/searchResultPage');

describe('Homepage', () => {

    beforeEach (async () => {

        browser.ignoreSynchronization = false;
        await mainPage.open();
        await mainPage.skipSurvey();
    });

    xit('has logo', () => {

        expect(mainPage.logo.isPresent()).toBe(true);
    });

    it('notification is shown on going to shop', async function () {

        await mainPage.shopButton.click();
        await expect(mainPage.shopModal.isPresent()).toBe(true);

    });

    xit('search is successful', async () => {

        await mainPage.search('Ninjago');
        await function () {
            expect(searchResultPage.foundItem('Destiny').isPresent()).toBe(true);
            expect(searchResultPage.logo.isPresent()).toBe(true);
        };
    });

    xit('login has validation for empty fields', async () => {

        await mainPage.login('emptyLogin');
        expect(mainPage.errorMessage.isPresent()).toBe(true);

    })

    xit('login has validation for invalid creds', async () => {

        await mainPage.login('invalidLogin');
        expect(mainPage.errorMessage.isPresent()).toBe(true);

    })
})