let mainPage = require('../pageObjects/mainPage');
let searchResultPage = require('../pageObjects/searchResultPage');

describe('Homepage', () => {

    beforeEach (async () => {

        browser.ignoreSynchronization = false;
        await mainPage.open();
        await mainPage.skipSurvey();
    });

    it('has logo', () => {

        expect(mainPage.elementData.logo.isPresent()).toBe(true);
    });

    it('notification is shown on going to shop', async function () {

        await mainPage.elementData.shopButton.click();
        let is;
        await browser.wait(async() => {
            is = await mainPage.elementData.shopModal.isPresent();
            return is;
        },5000).then(()=> null, ()=>null);

        expect(is).toBe(true);

    });

    it('search is successful', async () => {

        await mainPage.search('Ninjago');
        await function () {
            expect(searchResultPage.foundItem('Destiny').isPresent()).toBe(true);
            expect(searchResultPage.logo.isPresent()).toBe(true);
        };
    });

    it('login has validation for empty fields', async () => {

        await mainPage.login('emptyLogin');
        expect(mainPage.elementData.emptyNameError.isPresent()).toBe(true);
        expect(mainPage.elementData.emptyPasswordError.isPresent()).toBe(true);

    })

    it('login has validation for invalid creds', async () => {

        await mainPage.login('invalidLogin');
        expect(mainPage.elementData.invalidCredsError.isPresent()).toBe(true);

    })
})