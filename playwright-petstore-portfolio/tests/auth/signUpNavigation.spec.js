import { test, expect } from '@playwright/test';

test('User can navigate to Sign Up page from homepage', async ({ page }) => {
  await page.goto('https://conduit.mate.academy', {
    waitUntil: 'domcontentloaded'
  });

  await page.getByRole('link', { name: 'Sign up' }).click();

  await expect(page).toHaveURL('https://conduit.mate.academy/user/register');
});
