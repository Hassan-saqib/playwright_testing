import { test, expect } from "@playwright/test";

test("test", async ({ page, context }) => {
  await page.goto(
    "https://tp-staging-ten.tenproduct.com/product/ten/homepage/gb/en-gb?v=2"
  );
  await page.getByRole("button", { name: "Accept All Cookies" }).click();
  await page.getByLabel("login").click();
  await page.getByLabel("Email *").click();
  await page.getByLabel("Email *").fill("hassansaqib@tengroup.com");
  await page.getByLabel("Password *").click();
  await page.getByLabel("Password *").fill("!");
  await page.getByLabel("Password *").press("CapsLock");
  await page.getByLabel("Password *").fill("!P");
  await page.getByLabel("Password *").press("CapsLock");
  await page.getByLabel("Password *").fill("!Password10");
  await page.getByRole("button", { name: "Login", exact: true }).click();
  await context.grantPermissions(["geolocation"]);
  await page.getByRole("button", { name: "Skip" }).click();
  await page.getByRole("link", { name: "Travel", exact: true }).click();
  await page.getByLabel("Car", { exact: true }).click();
  await page.getByPlaceholder("Car hire location").click();
  await page.getByPlaceholder("Car hire location").fill("buda");
  await page.getByText("place Budapest City Centre,").click();
  await page.getByLabel("search", { exact: true }).click();
  await page
    .getByRole("link", {
      name: "supplier logo Economy Economy A1 Opel Corsa or Similar transmission Automatic",
    })
    .click(30000);
  await page.getByLabel("book").click();
  await page.getByLabel("Select adult *").locator("span").click();
  await page.getByText("Mr. hassan saqib - United").click();
  await page.getByRole("button", { name: "next" }).click();
  await page.waitForTimeout(1000); // Wait for 1 second (1000 milliseconds)
  await page
    .getByLabel("****4444 Mastercard Credit")
    .locator("div")
    .nth(3)
    .click(30000);
  await page.getByText("+ Add a new card").click();
  await page.getByLabel("Card type *").getByText("Card type").click();
  await page.getByText("Mastercard Credit").click();
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .locator(".mdc-text-field-helper-line")
    .first()
    .click();
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByLabel("Card number")
    .click();
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByLabel("Card number")
    .fill("5555555555554444");
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByPlaceholder("Diacritic characters not")
    .click();
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByPlaceholder("Diacritic characters not")
    .fill("hassan");
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByLabel("Expiry month*")
    .selectOption("12");
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByLabel("Expiry year*")
    .selectOption("34");
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByPlaceholder("CVC2")
    .click();
  await page
    .locator('iframe[title="payment card info"]')
    .contentFrame()
    .getByPlaceholder("CVC2")
    .fill("737");
  await page.getByLabel("Billing address").getByText("Billing address").click();
  await page.getByText("james NW10EE london").click({ timeout: 30000 });
  await page
    .getByRole("button", { name: "next" })
    .waitFor({ state: "visible", timeout: 30000 });
  await page
    .getByLabel("2Choose your payment method")
    .getByText("Back Next")
    .click();
  await page.getByRole("button", { name: "next" }).click({ timeout: 30000 });
  await page
    .locator(
      "#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    )
    .click({ timeout: 30000 });
  await page.getByRole("button", { name: "next" }).click();
});
