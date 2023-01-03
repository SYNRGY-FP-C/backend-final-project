/** @type {import('jest').Config} */
const config = {
  displayName: "Final Project - Test",
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  silent: true,
  detectOpenHandles: false,
  verbose: true,
  passWithNoTests: true,
  forceExit: true,
};

module.exports = config;
