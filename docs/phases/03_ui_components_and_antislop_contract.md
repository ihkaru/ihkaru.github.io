# Phase 3: Core UI Components & Anti-Slop Implementation

> **Fokus**: Pembangunan antarmuka pengguna berbasis komponen Svelte 5 (Navbar, Hero, Spotlight Aina, Grid Proyek 2–7, Footer) dengan kepatuhan penuh terhadap aturan Anti-Slop.

---

## 1. Tujuan & Deliverables
- Membangun layout utama portofolio yang bersih, tenang, dan berwibawa:
  1. **Navbar (`src/components/Navbar.svelte`)**:
     - Logo / Branding tenang (`ihkaru`).
     - Badge ketersediaan live (`Available for Systems & AI Engineering` dengan aksen `emerald-400`).
     - Pengalih bahasa (`EN / ID`) berbasis link/state tenang.
  2. **Hero Section (`src/components/Hero.svelte`)**:
     - Headline tanpa klaim palsu: *"Systems, AI Agents, and High-Performance Engineering"*.
     - Ringkasan profil: Pengembang sistem berbasis Rust, Svelte, dan arsitektur enterprise.
     - Tautan langsung ke profil GitHub (`github.com/ihkaru` & `github.com/ipds6104`).
  3. **Aina Spotlight Hero Card (`src/components/AinaSpotlight.svelte`)**:
     - Penempatan eksklusif sebagai proyek utama.
     - Visualisasi panel terminal WhatsApp / Agent telemetry: Multi-Account Pool status, FTS5 latency (<5ms), DAC Security.
     - Tag arsitektur dan tombol aksi langsung (*Explore Architecture*, *GitHub Source*).
  4. **Project Grid Section (`src/components/ProjectGrid.svelte` & `ProjectCard.svelte`)**:
     - Tab filter domain cepat: `All`, `Systems & Rust`, `AI Infrastructure`, `Enterprise Platforms`.
     - Kartu 2-kolom responsif untuk 6 proyek lainnya (Cerdas, Lumis, Propylon, rIDM, FlashLearn, Dokter-V).
     - Menampilkan 3 metrik konkret dan badge tech stack per kartu.
  5. **Footer (`src/components/Footer.svelte`)**:
     - Metadata lisensi (MIT), tautan GitHub, build provenance timestamp.

---

## 2. Invarian Anti-Slop (Zero Slop Checklist)
- [ ] Dilarang memakai gradien ungu-biru neon generic atau bento-grid mosaic template.
- [ ] Dilarang memakai emoji dekoratif berlebihan di judul dan tombol (gunakan Lucide icon konsisten).
- [ ] Dose cap: Efek glassmorphism hanya ada pada navbar floating (`backdrop-blur-md`).
- [ ] Semua touch target pada perangkat mobile memiliki ukuran minimal $\ge 44 \times 44\text{ px}$.
- [ ] Tidak ada *horizontal overflow* di semua breakpoint layar (mobile 320px hingga desktop 4K).

---

## 3. Kriteria Verifikasi
- [ ] Komponen Svelte 5 ter-render tanpa runtime error atau peringatan konsol.
- [ ] Filter kategori berfungsi instan tanpa re-render berlebihan.
- [ ] Tampilan mobile rapi dan responsif.
