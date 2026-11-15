# Phase 4: Architecture Deep-Dive Drawer / Modal & Interactive Visualizer

> **Fokus**: Komponen modal/drawer detail proyek interaktif yang menampilkan diagram alur arsitektur, tantangan rekayasa, solusi konkret, dan tautan repositori yang ramah aksesibilitas.

---

## 1. Tujuan & Deliverables
- Mengembangkan komponen **`src/components/ProjectModal.svelte`**:
  - Dapat dibuka saat kartu proyek diklik atau melalui deep-linking URL hash (`#project-aina`, `#project-lumis`, dsb.).
  - Menampilkan:
    - Judul, badge kategori, dan status produksi / open-source.
    - Statement problem (*The Engineering Challenge*).
    - Solusi arsitektural (*Architecture & Innovation*).
    - Diagram visual alur data interaktif (visual flow steps).
    - Daftar lengkap teknologi, metrik terverifikasi, dan link GitHub / live deployment.
  - Aksesibilitas:
    - Tombol tutup dengan target sentuh $\ge 44\text{px}$.
    - Mendukung penutupan via tombol keyboard `Escape` dan klik di backdrop.
    - Penguncian scroll latar belakang (`overflow: hidden` pada `document.body` saat modal aktif).
    - Focus trapping agar pembaca layar tidak tersesat di elemen latar.

---

## 2. Invarian Aksesibilitas & Navigasi
- [ ] Modal dapat diakses sepenuhnya via navigasi keyboard (Tab, Shift+Tab, Enter, Escape).
- [ ] Pergantian URL hash tidak menyebabkan page reload.
- [ ] Animasi modal halus dengan durasi $\le 200\text{ms}$ dan sepenuhnya dinonaktifkan jika `prefers-reduced-motion` aktif.

---

## 3. Kriteria Verifikasi
- [ ] Semua 7 proyek dapat dibuka di modal dengan data arsitektur yang lengkap dan presisi.
- [ ] Navigasi browser (Back/Forward) dapat membuka dan menutup modal secara alami.
- [ ] Tidak terjadi *layout shift* atau kebocoran scroll saat modal dibuka di smartphone.
