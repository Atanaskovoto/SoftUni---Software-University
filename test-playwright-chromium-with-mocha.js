const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const options = { headless: false, slowMo: 200 };
const url = 'http://127.0.0.1:5500/js-applications-february-2023/lab-single-page-applications/SPA/index.html'

describe('Custom test', function () {
    it('Should work', async function () {
        const browser = await chromium.launch(options);
        const page = await browser.newPage();

        await page.goto(url);
        await page.click('text = Catalog');

        await browser.close();

        // expect(true).to.be.true;
    });
});
