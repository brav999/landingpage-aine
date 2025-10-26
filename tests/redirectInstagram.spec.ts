import { test, expect } from "@playwright/test";

test("ancora de plataforma atualiza a url", async ({ page }) => {
  await page.goto("/");

  const anchor = page.getByRole("link", { name: "Conheça a plataforma" });
  await expect(anchor).toBeVisible();

  await anchor.click();
  await expect(page).toHaveURL(/#plataforma$/);
});
