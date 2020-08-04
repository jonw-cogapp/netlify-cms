module.exports = (config) => {
  
  config.addPassthroughCopy('admin/config.yml');
  config.addPassthroughCopy('admin/index.html');
  config.addPassthroughCopy('assets');
  config.addPassthroughCopy({'static/images/uploads': 'images/uploads'});

  config.setTemplateFormats([
    "css", // css is not yet a recognized template extension in Eleventy
    "md",
    "njk"
  ]);

  return {
    dir: {
      output: "_site",
      input: "content",
      includes: "_templates",
    }
  }
}