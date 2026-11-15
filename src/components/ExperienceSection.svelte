<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { 
    Briefcase, GraduationCap, MapPin, Calendar, 
    ExternalLink, Mail, Linkedin, MessageSquare, Github,
    CheckCircle2, Code2, Database, Network
  } from 'lucide-svelte';

  interface Props {
    locale: Locale;
  }

  let { locale }: Props = $props();

  const experiences = [
    {
      role: {
        id: 'Information System Technician',
        en: 'Information System Technician'
      },
      company: 'Badan Pusat Statistik (BPS Mempawah)',
      period: 'Feb 2023 — Sekarang (3 thn 10 bln)',
      location: 'Mempawah, Kalimantan Barat, Indonesia',
      description: {
        id: 'Merencanakan, mengimplementasikan, memelihara, dan melaporkan sistem informasi untuk mendukung Badan Pusat Statistik dalam kerangka Generic Statistical Business Process Model (GSBPM). Membangun infrastruktur Aina, Cerdas, rIDM SSO, Lumis Gateway, dan Dokter-V.',
        en: 'Planning, implementing, maintaining, and reporting of information systems to support Badan Pusat Statistik (National Statistical Office of Indonesia) in its implementation of Generic Statistical Business Process Model (GSBPM).'
      },
      highlights: [
        'GSBPM Statistical Architecture',
        'Pure Rust AI Agent Pipelines',
        'Zero-Trust Enterprise IAM'
      ]
    },
    {
      role: {
        id: 'Administrative Assistant',
        en: 'Administrative Assistant'
      },
      company: 'Badan Pusat Statistik (BPS Kubu Raya)',
      period: 'Okt 2022 — Feb 2023 (5 bln)',
      location: 'Kubu Raya, Kalimantan Barat, Indonesia',
      description: {
        id: 'Mendukung operasional tata kelola administrasi, validasi data, dan koordinasi teknis pengumpulan data statistik tingkat kabupaten.',
        en: 'Supported administrative operations, data validation, and technical coordination for district-level statistical operations.'
      },
      highlights: [
        'Data Governance',
        'Field Operation Coordination'
      ]
    },
    {
      role: {
        id: 'Back End Developer',
        en: 'Back End Developer'
      },
      company: 'Arksana Studio',
      period: 'Apr 2022 — Agu 2022 (5 bln)',
      location: 'Pontianak, Kalimantan Barat, Indonesia',
      description: {
        id: 'Membangun REST API berkecepatan tinggi dan manajemen basis data relasional untuk aplikasi klien Android.',
        en: 'Engineered high-performance REST APIs and relational database layers for Android mobile applications.'
      },
      highlights: [
        'RESTful API Design',
        'Database Optimization'
      ]
    }
  ];

  const education = [
    {
      degree: {
        id: 'Sarjana Terapan Statistika Komputasi (D-IV)',
        en: 'Bachelor of Applied Science in Computational Statistics'
      },
      institution: 'Politeknik Statistika STIS (Sekolah Tinggi Ilmu Statistik BPS)',
      period: '2018 — 2022',
      location: 'Jakarta Timur, Indonesia',
      description: {
        id: 'Kurikulum mendalam dalam algoritma pemrosesan data statistik, machine learning, Sistem Informasi Geografis (GIS/Leaflet), sistem basis data, dan rekayasa perangkat lunak statistik resmi.',
        en: 'Comprehensive curriculum in statistical data algorithms, machine learning, Geographic Information Systems (GIS/Leaflet), database engines, and official statistics software engineering.'
      }
    }
  ];

  const skills = [
    'Computational Statistics',
    'Rust (Axum / Tokio)',
    'Svelte 5 (Runes)',
    'TypeScript / Bun',
    'SQLite FTS5 / DuckDB',
    'Geographic Information Systems (GIS)',
    'Leaflet.js / QGIS',
    'R Programming',
    'Laravel Octane / FrankenPHP',
    'Model Context Protocol (MCP)',
    'SAML 2.0 / OIDC (rIDM)',
    'Docker / PRoot Linux'
  ];
</script>

