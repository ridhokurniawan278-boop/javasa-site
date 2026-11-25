module.exports = function (eleventyConfig) {
  // File gambar & dokumen disalin apa adanya
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  // Halaman HTML lama disalin apa adanya (URL tetap /layanan.html dst.)
  eleventyConfig.addPassthroughCopy("src/*.html");
  eleventyConfig.addPassthroughCopy("src/*.{png,jpg,jpeg,webp,pdf,ico}");

  // Kumpulan artikel (draft otomatis dikecualikan), terbaru di atas
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("tanggal", (d) =>
    new Intl.DateTimeFormat("id-ID", {
      day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta",
    }).format(new Date(d))
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("bacaMenit", (txt) => {
    const w = String(txt || "").split(/\s+/).length;
    return Math.max(1, Math.round(w / 200));
  });
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: false,
    templateFormats: ["md", "njk", "11ty.js"],
  };
};
