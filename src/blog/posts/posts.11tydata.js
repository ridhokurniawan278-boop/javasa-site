module.exports = {
  layout: "post.njk",
  eleventyComputed: {
    // Artikel dengan draft: true tidak dipublikasikan
    permalink: (data) => (data.draft ? false : `/blog/${data.page.fileSlug}/`),
  },
};
