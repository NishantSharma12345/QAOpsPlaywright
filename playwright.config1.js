// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 1,
  workers: 3,
  timeout: 40*1000,
  expect:{
    timeout: 40*1000,
  },
 
  projects :[
    {
      name : 'safari',
      use: 
      {
        browserName:'webkit',
        headless:true,
        screenshot:'off',
        trace:'on',
        ...devices['iPhone 11'],
        ignoreHttpsErrors:true,
        video:'retain-on-failure',
        permissions:['geolocation']
      }
    },
    {
      name : 'chrome',
      use: 
      {
        browserName:'chromium',
        headless:false,
        screenshot:'on',
        trace:'on',
       // ...devices[''],
        viewport: {width:720,height:720}
      }
    },
  ]     
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
});
module.exports = config

