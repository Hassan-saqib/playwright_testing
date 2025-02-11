const { test, expect } = require("@playwright/test");

test("validating Search results with no hotels", async ({ page,context }) => {
  await page.goto("https://tp-staging-ten.tenproduct.com/product/ten/homepage/gb/en-gb?v=2");
  await page.getByRole("button", { name: "Accept All Cookies" }).click();
  await page.getByLabel("login").click();
  await page.getByLabel("Email *").click();
  await page.getByLabel("Email *").fill("hassansaqib@tengroup.com");
  await page.getByLabel("Password *").click();
  await page.getByLabel("Password *").fill("!Password10");
  await page.getByRole("button", { name: "Login", exact: true }).click();
  await context.grantPermissions(["geolocation"]);
  await page.getByRole("button", { name: "Skip" }).click();
  await page.getByRole("link", { name: "Travel", exact: true }).click();
  await page.getByRole('button', {name: 'Hotel', exact: true});
  await page.getByRole('combobox', { name: 'Location or hotel name' }).fill('Budapest');
  await page.getByText("Budapest, Pest County, Hungary", { exact: true }).click();
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('option', { name: 'Amenities' }).click();
  await page.getByRole('option', { name: 'Pet-friendly' }).locator('mat-pseudo-checkbox').click();
  await page.getByRole('option', { name: 'Swimming pool' }).locator('mat-pseudo-checkbox').click();
  await page.getByRole('option', { name: 'Non-smoking' }).locator('mat-pseudo-checkbox').click();
  //await page.waitForSelector ('.cdk-overlay-backdrop')).click(); try this
  await page.locator('.cdk-overlay-backdrop').click();
  // locate the element
  const headingLocator = page.getByRole('heading', { name: 'Sorry, we have not been able' });
  //validate the text using expect 
  await expect(headingLocator).toHaveText('Sorry, we have not been able to find any results for selected filters.');
  // log the actual text content using variable
  const headingText = await headingLocator.textContent();
  console.log('Heading text is:', headingText);

});
