const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After, BeforeStep, AfterStep, Status, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll( function(){

});

Before({tags : "@foo"}, async function()
{
    const browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep( function(){

});

AfterAll(function()
{
    
});

After(function()
{
    console.log("Last to execute.");
});

AfterStep(async function(result)
{
    if(result.status == Status.FAILED)
    {
        await this.page.screenshot({path: 'screenshot.png'});
    }
});