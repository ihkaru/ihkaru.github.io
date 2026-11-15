# Phase 5: GitHub Actions CI/CD & Deployment to `ihkaru.github.io`

> **Fokus**: Inisialisasi git repository lokal, konfigurasi pipeline otomatisasi GitHub Actions (`.github/workflows/deploy.yml`), penyediaan remote GitHub Pages (`ihkaru/ihkaru.github.io`) via `gh` CLI, dan verifikasi deployment.

---

## 1. Tujuan & Deliverables
- Menginisialisasi git repository lokal di `/root/projects/ihkaru.github.io`.
- Mengonfigurasi `.gitignore` untuk mengecualikan `node_modules/`, `dist/`, `.env`, dan cache.
- Membuat workflow GitHub Actions `.github/workflows/deploy.yml`:
  - Menggunakan runtime **Bun**.
  - Menjalankan `bun install --frozen-lockfile` dan `bun run build`.
  - Mengunggah artifak build `./dist` via `actions/upload-pages-artifact@v3`.
  - Mendorong deployment ke GitHub Pages via `actions/deploy-pages@v4`.
- Memanfaatkan **`gh` CLI**:
  - Memeriksa atau membuat remote repository `ihkaru/ihkaru.github.io` (public repository).
  - Mengaktifkan fitur GitHub Pages pada repository melalui API/CLI (`gh api`).
  - Menghubungkan remote `origin` dan mendorong branch `main`.

---

## 2. Rincian Teknis Implementasi
1. `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: ["main"]
     workflow_dispatch:
   permissions:
     contents: read
     pages: write
     id-token: write
   concurrency:
     group: "pages"
     cancel-in-progress: false
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: oven-sh/setup-bun@v2
           with:
             bun-version: latest
         - run: bun install --frozen-lockfile
         - run: bun run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: "./dist"
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```
2. Git commit komprehensif mengikuti standar Conventional Commits (`feat: ...`, `docs: ...`).

---

## 3. Kriteria Verifikasi
- [ ] Build lokal `bun run build` menghasilkan bundle statis yang bersih tanpa error.
- [ ] Repositori GitHub `ihkaru/ihkaru.github.io` terhubung dan tersinkronisasi di branch `main`.
- [ ] GitHub Actions workflow terpicu dan berhasil men-deploy situs ke `https://ihkaru.github.io/`.
