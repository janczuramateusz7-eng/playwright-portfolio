import { test, expect } from '@playwright/test';

test('Sign In form elements are visible', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/login', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Need an account?' })).toBeVisible();

  await expect(page.getByPlaceholder('Email')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
});
