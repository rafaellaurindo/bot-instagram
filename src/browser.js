const puppeteer = require("puppeteer");

const initPage = async (headless = false, defaultViewport = {}) => {
  const configBrowser = {
    headless,
    defaultViewport: {
      height: defaultViewport.height || 1200,
      width: defaultViewport.width || 800
    }
  };

  const browser = await puppeteer.launch(configBrowser);
  const page = await browser.newPage();

  return { browser, page };
};

module.exports = {
  initPage
};
