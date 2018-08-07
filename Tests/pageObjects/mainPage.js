let page = require('./page');

class mainPage extends page {

    constructor() {

        super();
        this.url = 'https://www.lego.com/en-us';
        this.logins = {

            'emptyLogin':
                {
                    'steps': () => {return;},
                    'errorMessage': element(by.css("p[for='fieldUsername']")) || element(by.css("p[for='fieldPassword']")),
                },

            'invalidLogin':
                {
                    'steps': () => {
                        element(by.id('fieldUsername')).sendKeys('ABC');
                        element(by.id('fieldPassword')).sendKeys('ABC12345');
                        },
                    'errorMessage': element(by.id('invalidUsernameOrPasswordCnt'))
                }
        }

    }

    async login(creds) {

        this.errorMessage = this.logins[creds]['errorMessage'];
        await element(by.css("a[data-uitest='login-link']")).click();
        browser.ignoreSynchronization = true;
        await browser.switchTo().frame(element(by.id('legoid-iframe')).getWebElement());
        this.logins[creds]['steps']();
        await element(by.css("button[id='buttonSubmitLogin']")).click();
    }
}

module.exports = new mainPage;