# Dokumentasi Riset Portofolio Personal `ihkaru.github.io`

Direktori ini memuat hasil riset komprehensif, kurasi teknis, dan kumpulan *agent skills* relevan untuk merancang dan membangun situs portofolio web statis personal bagi **`ihkaru`** dan **`ipds6104`**, yang akan di-deploy ke **GitHub Pages (`ihkaru.github.io`)**.

---

## 📑 Daftar Dokumen Riset

1. **[01_agent_skills_research.md](file:///root/projects/ihkaru.github.io/docs/research/01_agent_skills_research.md)**
   - Analisis lengkap perintah `npx skills add faidzagustiawan/portofolio --all -g -y`.
   - Standar Open Agent Skills ([skills.sh](https://skills.sh)) dan dekonstruksi repository `faidzagustiawan/portofolio`.
   - Bedah 6 modul skill dari `miqdadbadjuber/anti-slop` (`antislop`, `antislop-ui`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, `antislop-code`).
   - Panduan penerapan *Design Direction Contract* (`DESIGN.md`) dan *Liveliness Dials* untuk mencegah hasil buatan AI yang klise (*anti-slop*).

2. **[02_github_repos_curation.md](file:///root/projects/ihkaru.github.io/docs/research/02_github_repos_curation.md)**
   - Audit mendalam terhadap 60 repositori di `ihkaru` dan 19 repositori di `ipds6104`.
   - Klasifikasi proyek ke dalam 3 tier:
     - **Tier 1 (Flagship Works)**: `lumis`, `propylon-gateway`, `cerdas`, `aina`, `economy`, `auth` (rIDM).
     - **Tier 2 (Specialized Engineering)**: `flashlearn`, `tradingview-streamer-rs`, `human-gradient-descent`, `micro-node`, `mediavault`, `epistex`, `whatsmeow-coolify-bot`, `GardaData`.
     - **Tier 3 (Arsip / Trivial / Fork)**: Dikecualikan dari tampilan agar portofolio tetap tajam dan berwibawa.
   - Strategi penyajian berbasis bukti nyata (*real architecture*, *concrete metrics*, *direct code links*).

3. **[03_static_web_and_deployment_architecture.md](file:///root/projects/ihkaru.github.io/docs/research/03_static_web_and_deployment_architecture.md)**
   - Pemilihan stack teknologi (Svelte 5 Runes + Vite 7 + Tailwind CSS v4 vs React 19).
   - Spesifikasi GitHub Pages untuk User Site (`https://ihkaru.github.io/`).
   - Alur otomatisasi CI/CD via GitHub Actions (`.github/workflows/deploy.yml`) berbasis runtime **Bun**.
   - Penanganan SPA routing, SSG prerendering, OpenGraph preview, dan kepatuhan aksesibilitas.

4. **[04_selected_flagship_projects_deep_dive.md](file:///root/projects/ihkaru.github.io/docs/research/04_selected_flagship_projects_deep_dive.md)**
   - Eksplorasi mendalam 7 proyek pilihan utama dalam portofolio:
     1. **Aina (あいな)** *(Paling Utama / Flagship)* — WhatsApp Agentic AI Co-Worker in Pure Rust.
     2. **Cerdas** — Open-Source Self-Hosted AppSheet Alternative (Laravel Octane + Vue 3 + SQLite PWA).
     3. **Lumis** — Ultra-Lightweight Enterprise AI Platform in Pure Rust & Svelte 5 (<25MB RAM).
     4. **Propylon Gateway** — Zero-Trust MCP Control Plane & Resilient Data Gateway in Pure Rust.
     5. **SSO BPS Mempawah (rIDM Platform)** — Central SAML 2.0 & OIDC Identity Provider in Rust (40-60MB RAM).
     6. **FlashLearn** — Hexagonal Active-Recall Educational Platform (Bun + Elysia + Svelte 5 + 3D Flashcards).
     7. **Dokter-V (Sikendis)** — Digitalisasi Transaksi Keuangan, Validasi SBM 2026 & LPD AI (FrankenPHP Octane).
   - Blueprint arsitektur, diagram alur sistem, metrik pembuktian teknis, dan strategi tata letak visual anti-slop.

5. **[05_anti_slop_principles_and_living_ui.md](file:///root/projects/ihkaru.github.io/docs/research/05_anti_slop_principles_and_living_ui.md)**
   - Analisis fenomena AI Web Slop di industri web modern & ciri-ciri desain khas AI (gradien ungu-cyan, Inter default, bento grid mosaic, em dash marketing fluff).
   - Panduan de-slopify (palet matte monochrome, tipografi tri-tier, hierarki berbasis keputusan).
   - Arsitektur *Living UI Components* untuk menghadirkan visual aplikasi hidup tanpa file gambar statis yang berat.

---

## 🛠️ Direktori Agent Skills Terpasang

Seluruh skill antislop telah diekstrak dan siap diakses oleh AI coding agent di:
- **Lokasi Riset**: [docs/research/skills/](file:///root/projects/ihkaru.github.io/docs/research/skills/)
- **Lokasi Project Agent**: [.agents/skills/](file:///root/projects/ihkaru.github.io/.agents/skills/)
- **Symlink Global**: `~/.agents/skills/antislop*`

| Skill | Concern | File Instruksi |
| :--- | :--- | :--- |
| **`antislop`** | Core Gatekeeper & Purpose-Gate | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop/SKILL.md) |
| **`antislop-ui`** | Palet warna, tipografi, dose-cap glow & glass | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop-ui/SKILL.md) |
| **`antislop-copywriting`** | Narasi bebas kata klise AI, bahasa lugas & otentik | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop-copywriting/SKILL.md) |
| **`antislop-human`** | Rasio kontras ($\ge 4.5:1$), navigasi keyboard, a11y | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop-human/SKILL.md) |
| **`antislop-layoutmobile`** | Touch target $\ge 44\text{px}$, zero overflow, responsive | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop-layoutmobile/SKILL.md) |
| **`antislop-code`** | Disiplin komentar kode (fokus alasan "WHY") | [SKILL.md](file:///root/projects/ihkaru.github.io/docs/research/skills/antislop-code/SKILL.md) |
