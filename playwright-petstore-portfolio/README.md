# Playwright QA Portfolio — PetStore

## Overview

This repository contains automated end-to-end tests created using Playwright.

The project simulates real QA work and demonstrates practical testing of a web application.

---

## Scope

Tested areas:

* Authentication (Sign In / Sign Up)
* Search functionality
* Cart functionality

---

## Test Scenarios

### Authentication

* User can navigate to Sign In page
* User can navigate to Sign Up page
* User can register with valid data
* Validation errors are displayed for invalid input

### Search

* User can search for products
* Search results are displayed correctly
* Empty search handling

### Cart

* User can add products to cart
* Cart updates correctly
* Cart limits and validation rules are enforced

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Faker.js (test data generation)

---

## Project Structure

```
tests/
 ├── auth/
 ├── search/
 ├── cart/
```

---

## Test Execution

Run all tests:

```
npm test
```

Run in headed mode:

```
npm run test:headed
```

Run UI mode:

```
npm run test:ui
```

---

## Results

* Total tests: 24
* Passed: 24
* Failed: 0

---

## What is covered

The tests include:

* Positive and negative scenarios
* Form validation
* UI behavior verification
* Navigation testing
* Business logic validation (e.g. cart rules)

---

## Example Test

```js
import { test, expect } from '@playwright/test';

test('User can navigate to Sign In page', async ({ page }) => {
  await page.goto('https://conduit.mate.academy');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('/user/login');
});
```

---

## Purpose of this project

This project demonstrates:

* ability to write automated UI tests
* understanding of test design
* use of locators and assertions
* handling dynamic test data
* structuring test automation projects

---

## Future Improvements

* Page Object Model (POM)
* API testing (Playwright / Postman)
* CI/CD integration (GitHub Actions)
* Test reporting (Allure)

---

## Notes

This project represents a practical QA automation example and is continuously being improved.


