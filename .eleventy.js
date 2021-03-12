module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./public/css/");
  eleventyConfig.addWatchTarget("./src/sass/");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
