import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Ainê/);
});

test('redirect to whatsapp', async ({ page, context }) => {
  try {
await page.goto('/');

    const linkParaNovaAba = page.getByRole('contentinfo').getByRole('link').nth(4);
    await expect(linkParaNovaAba).toBeVisible();

    const pagePromise = context.waitForEvent('page');
    await linkParaNovaAba.click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState('networkidle');

    const expectedUrl = 'https://api.whatsapp.com/send/?phone=554834115334&text&type=phone_number&app_absent=0';
    
    await expect(newPage).toHaveURL(expectedUrl);

  } catch (error) {
    console.error('Ocorreu um erro durante o teste:', error);
    throw error;
  }
});

test('redirect to instagram', async ({ page, context }) => {
  try {
await page.goto('/');

    const linkParaNovaAba = page.getByRole('link').filter({ hasText: /^$/ });
    await expect(linkParaNovaAba).toBeVisible();

    const pagePromise = context.waitForEvent('page');
    await linkParaNovaAba.click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState('networkidle');

    const expectedUrl = 'https://www.instagram.com/ainefisiopelvica/';
   
    await expect(newPage).toHaveURL(expectedUrl);

  } catch (error) {
    console.error('Ocorreu um erro durante o teste:', error);
    throw error;
  }
});