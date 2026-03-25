const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = () => {
  const file = path.join(__dirname, "switches.yaml");
  return yaml.load(fs.readFileSync(file, "utf8"));
};
