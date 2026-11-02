import { test, expect } from '@playwright/test';

// Self-contained smoke test: renders inline HTML, so it needs no server or network.
test('renders a page and interacts with it', async ({ page }) => {
  await page.setContent(`
    <h1>Hyein</h1>
    <button onclick="document.querySelector('#out').textContent = 'clicked'">Click me</button>
    <p id="out"></p>
  `);

  await expect(page.getByRole('heading', { name: 'Hyein' })).toBeVisible();
  await page.getByRole('button', { name: 'Click me' }).click();
  await expect(page.locator('#out')).toHaveText('clicked');
});
