import { test, expect } from '@playwright/test';

test('Sign Up form elements are visible', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/register', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Have an account?' })).toBeVisible();

  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Email')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible();
});
