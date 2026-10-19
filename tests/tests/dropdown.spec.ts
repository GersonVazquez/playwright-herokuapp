//Task: Seleccionar “Option 2” en el desplegable.

import { test, expect } from '@playwright/test';

test('Dropdown', async ({ page }) => {
    await test.step('Entrando a la pagina', async () => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
    });

    await test.step('Dropdown y seleccionando opcion 2', async () => {
        await page.locator('#dropdown').selectOption('2');
    });
    
    
}); 
