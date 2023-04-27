const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-qualityagents.azureedge.net/',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
