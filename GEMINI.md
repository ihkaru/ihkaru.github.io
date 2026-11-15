# GEMINI.md: Engineering & Architecture Guidelines

> **Project**: `ihkaru.github.io`  
> **Type**: High-Performance Static Developer Portfolio & Systems Showcase  
> **Target Deployment**: GitHub Pages (`https://ihkaru.github.io/`)

---

## 🏛️ Arsitektur & Prinsip Desain

Portofolio ini dibangun dengan standar rekayasa tingkat enterprise:
- **Framework**: **Svelte 5 (Runes)** untuk reaktivitas instan tanpa overhead Virtual DOM.
- **Bundler & Build Tool**: **Vite 7** dipadukan dengan runtime berkecepatan tinggi **Bun**.
- **Styling**: **Tailwind CSS v4** dengan sistem token semantik kustom.
- **Standar Estetika (Anti-Slop)**: Mengikuti kontrak desain ketat di `DESIGN.md` untuk mengeliminasi *"AI slop"* (tanpa gradien ungu-biru generic, tanpa bento grid mosaic template, tanpa klaim/metrik palsu, dan kepatuhan penuh terhadap aksesibilitas WCAG AA).

---

## 🗺️ Roadmap & Fase Implementasi

Seluruh perencanaan dan eksekusi bertahap terdokumentasi secara modular di:
- 📍 **[docs/ROADMAP.md](docs/ROADMAP.md)**: Master Roadmap
  - 📄 **[Phase 1: Project Scaffolding & Design System](docs/phases/01_project_scaffolding_and_design_system.md)**
  - 📄 **[Phase 2: Curated Data Layer & Architecture Models](docs/phases/02_curated_data_layer_and_architecture_models.md)**
  - 📄 **[Phase 3: Core UI Components & Anti-Slop Implementation](docs/phases/03_ui_components_and_antislop_contract.md)**
  - 📄 **[Phase 4: Architecture Deep-Dive Drawer & Interactive Visualizer](docs/phases/04_deep_dive_modal_and_interactive_architecture.md)**
  - 📄 **[Phase 5: GitHub Actions CI/CD & Deployment](docs/phases/05_github_actions_ci_cd_and_deployment.md)**

---

## 7 Proyek Pilihan yang Ditampilkan (Showcase Hierarchy)

1. **🌸 Aina (あいな)** *(Paling Utama / Flagship)*: WhatsApp Agentic AI Co-Worker in Pure Rust (Multi-Account Quota Pool, DAC, <5ms FTS5).
2. **🧠 Cerdas**: Open-Source Self-Hosted AppSheet Alternative (Laravel Octane + Vue 3 + SQLite PWA).
3. **⚡ Lumis**: Ultra-Lightweight Enterprise AI Platform in Pure Rust & Svelte 5 (<25MB RAM, OpenUI Generative Canvas).
4. **🛡️ Propylon Gateway**: Zero-Trust Model Context Protocol (MCP) Control Plane & Data Gateway in Pure Rust.
5. **🦀 SSO BPS Mempawah (rIDM)**: Central SAML 2.0 & OIDC Identity Provider in Rust (40-60MB RAM).
6. **⚡ FlashLearn**: Hexagonal Active-Recall Educational Platform (Bun + Svelte 5 + 3D Flashcards).
7. **📋 Dokter-V (Sikendis)**: Financial & Assignment Governance with AI SBM Engine & FrankenPHP Octane.

---

## 🛠️ Perintah Verifikasi & Build (The Gauntlet)

Semua perintah dijalankan menggunakan runtime **Bun**:

```bash
# 1. Instalasi dependensi
bun install --frozen-lockfile

# 2. Type checking & verifikasi sintaks Svelte
bun run check

# 3. Build artifak statis produksi
bun run build

# 4. Preview hasil build lokal
bun run preview
```

---

## 🔒 Kebijakan Integritas & Anti-Leak
1. **Zero Mock Invariant**: Semua metrik, statistik RAM, dan tautan repositori harus merefleksikan fakta konkret dari kode sumber repositori yang ada. Dilarang memalsukan angka performa atau testimoni fiktif.
2. **Portabilitas 100%**: File panduan ini tidak boleh merujuk path absolut lokal mesin pengembang atau kredensial rahasia apa pun agar dapat dieksekusi secara hermetik di lingkungan CI/CD GitHub Actions mana pun.
