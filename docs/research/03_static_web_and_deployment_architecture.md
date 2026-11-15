# Arsitektur Web Statis & Deployment `ihkaru.github.io`

> **Tujuan Riset**: Menetapkan arsitektur teknis web statis, pemilihan framework/runtime, strategi styling, dan alur otomatisasi deployment ke **GitHub Pages (`ihkaru.github.io`)**.

---

## 1. Spesifikasi Target Deployment: GitHub Pages (`ihkaru.github.io`)

Repositori `ihkaru.github.io` merupakan jenis **User Site** di GitHub Pages:
- **Domain Default**: `https://ihkaru.github.io/`
- **Root URL**: Berjalan langsung di root `/` (tidak memerlukan `base: '/repo-name/'` seperti pada project site).
- **Branch & Target Output**:
  - Kode sumber berada di branch `main`.
  - Deployment statis didorong otomatis via **GitHub Actions** (`actions/deploy-pages`), menghasilkan artifak HTML/CSS/JS yang di-host di CDN global Fastly milik GitHub.
- **Dukungan Custom Domain**: Jika nantinya ingin menggunakan domain personal (misal `ihkaru.dev` atau `ihkaru.id`), GitHub Pages mendukung file `CNAME` dengan otomatisasi penerbitan sertifikat SSL/TLS gratis Let's Encrypt.

---

## 2. Perbandingan Stack Teknologi

| Kriteria | Svelte 5 + Vite 7 (Disarankan) | React 19 + Vite 7 (Model Faidz) | Astro 5 |
| :--- | :--- | :--- | :--- |
| **Ukuran JS Bundle** | **Sangat Kecil (~15–25 kB)** | Sedang (~120–160 kB) | Minimal (Islands / 0 kB JS) |
| **Konsistensi Ekosistem** | **Sangat Tinggi** (Sesuai dengan *Lumis* & *FlashLearn*) | Menengah | Menengah |
| **Reactivity Paradigm** | **Svelte 5 Runes (`$state`, `$derived`)** | Hooks (`useState`, `useEffect`) | Server-First Astro Components |
| **Kecepatan Build & HMR** | **Instan (<100ms via Bun/Vite)** | Cepat (~200ms) | Cepat |
| **Animasi & Interaktivitas** | Transisi bawaan Svelte + Tailwind | Framer Motion (butuh runtime ~30kB) | Integrasi framework |
| **Kompatibilitas GitHub Pages** | 100% Statis (`vite build`) | 100% Statis (`vite build`) | 100% Statis (`astro build`) |

### Rekomendasi Utama: **Svelte 5 + Vite + Tailwind CSS v4** (atau React 19 jika ingin 1:1 parity dengan Faidz)
- **Svelte 5** adalah pilihan paling harmonis dengan portofolio `ihkaru`, karena proyek unggulan utama Anda (`lumis` dan `flashlearn`) dibangun di atas Svelte 5.
- Ketiadaan *Virtual DOM* di Svelte 5 menghasilkan performa rendering 60–120 FPS mulus di semua perangkat (termasuk mobile), selaras dengan aturan `antislop-layoutmobile` dan `ui-design-hygiene`.

---

## 3. Desain Sistem & Anti-Slop Visual Contract

Merujuk pada hasil riset `DESIGN.md` dan modul antislop:

### 3.1 Dials Liveliness
- **`ENERGY 2`**: Bersih, berwibawa, kontras tajam, bebas dari ornamen neon yang melelahkan mata.
- **`RHYTHM 2`**: Variasi tata letak yang berirama (tidak monoton bento grid, tetapi memiliki grid struktural yang kokoh).
- **`MOTION 2`**: Gerakan mikro yang halus (transisi hover, ekspansi kartu detail, dan scroll reveal terkontrol) dengan dukungan penuh `prefers-reduced-motion`.

### 3.2 Tipografi (3 Lapisan Fungsi)
1. **Sans-Serif (Headings & UI Structure)**: Space Grotesk / Google Sans / Plus Jakarta Sans.
2. **Serif (Reading & Narasi Teknis)**: Lora / Merriweather (memberikan sentuhan humanis pada studi kasus).
3. **Monospace (Spesifikasi Teknis, Metrik & Tag)**: Space Mono / JetBrains Mono (digunakan untuk RAM footprint, commit SHA, dan bahasa pemrograman).

### 3.3 Palet Warna (Matte Monochrome + 1 Accent)
- **Background**: `neutral-950` (Dark canvas fokus) atau opsi *clean light* `neutral-50`.
- **Surface / Card**: `neutral-900` dengan border tipis `neutral-800`.
- **Text**: `neutral-100` (utama) dan `neutral-400` (deskripsi sekunder).
- **Single Accent Color**: `emerald-500` / `cyan-500` khusus untuk status ketersediaan (*availability status*) atau indikator live sistem.
- **Dose Cap**: Glassmorphism dibatasi maksimal 1 elemen (navbar mengambang dengan `backdrop-blur-md`).

---

## 4. Pipeline GitHub Actions: CI/CD Deployment Otomatis

File alur kerja `.github/workflows/deploy.yml` disiapkan untuk menjalankan build deterministik menggunakan **Bun**:

```yaml
name: Deploy ihkaru.github.io to GitHub Pages

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
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Bun Environment
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install Dependencies
        run: bun install --frozen-lockfile

      - name: Build Static Web
        run: bun run build

      - name: Setup GitHub Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 5. Penanganan SPA Routing pada GitHub Pages

Pada GitHub Pages, URL langsung ke subhalaman (seperti `/projects/lumis`) akan menghasilkan error 404 jika server tidak menemukan file fisik `projects/lumis.html`.

Terdapat dua strategi solusi:
1. **Prerendering Statis (SSG)**: Meng-generate file HTML statis untuk setiap rute pada saat build (`dist/index.html`, `dist/projects/lumis/index.html`). Ini adalah metode tercepat untuk SEO dan OpenGraph preview.
2. **Fallback `404.html` Script**: Menyediakan file `404.html` yang secara transparan mengalihkan query path kembali ke `index.html` dan me-restore path via client-side router (`history.replaceState`).

Pada implementasi kita, opsi **Prerendering Statis** atau **Single Page Architecture dengan URL hash/modal deep-link** menjadi pilihan paling tangguh dan bebas masalah hosting.
