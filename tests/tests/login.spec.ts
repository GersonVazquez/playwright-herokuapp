import { test, expect } from '@playwright/test';

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

test('Login de Herokuapp', async ({ page }) => {
        await test.step('Entrando en la web', async () => {
            await page.goto('https://the-internet.herokuapp.com/login');
        });

        await test.step('Ingresando user y login', async () => {
           await page.getByRole('textbox', { name: 'Username' }).fill(username);
           await page.getByLabel('password').fill(password);
           await page.getByRole('button', { name: ' Login' }).click();
        });

        await test.step('Redirigido a la zona segura', async () => {
            await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
            await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
        });

    });