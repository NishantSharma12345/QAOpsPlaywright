// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 2,
  timeout: 40*1000,
  expect:{
    timeout: 40*1000,
  },
 
  reporter: 'html',
  use: {
        browserName:'webkit',
        headless:false,
        screenshot:'on',
        trace:'on'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    },
});
module.exports = config

