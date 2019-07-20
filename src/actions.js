const commentOnPost = async (page = {}, message = "") => {
  const commentBoxSelector = ".RxpZH form textarea";
  const commentSubmitSelector = '.RxpZH form button[type="submit"]';
  await page.waitForSelector(commentBoxSelector);
  await page.click(commentBoxSelector);
  await page.type(commentBoxSelector, message);
  await page.click(commentSubmitSelector);

  console.log("[+] BOT made a new comment on post.");
};

const doLogin = async (page = {}, credentials = {}) => {
  await page.goto("https://www.instagram.com/accounts/login");
  await page.waitForSelector('input[name="username"]');

  await page.type('input[name="username"]', credentials.username);
  await page.type('input[name="password"]', credentials.password);
  await page.click('button[type="submit"]');

  await page.waitForSelector(".MWDvN");
  console.log("[+] BOT is logged.");
};

const goToPostPage = async (page = {}, postId = "") => {
  await page.goto(`https://www.instagram.com/p/${postId}/`);
  console.log("[+] BOT has been entered on post page.");
};

module.exports = {
  commentOnPost,
  doLogin,
  goToPostPage
};
