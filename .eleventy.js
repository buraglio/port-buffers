const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Add YAML data file support (removed from Eleventy v2 core)
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Filter: get switches belonging to a specific section
  eleventyConfig.addFilter("whereSection", function (array, section) {
    return array.filter((item) => item.section === section);
  });

  // Filter: get sections in order (unique, preserving order from YAML)
  eleventyConfig.addFilter("uniqueSections", function (array) {
    const seen = new Set();
    return array
      .map((item) => item.section)
      .filter((s) => {
        if (seen.has(s)) return false;
        seen.add(s);
        return true;
      });
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "_data",  // relative to input dir (content/_data)
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
