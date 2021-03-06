const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [100, 200],
    formats: ["avif", "jpeg", "webp"],
    outputDir: "./public/assets/thumbs/",
    urlPath: "/assets/thumbs/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addWatchTarget("src/sass/");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPassthroughCopy("assets/webb_jasmine_resume.pdf");
  eleventyConfig.addPassthroughCopy("assets/branding");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy({"node_modules/@zachleat/filter-container/*.js": "js"});

  eleventyConfig.addCollection("techList", function(collectionApi) {
    const allTech = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tech" in item.data) {
        item.data.tech.forEach(tech => allTech.add(tech));
      }
    });

    return [...allTech].sort()
  });


  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
