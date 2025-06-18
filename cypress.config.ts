/**
 * Cypress configuration file for setting up global test options.
 * - Sets base URL to Amazon with language and currency.
 * - Enables 2 retries for failed tests.
 * - Sets default command timeout to 15 seconds.
 */

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    retries: 2,
    baseUrl: 'https://www.amazon.com?language=en_US&currency=USD',
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
