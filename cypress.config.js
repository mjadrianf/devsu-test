const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dj9uvj",
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    retries :{
      "runMode": 0,
      "openMode": 0
    },
    browser: 'chrome',
    baseUrl: 'https://www.saucedemo.com/',
    experimentalStudio: true,
    chromeWebSecurity: false,
    experimentalMemoryManagement: true, 
    numTestsKeptInMemory: 1
    },
    env: {
      snapshotOnly: true,
    }
  })

