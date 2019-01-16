//TO RUN WEBPACK: Type in the command: npx webpack --config webpack.config.js

const $ = require("jquery");
const Person = require("./modules/Person");

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Person("Jane Smith", "green");
jane.greet();

// $("div").remove();
