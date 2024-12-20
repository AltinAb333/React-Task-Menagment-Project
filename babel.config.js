module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react", // For JSX and React 17+ features
  ],
  plugins: [
    // Optional: Enable automatic runtime for React 17+ (if using React 17 or later)
    "@babel/plugin-transform-react-jsx",
  ],
};
