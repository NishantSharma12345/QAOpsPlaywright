const {test,expect} = require('@playwright/test')

test('@Web Browser Context Playwright test', async ({browser})=>
{
    //playwright code-
    //step1 - open browser
    //step2 - enter u/p 2 seconds
    //step3 - click

    //chrome - plugins/ cookies

    const context = await browser.newContext();
    const page = await context.newPage();
    page.route('**/*.css',route=>route.abort());
    const userName = page.locator('#username');
    const signIn = page.locator("signInBtn");
    const cardTitles = page.locator(".card-body a");
    page.on('request',request=>console.log(request.url()));
    page.on('response',response=>console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.type("Nishant");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(0).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('@Web UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    await page.pause();
});

test.only('Child Windows Handle', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
    [context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
     documentLink.click(), //new page is opened
    ])

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').type(domain);
    //await page.pause();
    console.log(await page.locator('#username').inputValue());
});