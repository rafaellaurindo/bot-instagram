const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env")
});

const { initPage } = require("./browser");
const { commentOnPost, doLogin, goToPostPage } = require("./actions");

const credentials = require("../config/credentials");
const { commentsInterval } = require("../config/bot");

const main = async () => {
  const { browser, page } = await initPage();

  try {
    await doLogin(page, credentials);
    await goToPostPage(page, "B0GVWFsJJar");

    setInterval(async () => await commentOnPost(page, "Eu quero"), commentsInterval);
  } catch (error) {
    console.log("[+] Exiting...");
    await browser.close();
  }
};

main();
