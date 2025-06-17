import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    retries: 2,
    baseUrl: 'https://www.amazon.com?language=en_US&currency=USD',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
