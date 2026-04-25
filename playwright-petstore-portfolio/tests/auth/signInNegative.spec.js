import { test, expect } from '@playwright/test';

test.describe('Sign In negative scenarios', () => {

  test('Error displayed when password is empty', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/login');

    await page.getByPlaceholder('Email').fill('test@gmail.com');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText("password:can't be blank");
  });

  test('Error displayed when email is empty', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/login');

    await page.getByPlaceholder('Password').fill('newpass123!');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText("email:can't be blank");
  });

  test('Error displayed for invalid credentials', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/login');

    await page.getByPlaceholder('Email').fill('test@gmail.com');
    await page.getByPlaceholder('Password').fill('1');

    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText('email or password:is invalid');
  });

});
