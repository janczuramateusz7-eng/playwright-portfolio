import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('User can register with valid data', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/register', {
    waitUntil: 'domcontentloaded'
  });

  const username = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);

  await page.getByRole('button', { name: 'Sign up' }).click();

  await expect(page).toHaveURL('https://conduit.mate.academy/');
  await expect(page.getByText('Your Feed')).toBeVisible();
});
