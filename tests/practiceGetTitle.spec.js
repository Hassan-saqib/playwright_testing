 const {test,expect} = require ('@playwright/test');

 test('homepage',async ({page}) =>{

await page.goto('https://www.demoblaze.com/');
const pageTitle =  await page.title();
console.log('page title is: ' + pageTitle);


await expect(page).toHaveTitle(/STORE/i);

await expect(page).toHaveURL('https://www.demoblaze.com');

const pageURL = page.url();
console.log('page URL is ' + pageURL);

});