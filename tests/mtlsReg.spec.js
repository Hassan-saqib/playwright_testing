import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tp-staging-mastercard.tenproduct.com/product/mastercard/homepage/gb/en-gb');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('#top_button_register').click({timeout: 30000});
  await page.locator('div').filter({ hasText: /^Card number \*$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Card number' }).fill('5524869805304460');
  await page.getByRole('button', { name: 'Check Eligibility' }).click();
  await page.getByRole('button', { name: 'register' }).click();
  await page.getByLabel('Please select a title *').getByText('Please select a title').click();
  await page.getByRole('option', { name: 'Mr', exact: true }).locator('span').first().click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('hassan');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('saqib');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('testdemp_1121@yopmail.com');
  await page.getByRole('textbox', { name: 'Re-enter email' }).click();
  await page.getByRole('textbox', { name: 'Re-enter email' }).fill('testdemp_1121@yopmail.com');
  await page.getByRole('combobox', { name: 'Phone number country or' }).locator('div').nth(2).click();
  await page.waitForSelector('combobox', { name: 'Phone number country or' }).locator('div').nth(2);
  await page.getByText('Afghanistan').click();
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('7232222222');
  await page.getByRole('textbox', { name: 'House number' }).click();
  await page.locator('ten-user-registration-details-mastercard div').filter({ hasText: 'Phone number is requiredPhone' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('723222222');
  await page.getByRole('textbox', { name: 'House number' }).click();
  await page.getByRole('textbox', { name: 'House number' }).fill('33');
  await page.getByRole('textbox', { name: 'Address line 1' }).click();
  await page.getByRole('textbox', { name: 'Address line 1' }).fill('james');
  await page.getByRole('textbox', { name: 'Address line 2' }).click();
  await page.getByRole('textbox', { name: 'Address line 2' }).fill('street');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('london');
  await page.getByRole('textbox', { name: 'State or Province' }).click();
  await page.getByRole('textbox', { name: 'State or Province' }).fill('middlesex');
  await page.getByLabel('country or region test *').getByText('country or region test').click();
  await page.getByRole('option', { name: 'Afghanistan' }).locator('span').click();
  await page.getByRole('textbox', { name: 'Zip code/Postcode' }).click();
  await page.getByRole('textbox', { name: 'Zip code/Postcode' }).fill('nw10ee');
  await page.locator('.mat-checkbox-inner-container').click();
  await page.getByRole('button', { name: 'I agree' }).click();
  
  
});