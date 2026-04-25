import { test, expect } from '@playwright/test';

test('User can sign in with valid credentials', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/login', {
    waitUntil: 'domcontentloaded'
  });

  await page.getByPlaceholder('Email').fill('userqa@1.com');
  await page.getByPlaceholder('Password').fill('Password1@');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://conduit.mate.academy/');
  await expect(page.getByText('Your Feed')).toBeVisible();
});