<section class="py-14 sm:py-20 border-b border-neutral-900 bg-neutral-950/40">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
    
    <!-- Section Header -->
    <div class="space-y-2">
      <div class="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-400">
        <Briefcase class="h-3.5 w-3.5 text-emerald-400" />
        <span>Curriculum Vitae &amp; Background</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {locale === 'id' ? 'Pengalaman Profesional & Pendidikan' : 'Professional Experience & Education'}
      </h2>
      <p class="text-sm text-neutral-400 font-reading">
        {locale === 'id'
          ? 'Rekam jejak rekayasa sistem informasi statistik, riset komputasi, dan arsitektur enterprise.'
          : 'Track record in statistical information systems, computational statistics research, and enterprise architecture.'}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Experience Column (8 cols) -->
      <div class="lg:col-span-7 space-y-6">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
          <Briefcase class="h-4 w-4 text-emerald-400" />
          <span>{locale === 'id' ? 'Pengalaman Kerja' : 'Career Experience'}</span>
        </h3>

        <div class="space-y-4">
          {#each experiences as exp}
            <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-3 transition-colors hover:border-neutral-700">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 class="text-base font-bold text-white flex items-center gap-2">
                  <span>{exp.role[locale]}</span>
                </h4>
                <span class="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                  {exp.period}
                </span>
              </div>

              <div class="space-y-1">
                <div class="text-xs font-semibold text-neutral-300 font-sans">
                  {exp.company}
                </div>
                <div class="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                  <MapPin class="h-3 w-3" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-neutral-300 font-reading leading-relaxed">
                {exp.description[locale]}
              </p>

              <div class="flex flex-wrap gap-1.5 pt-1">
                {#each exp.highlights as h}
                  <span class="rounded bg-neutral-950 px-2 py-0.5 font-mono text-[10px] text-neutral-400 border border-neutral-800/80">
                    {h}
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Education & Skills Column (5 cols) -->
      <div class="lg:col-span-5 space-y-6">
        
        <!-- Education Card -->
        <div class="space-y-3">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <GraduationCap class="h-4 w-4 text-teal-400" />
            <span>{locale === 'id' ? 'Pendidikan Formal' : 'Formal Education'}</span>
          </h3>

          {#each education as edu}
            <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs text-teal-400 bg-teal-950/40 border border-teal-800/40 px-2 py-0.5 rounded">
                  {edu.period}
                </span>
                <span class="text-xs text-neutral-500 font-mono">{edu.location}</span>
              </div>
              <h4 class="text-sm sm:text-base font-bold text-white leading-snug">
                {edu.degree[locale]}
              </h4>
              <div class="text-xs font-semibold text-neutral-300">
                {edu.institution}
              </div>
              <p class="text-xs text-neutral-400 font-reading leading-relaxed">
                {edu.description[locale]}
              </p>
            </div>
          {/each}
        </div>

        <!-- Technical Skills Badges -->
        <div class="space-y-3">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
            <Code2 class="h-4 w-4 text-cyan-400" />
            <span>{locale === 'id' ? 'Keahlian Teknis & Domain' : 'Technical & Domain Stack'}</span>
          </h3>

          <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <div class="flex flex-wrap gap-1.5">
              {#each skills as s}
                <span class="rounded bg-neutral-950 px-2.5 py-1 font-mono text-xs text-neutral-300 border border-neutral-800/80">
                  {s}
                </span>
              {/each}
            </div>
          </div>
        </div>

        <!-- Quick Connect Box -->
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 space-y-3">
          <div class="flex items-center justify-between text-xs font-mono font-semibold text-emerald-400">
            <span>{locale === 'id' ? 'Saluran Komunikasi Langsung' : 'Direct Channels'}</span>
            <span class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <div class="space-y-2 text-xs font-mono">
            <a
              href="https://wa.me/6289625345646"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors min-h-[44px]"
            >
              <span class="flex items-center gap-2">
                <MessageSquare class="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </span>
              <span class="text-neutral-400">089625345646</span>
            </a>

            <a
              href="mailto:ihza2karunia@gmail.com"
              class="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors min-h-[44px]"
            >
              <span class="flex items-center gap-2">
                <Mail class="h-4 w-4 text-neutral-400" />
                <span>Email</span>
              </span>
              <span class="text-neutral-400">ihza2karunia@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ihza-fikri-zaki-karunia-89463519b"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-blue-400 hover:border-blue-500/40 transition-colors min-h-[44px]"
            >
              <span class="flex items-center gap-2">
                <Linkedin class="h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
              </span>
              <span class="text-neutral-400">ihza-fikri-zaki-karunia</span>
            </a>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
