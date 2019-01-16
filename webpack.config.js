//TO RUN WEBPACK: Type in the command: npx webpack --config webpack.config.js

const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js", //Where should we begin looking for code to bundle?
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  }
}
