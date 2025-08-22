const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Define a URL base do seu projeto (Live Server)
    baseUrl: "http://127.0.0.1:5500",

    // Localização dos testes
    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      // Aqui você pode adicionar event listeners se precisar
    },
  },
});
