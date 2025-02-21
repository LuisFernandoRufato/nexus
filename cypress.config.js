const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
        video: true,
        screenshotOnRunFailure: true,
        reporter: "cypress-multi-reporters",
        reporterOptions: {
        reporterEnabled: "mochawesome",
        mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mochawesome-report",
        overwrite: false,
        html: false,
        json: true,
        videoOnFailOnly: true,
      },
    },
  },
});
