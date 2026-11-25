// Daftar 3 artikel terbaru untuk bagian "Artikel Terbaru" di beranda
module.exports = class {
  data() {
    return { permalink: "/blog/feed.json", eleventyExcludeFromCollections: true };
  }
  render(data) {
    const fmt = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
    return JSON.stringify(
      data.collections.posts.slice(0, 3).map((p) => ({
        title: p.data.title,
        description: p.data.description || "",
        url: p.url,
        date: fmt.format(p.date),
        image: p.data.image || null,
      }))
    );
  }
};
