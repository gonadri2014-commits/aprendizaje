const fs = require('fs');
const { defineConfig } = require('@playwright/test');

// En la nube usa el Chromium preinstalado; en local, el que descarga `npx playwright install`.
const chromiumPath = process.env.PW_CHROMIUM_PATH ||
  (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    launchOptions: chromiumPath ? { executablePath: chromiumPath } : {},
  },
});
