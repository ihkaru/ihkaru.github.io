# Phase 1: Project Scaffolding & Anti-Slop Design System

> **Fokus**: Inisialisasi stack Svelte 5 + Vite 7 dengan Bun, integrasi Tailwind CSS v4, konfigurasi tipografi, serta penerapan *Design Direction Contract* (`DESIGN.md`).

---

## 1. Tujuan & Deliverables
- Menginisialisasi repositori web statis menggunakan **Svelte 5 (Runes)** dan **Vite 7** via **Bun**.
- Mengonfigurasi **Tailwind CSS v4** dengan arsitektur semantic token tanpa dependensi runtime CSS yang berat.
- Mengatur pemuatan font performa tinggi (*preconnect* Google Fonts):
  - **Headings & Structure**: Space Grotesk
  - **Body / Prose**: Lora (serif humanis)
  - **Metrics / Specs**: Space Mono
- Membuat dokumen **`DESIGN.md`** di root repositori dengan:
  - Dials Liveliness: `ENERGY 2 / RHYTHM 2 / MOTION 2`
  - Palet Monochrome Fokus (`neutral-950` canvas, `neutral-900` card, `emerald-400` status accent)
  - Kontrak Aksesibilitas (`prefers-reduced-motion` dan focus visible states)
- Menyiapkan script linter dan format via Bun.

---

## 2. Rincian Teknis Implementasi

### 2.1 File & Konfigurasi yang Dibuat
1. `package.json`: Definisi dependensi (`svelte`, `@sveltejs/vite-plugin-svelte`, `tailwindcss`, `@tailwindcss/vite`, `lucide-svelte`).
2. `vite.config.ts`: Konfigurasi build statis Vite dengan Svelte 5 plugin.
3. `src/app.css`: Token semantik Tailwind v4 dan aturan `@media (prefers-reduced-motion)`.
4. `index.html`: Shell HTML dengan preconnect font dan meta tags SEO dasar.
5. `DESIGN.md`: Pedoman estetika dan boundary anti-slop yang menjadi acuan AI agent.

---

## 3. Kriteria Verifikasi
- [ ] `bun install` berhasil tanpa peringatan dependensi rusak.
- [ ] `bun run build` menghasilkan bundle statis di folder `dist/` dengan ukuran JS awal < 30 kB.
- [ ] Font Space Grotesk, Lora, dan Space Mono ter-render dengan benar.
- [ ] Kontrak kontras warna memenuhi standar WCAG AA ($\ge 4.5:1$).
