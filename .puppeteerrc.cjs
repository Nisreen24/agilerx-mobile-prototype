// Keep Chrome outside the user profile — the profile path contains Arabic
// characters, which some Chrome tooling mishandles on Windows.
module.exports = {
  cacheDirectory: "C:\\src\\puppeteer-cache",
};
