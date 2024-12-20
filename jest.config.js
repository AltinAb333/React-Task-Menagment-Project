module.exports = {
  testEnvironment: "jest-environment-jsdom", // Ensure jsdom is used
  transform: {
    "^.+\\.jsx?$": "babel-jest", // For handling JS and JSX files
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Use @testing-library/jest-dom
};
