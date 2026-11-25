# Panduan Setup Blog (GitHub + Netlify + Decap CMS)

## 1. Upload ke GitHub (sekali saja)
1. Buat repo baru di github.com (boleh *private*), mis. `javasahevaraya-site`.
2. Upload isi folder ini (JANGAN upload `node_modules` / `_site`) lewat "Add file → Upload files", atau pakai git.

## 2. Isi nama repo di CMS
Edit `src/admin/config.yml`, ganti `USERNAME/NAMA-REPO` dengan repo Anda, lalu commit.

## 3. Hubungkan Netlify ke GitHub
Netlify → Add new site → Import from Git → pilih repo. Setting build sudah terbaca dari `netlify.toml`
(build `npm run build`, publish `_site`). Domain lama bisa dipindahkan ke site ini.

## 4. Aktifkan login admin (sekali saja)
1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
   - Homepage URL: `https://DOMAIN-ANDA`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Salin Client ID, lalu generate Client Secret.
2. Netlify → Site configuration → Access & security → OAuth → Install provider → GitHub →
   isi Client ID & Secret.

## 5. Menulis artikel
Buka `https://DOMAIN-ANDA/admin` → Login with GitHub → Artikel Blog → New Artikel → Publish.
Situs otomatis rebuild ±1 menit. Mode `editorial_workflow` aktif: artikel melewati Draft → In Review → Ready (publish).
Hapus baris `publish_mode` di `config.yml` jika ingin langsung tayang.

- Centang **Draft** untuk menyimpan tanpa tayang.
- Artikel contoh ada di `src/blog/posts/` — hapus lewat /admin.
- 3 artikel terbaru otomatis tampil di beranda (bagian "Artikel Terbaru").

## Uji di komputer sendiri (opsional)
`npm install` lalu `npm start` → buka http://localhost:8080
