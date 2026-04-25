import { test, expect } from '@playwright/test';

test.describe('Sign Up negative scenarios', () => {

  test('Error displayed when username is empty', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/register');

    await page.getByPlaceholder('Email').fill('testemail@test.com');
    await page.getByPlaceholder('Password').fill('Password1@');

    await page.getByRole('button', { name: 'Sign up' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText('username:Username must start with a letter');
  });

  test('Error displayed when email is empty', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/register');

    await page.getByPlaceholder('Username').fill('User1233');
    await page.getByPlaceholder('Password').fill('Password1@');

    await page.getByRole('button', { name: 'Sign up' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText('email:This email does not seem valid.');
  });

  test('Error displayed when password is empty', async ({ page }) => {
    await page.goto('https://conduit.mate.academy/user/register');

    await page.getByPlaceholder('Username').fill('User1233');
    await page.getByPlaceholder('Email').fill('testemail@test.com');

    await page.getByRole('button', { name: 'Sign up' }).click();

    await expect(page.getByRole('list').nth(1))
      .toContainText("password:can't be blank");
  });

});
