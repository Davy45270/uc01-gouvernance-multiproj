import { test, expect } from '@playwright/test';

const apiBase = 'http://localhost:13101';

test('UC01: créer initiative via UI + WSJF list', async ({ page, request }) => {
  // Health check API
  const health = await request.get(`${apiBase}/healthz`);
  expect(health.ok()).toBeTruthy();

  // Créer via API pour seed
  const apiCreate = await request.post(`${apiBase}/v1/initiatives`, {
    data: {
      title: 'Initiative E2E',
      description: 'Test e2e',
      value: 8,
      risk: 5,
      opportunity: 6,
      effort: 4,
    },
  });
  expect(apiCreate.ok()).toBeTruthy();

  // Vérifier dans l'UI
  await page.goto('/');
  await page.getByRole('button', { name: 'Rafraîchir' }).click();
  await expect(page.getByText('Initiative E2E')).toBeVisible();

  // Créer via UI
  await page.getByLabel('Titre').fill('Initiative UI');
  await page.getByRole('button', { name: 'Créer' }).click();
  await expect(page.getByText('Initiative UI')).toBeVisible();
});
