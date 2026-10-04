const { test, expect } = require('@playwright/test');

test('Playwright funciona', async ({ page }) => {
  await page.setContent('<h1>Dashboard Financiero</h1>');
  await expect(page.locator('h1')).toHaveText('Dashboard Financiero');
});
