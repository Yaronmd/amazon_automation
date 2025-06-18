// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('cardModuleFactory')) {
    return false;
  }
});

Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
  const defaultHeaders = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  };

  options.headers = {
    ...(options.headers || {}),
    ...defaultHeaders
  };

  return originalFn(url, options);
});
beforeEach(() => {
  cy.visit('/');
  
cy.clearCookies();
  cy.clearLocalStorage();
  cy.get('body').then($body => {
    if ($body.find('[data-action="glowDoneButton"]').length) {
      cy.get('[data-action="glowDoneButton"]').click();
      cy.log('Closed Cross Border popup');
    }
  });
});

