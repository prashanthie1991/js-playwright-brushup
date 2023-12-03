const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  // const context = await browser.newContext()
  // const page = await context.newPage();
  await page.goto("https://www.google.com")
   await expect(page).toHaveTitle(/Google/);
});
