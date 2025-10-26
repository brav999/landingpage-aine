import { test, expect } from "@playwright/test";

test("links de rodape estao presentes", async ({ page }) => {
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  await expect(footer.getByRole("link", { name: "Política de Privacidade" })).toBeVisible();
  await expect(footer.getByRole("link", { name: "Termos de Uso" })).toBeVisible();
});
