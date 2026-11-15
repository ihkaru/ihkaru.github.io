# Phase 2: Curated Data Layer & System Architecture Models

> **Fokus**: Pemodelan tipe data TypeScript dan penyusunan dataset kurasi autentik 7 proyek utama (Aina, Cerdas, Lumis, Propylon, rIDM SSO, FlashLearn, Dokter-V) dengan metrik riil dan dukungan bilingual (EN/ID).

---

## 1. Tujuan & Deliverables
- Membuat skema data bertipe ketat (`src/types/portfolio.ts`) untuk memodelkan proyek, kategori, metrik arsitektur, dan tautan repositori.
- Menyusun data statis komprehensif (`src/data/projects.ts`):
  1. **Aina (あいな)** *(Paling Utama / Flagship)*
  2. **Cerdas**
  3. **Lumis**
  4. **Propylon Gateway**
  5. **SSO BPS Mempawah (rIDM)**
  6. **FlashLearn**
  7. **Dokter-V (Sikendis)**
- Menjamin setiap proyek memiliki:
  - Metrik teknis konkret yang diverifikasi dari repository riil (RAM, latency, test count, algorithm).
  - Tautan aktif ke repository GitHub (`ihkaru/*` dan `ipds6104/*`).
  - Representasi diagram arsitektur sistem (SVG/Mermaid data) yang dapat ditampilkan di modal detail.
  - Teks terjemahan bilingual (Indonesia & Inggris).
- Menerapkan aturan **Zero Fabrication**: Tidak ada data placeholder palsu (seperti "100k active users" jika tidak tercatat di repositori).

---

## 2. Struktur Schema Proyek
```typescript
export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'systems' | 'ai' | 'enterprise' | 'education';
  priority: number; // 1 = Aina, 2 = Cerdas, dst.
  featured: boolean;
  repoUrl: string;
  liveUrl?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  problemStatement: string;
  architectureSolution: string;
  architectureFlow: {
    steps: { step: string; detail: string }[];
  };
}
```

---

## 3. Kriteria Verifikasi
- [ ] Tipe data tervalidasi via TypeScript compiler (`tsc --noEmit` / `bun run check`).
- [ ] Ketujuh proyek terdefinisi lengkap dengan data yang konsisten antara file data dan dokumen riset.
- [ ] Tautan URL GitHub dan domain live terverifikasi valid.
