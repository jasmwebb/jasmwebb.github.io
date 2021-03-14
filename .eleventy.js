const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("public/css/");
  eleventyConfig.addPassthroughCopy("assets/");

  eleventyConfig.addWatchTarget("src/sass/");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
