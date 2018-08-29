let capabilities = require('./capabilities.js');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: capabilities[process.env.npm_config_browser],

    specs: 'Tests/Cucumber/features/*.feature',

    onPrepare: function () {
        browser.driver.manage().window().setSize(1920, 1080);
    },

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            `${process.cwd()}/Tests/Cucumber/steps/*.js`
        ]
    },

    // Options to be passed to Jasmine.
    allScriptsTimeout: 120000
};