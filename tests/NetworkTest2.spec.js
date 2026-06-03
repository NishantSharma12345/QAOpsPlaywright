const {test,except} = require('@playwright/test');

test('Security test request intercept', async ({page})=>
{
     await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("test3@example.com");
    await page.locator("#userPassword").type("Admin123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69f4aa5af86ba51a65986954'})
    )
    await page.locator("button:has-text('View')").first().click();
    await except(page.locator("p").last()).toHaveText("You are not authorize to view this order");
})