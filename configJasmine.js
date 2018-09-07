let capabilities = require('./capabilities.js');

// An example configuration file.
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: capabilities[process.env.npm_config_browser],

  onPrepare: async function () {
      await browser.driver.manage().window().setSize(1920, 1080);

      let jasmineReporters = require('protractor-jasmine2-html-reporter');
      jasmine.getEnv().addReporter(new jasmineReporters({
          savePath: 'reports/Jasmine'
      }));
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['Tests/Jasmine/spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};