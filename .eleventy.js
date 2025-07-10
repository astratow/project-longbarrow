module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("admin"); // jeśli admin jest w src/
  return {
    dir: {
      input: "src",
      output: "src/_site"
    }
  };
}; 