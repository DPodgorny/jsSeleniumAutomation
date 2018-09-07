let capabilities = require('./capabilities.js');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: capabilities[process.env.npm_config_browser],

    specs: 'Tests/Cucumber/features/*.feature',

    onPrepare: async function () {
        await browser.driver.manage().window().setSize(1920, 1080);
    },

    resultJsonOutputFile: './reports/cucumber/report.json',

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            `${process.cwd()}/Tests/Cucumber/steps/*.js`
        ]
    },

    // Options to be passed to Jasmine.
    allScriptsTimeout: 120000,

    afterLaunch: function() {
        let reporter = require('cucumber-html-reporter');
        let options = {
                theme: 'bootstrap',
                jsonFile: './reports/cucumber/report.json',
                output: './reports/cucumber/report.html',
                reportSuiteAsScenarios: true,
                launchReport: true,
                storeScreenshots: true,
                screenshotsDirectory: './reports/cucumber/screenshots',
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
    }
};