/*
    Playwright is an automatized tool for testig web apps, it lets you interact with pages by writing code.

    You should start testing your apps BEFORE deploying to production

*/

import { test, expect } from '@playwright/test';

test('clicking the button shows a new cat image and fact', async ({ page }) => {

    // Navigate to the page
    await page.goto('http://localhost:90/react_examples/customHooks');

    // There must be no image first
    const image = await page.locator('img');
    await expect(image).toHaveCount(0);

    // Text must be empty at the start
    const factText = await page.locator('p');
    await expect(factText).toHaveCount(0);

    // Click button
    await page.locator('button').click();

    // Wait until we have image and text
    await expect(image).toHaveCount(1); 
    await expect(factText).not.toHaveText(''); 
    
});
