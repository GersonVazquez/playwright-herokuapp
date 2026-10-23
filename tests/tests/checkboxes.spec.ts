import { test, expect } from '@playwright/test';

test('Checkboxes', async ({ page }) => {
    await test.step('Entrando a la web', async () => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
    });

    await test.step('Tildo el primero y destildo el segundo', async () => {
        await page.getByRole('checkbox').first().check();
        await page.getByRole('checkbox').nth(1).uncheck();
    });
    
    await test.step('Verifico que el primero este tildado y el segundo destildado', async () => {
        await expect(page.getByRole('checkbox').first()).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
    });
    
    
})
