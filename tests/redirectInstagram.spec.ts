import { test, expect } from '@playwright/test';

test('redirect to instagram', async ({ page, context }) => {
  
await page.goto('/');

    const linkParaNovaAba = page.getByRole('link').filter({ hasText: /^$/ });
    await expect(linkParaNovaAba).toBeVisible();

    const pagePromise = context.waitForEvent('page');
    await linkParaNovaAba.click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState('networkidle');

    const expectedUrl = /ainefisiopelvica/;
   
    await expect(newPage).toHaveURL(expectedUrl);
});