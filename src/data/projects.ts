import type { ProjectItem } from '../types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'aina',
    slug: 'aina',
    title: '🌸 Aina (あいな)',
    subtitle: {
      id: 'Asisten AI rekan kerja otonom di WhatsApp bertenaga Google Antigravity CLI dalam Pure Rust 2024.',
      en: 'Self-hosted agentic AI co-worker in WhatsApp powered by Google Antigravity CLI in Pure Rust 2024.'
    },
    category: 'ai',
    priority: 1,
    featured: true,
    repoUrl: 'https://github.com/ipds6104/aina',
    techStack: ['Rust 2024', 'Whatsmeow', 'Google AGY CLI', 'SQLite FTS5', 'Docker'],
    metrics: [
      { label: 'Latency', value: '<5ms', description: 'SQLite FTS5 BM25 Temporal Search' },
      { label: 'Pool Size', value: '5-11 Akun', description: 'Round-robin Google accounts with auto-failover' },
      { label: 'Architecture', value: 'Hexagonal', description: 'Clean ports and adapters in Rust' }
    ],
    highlights: {
      id: [
        'Multi-Account Quota Pool: rotasi akun Google otomatis round-robin & auto-failover saat kuota habis (zero 429 errors).',
        'File & Data Custodianship (DAC): dokumen kerja terkunci di bawah penitip, dilarang dibocorkan ke pengguna lain tanpa izin.',
        'Instant Temporal Search (<5ms): pencarian riwayat percakapan SQLite FTS5 BM25 untuk mencegah halusinasi waktu.',
        'Dual-WhatsApp Pipeline: mendukung nomor bot resmi sekaligus shadow sensor akun companion untuk memantau puluhan grup.'
      ],
      en: [
        'Multi-Account Quota Pool: automatic round-robin Google account rotation & auto-failover on quota exhaustion (zero 429s).',
        'File & Data Custodianship (DAC): confidential workplace files are strictly locked under the custodian with no cross-leakage.',
        'Instant Temporal Search (<5ms): SQLite FTS5 BM25 history search preventing temporal hallucinations.',
        'Dual-WhatsApp Pipeline: operates both official bot number and shadow companion sensor across dozens of workplace groups.'
      ]
    },
    problemStatement: {
      id: 'Bot percakapan WhatsApp umumnya adalah skrip kaku atau pembungkus API LLM sederhana yang boros token, mudah terkena limit kuota harian, rentan halusinasi waktu, dan tidak memiliki tata kelola privasi berkas antar-pegawai.',
      en: 'Standard WhatsApp chatbots are fragile wrappers around LLM APIs that easily exhaust daily token quotas, suffer from temporal hallucinations, and lack access control over workplace files.'
    },
    architectureSolution: {
      id: 'Aina dibangun di atas Pure Rust 2024 dengan arsitektur heksagonal, menghubungkan webhook Whatsmeow dengan mesin eksekusi kode Google Antigravity CLI, didukung pool kuota multi-akun dan memori FTS5 permanen.',
      en: 'Aina is built on Pure Rust 2024 with hexagonal architecture, connecting Whatsmeow webhooks to the Google Antigravity CLI agentic engine, backed by multi-account quota pooling and persistent FTS5 memory.'
    },
    architectureFlow: [
      { step: '01 Ingress', title: 'Webhook WhatsApp', detail: 'Pesan grup/pribadi diterima dari Whatsmeow daemon ke endpoint Aina.' },
      { step: '02 Memory', title: 'FTS5 Temporal Retrieval', detail: 'Pencarian konteks percakapan relevan dan validasi hak akses staf.' },
      { step: '03 Routing', title: 'Multi-Account Quota Pool', detail: 'Memilih akun Google aktif dengan sisa kuota terbaik secara round-robin.' },
      { step: '04 Engine', title: 'Google Antigravity Exec', detail: 'Penalaran agentik, eksekusi kode terminal, dan pembuktian fakta.' },
      { step: '05 Egress', title: 'Solutif & Low-Noise Reply', detail: 'Mengirimkan respons santun, teruji, dan tanpa basa-basi ke WhatsApp.' }
    ]
  },
  {
    id: 'cerdas',
    slug: 'cerdas',
    title: '🧠 Cerdas',
    subtitle: {
      id: 'Alternatif open-source mandiri AppSheet untuk pendataan survei mobile offline-first tanpa batasan pengguna.',
      en: 'Open-source self-hosted AppSheet alternative for offline-first mobile data collection with zero user limits.'
    },
    category: 'enterprise',
    priority: 2,
    featured: false,
    repoUrl: 'https://github.com/ihkaru/cerdas',
    techStack: ['Laravel 12 Octane', 'FrankenPHP', 'Vue 3', 'Framework7', 'Capacitor', 'SQLite'],
    metrics: [
      { label: 'User Limit', value: 'Unlimited', description: 'Zero per-seat licensing fees' },
      { label: 'Sync Mode', value: 'Offline-First', description: 'Bidirectional sync with SQLite PWA' },
      { label: 'Engine', value: 'Octane + FrankenPHP', description: 'High-concurrency worker mode' }
    ],
    highlights: {
      id: [
        'Visual Form Editor: perancang kuesioner kompleks dengan dukungan form bersarang dan opsi dinamis.',
        'JS Expression Engine: penulisan closure JavaScript langsung di browser untuk Show If, Editable If, Formula, dan Warning.',
        'Bidirectional Sync: sinkronisasi latar belakang dengan resolusi konflik untuk ribuan enumerator lapangan.',
        'Peta Spasial Offline: pengambilan koordinat GPS dan pratinjau poligon via MapLibre GL tanpa koneksi internet.'
      ],
      en: [
        'Visual Form Editor: designer for complex nested questionnaire schemas and dynamic option trees.',
        'JS Expression Engine: in-browser JavaScript closures for Show If, Editable If, Formula, and Warning logic.',
        'Bidirectional Sync: background sync engine with conflict resolution for thousands of field enumerators.',
        'Offline Spatial Preview: native GPS capture and polygon preview via MapLibre GL without active connectivity.'
      ]
    },
    problemStatement: {
      id: 'AppSheet membatasi akun gratis hanya untuk 10 pengguna dan membebankan biaya $10/user/bulan yang sangat memberatkan kegiatan survei sensus instansi dengan ratusan petugas lapangan.',
      en: 'AppSheet restricts free tiers to 10 users and charges $10/user/month, becoming prohibitively expensive for statistical census and survey operations requiring hundreds of field enumerators.'
    },
    architectureSolution: {
      id: 'Monorepo terpadu yang memadukan backend Laravel 12 Octane worker mode berkinerja tinggi, visual form editor Vue 3, dan aplikasi Android/PWA berbasis Framework7 + SQLite.',
      en: 'Unified monorepo combining a high-throughput Laravel 12 Octane FrankenPHP backend, Vue 3 visual schema editor, and Framework7 + SQLite mobile client.'
    },
    architectureFlow: [
      { step: '01 Schema', title: 'Visual Form Editor', detail: 'Perancang kuesioner menyusun struktur pertanyaan dan aturan JS Expression.' },
      { step: '02 Storage', title: 'Local SQLite Device', detail: 'Enumerator mengisi data di lapangan secara instan tanpa perlu koneksi internet.' },
      { step: '03 Geo', title: 'MapLibre Coordinate', detail: 'Perekaman titik koordinat dan akurasi GPS secara offline.' },
      { step: '04 Sync', title: 'Bidirectional Octane Sync', detail: 'Data diunggah ke server Laravel Octane dengan resolusi konflik teruji.' }
    ]
  },
  {
    id: 'lumis',
    slug: 'lumis',
    title: '⚡ Lumis',
    subtitle: {
      id: 'Platform percakapan & orkestrasi AI enterprise berkinerja tinggi dalam Pure Rust & Svelte 5 dengan footprint <25MB RAM.',
      en: 'High-performance enterprise AI chat & orchestration platform in Pure Rust & Svelte 5 (<25MB RAM footprint).'
    },
    category: 'systems',
    priority: 3,
    featured: false,
    repoUrl: 'https://github.com/ihkaru/lumis',
    liveUrl: 'https://chat.dvlpid.my.id',
    techStack: ['Rust 1.93', 'Axum 0.8', 'Svelte 5 Runes', 'Bun 1.4', 'SQLite WAL', 'PostgreSQL'],
    metrics: [
      { label: 'Idle RAM', value: '<25 MB', description: '10x more efficient than Node.js/Python' },
      { label: 'Guardrail', value: 'SIMD O(N+Z)', description: 'Aho-Corasick data loss prevention' },
      { label: 'License', value: 'MIT Permissive', description: 'Zero vendor lock-in enterprise clean-room' }
    ],
    highlights: {
      id: [
        'Konsumsi RAM Super Ringan: <25 MB RAM idle berkat runtime Rust murni dan Svelte 5 tanpa Virtual DOM.',
        'SIMD Guardrails & DLP: pemindaian teks berkecepatan tinggi O(N+Z) untuk mencegah kebocoran secret atau PII.',
        'Pluggable Database Architecture: transisi mulus antara file SQLite WAL lokal hingga kluster PostgreSQL pool.',
        'Generative UI (OpenUI Reactive): parser streaming CommonMark yang merender widget interaktif (slider, kalkulator) di canvas 120Hz GPU.'
      ],
      en: [
        'Ultra-Lightweight RAM: <25 MB idle RAM powered by Pure Rust async runtime and Svelte 5 without Virtual DOM.',
        'SIMD Guardrails & DLP: high-speed O(N+Z) text scanning preventing secret and PII exfiltration.',
        'Pluggable Relational Architecture: seamless driver switching between local SQLite WAL and PostgreSQL pools.',
        'Generative UI (OpenUI Reactive): streaming CommonMark parser rendering dynamic widgets on a 120Hz GPU canvas.'
      ]
    },
    problemStatement: {
      id: 'Platform web UI LLM populer seperti LibreChat dan Open WebUI memakan memori server sangat besar (300MB – 1.5GB RAM per instance) dan sulit diintegrasikan ke arsitektur enterprise.',
      en: 'Mainstream LLM chat platforms (LibreChat, Open WebUI) consume massive server memory (300MB – 1.5GB RAM per instance) and are difficult to embed safely into enterprise architectures.'
    },
    architectureSolution: {
      id: 'Implementasi clean-room dalam Pure Rust (Axum 0.8) dipadukan dengan Svelte 5 Runes, proteksi SIMD DLP, audit SIEM RFC 5424, dan dukungan Generative UI OpenUI.',
      en: 'Clean-room implementation in Pure Rust (Axum 0.8) paired with Svelte 5 Runes, SIMD DLP inspection, RFC 5424 SIEM audit, and OpenUI Generative Canvas.'
    },
    architectureFlow: [
      { step: '01 Auth', title: 'rIDM SAML/OIDC SSO', detail: 'Verifikasi identitas dan role pengguna via header terautentikasi.' },
      { step: '02 Ingress', title: 'SIMD Aho-Corasick DLP', detail: 'Pemeriksaan payload pencegahan kebocoran secret dalam waktu O(N+Z).' },
      { step: '03 Gateway', title: 'Universal AI Gateway', detail: 'Routing permintaan ke model Claude, Gemini, atau OpenAI secara transparan.' },
      { step: '04 Canvas', title: 'Svelte 5 OpenUI Stream', detail: 'Streaming respons dan perenderan artefak interaktif di canvas terisolasi.' }
    ]
  },
  {
    id: 'propylon',
    slug: 'propylon',
    title: '🛡️ Propylon Gateway',
    subtitle: {
      id: 'Reverse proxy, kontrol firewall, dan gateway data Zero-Trust untuk Model Context Protocol (MCP) dalam Pure Rust.',
      en: 'Enterprise-grade zero-trust reverse proxy, firewall, and data gateway for Model Context Protocol (MCP) in Pure Rust.'
    },
    category: 'systems',
    priority: 4,
    featured: false,
    repoUrl: 'https://github.com/ihkaru/propylon-gateway',
    techStack: ['Rust 2024', 'Zero-Unsafe', 'MCP Spec', 'DuckDB', 'Polars', 'NATS/Redis'],
    metrics: [
      { label: 'Safety', value: 'Zero Unsafe', description: '#![deny(unsafe_code)] enforced' },
      { label: 'Tests', value: '189 Passed', description: '100% test suite passing' },
      { label: 'Egress Cut', value: '>99.9%', description: 'DuckDB/Polars in-situ enclave reduction' }
    ],
    highlights: {
      id: [
        'Dual-Stack Adaptive MCP: mendukung penuh spesifikasi modern MCP 2026-07-28 dan backward-compatible ke 2024-11-05.',
        'Zero-Knowledge Credential Broker: LLM berinteraksi dengan API eksternal tanpa pernah melihat atau menyimpan API key mentah.',
        'In-Situ Analytical Enclave: menjalankan query DuckDB/Polars pada dataset 100MB+ di memori gateway, hanya mengembalikan ringkasan <1KB ke LLM.',
        'Zero-Downtime Hot-Reload: penambahan tool dan update policy tier (dev/hybrid/strict) secara atomik tanpa memutus stream aktif.'
      ],
      en: [
        'Dual-Stack Adaptive MCP: native support for modern MCP 2026-07-28 and legacy 2024-11-05 clients.',
        'Zero-Knowledge Credential Broker: AI models execute external tools without ever touching or storing raw API keys.',
        'In-Situ Analytical Enclave: executes DuckDB/Polars queries on 100MB+ datasets in gateway memory, returning <1KB summaries to LLMs.',
        'Zero-Downtime Hot-Reload: runtime policy and tool swap via atomic RCU-style state management without dropping streaming connections.'
      ]
    },
    problemStatement: {
      id: 'Gateway MCP generasi pertama beroperasi sebagai wrapper proses tunggal yang rapuh: state terkunci di memori, rawan crash saat konfigurasi diubah, dan mengekspos kredensial mentah ke model LLM.',
      en: 'First-generation MCP gateways operate as fragile single-process wrappers with memory lock-in, service-crashing reloads, and dangerous raw credential exposure to LLMs.'
    },
    architectureSolution: {
      id: 'Control plane reverse proxy dalam Pure Rust 2024 dengan isolasi zero-unsafe, enklaf analitik in-situ, audit trail SHA-256 tamper-evident, dan FinOps budget freezes.',
      en: 'Control plane reverse proxy in Pure Rust 2024 with zero-unsafe invariants, in-situ analytics enclaves, tamper-evident SHA-256 audit trails, and FinOps budget freezes.'
    },
    architectureFlow: [
      { step: '01 Wire', title: 'Stateless Request Ingress', detail: 'Evaluasi header Mcp-Method/Mcp-Name dan dynamic payload ABAC.' },
      { step: '02 Broker', title: 'Zero-Knowledge Credential', detail: 'Penyuntikan token rahasia secara in-memory sebelum dispatch ke upstream tool.' },
      { step: '03 Enclave', title: 'In-Situ DuckDB Enclave', detail: 'Agregasi dataset besar di memori lokal, mereduksi data egress >99.9%.' },
      { step: '04 Audit', title: 'SHA-256 Hash Chain', detail: 'Pencatatan jejak audit anti-tamper untuk kepatuhan SOC 2 Type II.' }
    ]
  },
  {
    id: 'ridm',
    slug: 'ridm-sso',
    title: '🦀 SSO BPS Mempawah (rIDM)',
    subtitle: {
      id: 'Central Identity Provider (IdP) terpadu berbasis Rust dengan native SAML 2.0 dan OpenID Connect (40-60MB RAM).',
      en: 'Ultra-fast Central Identity Provider in Rust supporting native SAML 2.0 and OpenID Connect (40-60MB RAM).'
    },
    category: 'enterprise',
    priority: 5,
    featured: false,
    repoUrl: 'https://github.com/ipds6104/auth',
    liveUrl: 'https://auth.dvlpid.my.id',
    techStack: ['Rust', 'SAML 2.0', 'OIDC', 'Argon2id', 'Bcrypt Migration', 'SQLite'],
    metrics: [
      { label: 'Idle RAM', value: '40-60 MB', description: 'Replaces 1.5GB JVM Keycloak instance' },
      { label: 'Hashing', value: 'Argon2id', description: 'Auto-rehash from legacy bcrypt' },
      { label: 'Protocols', value: 'SAML + OIDC', description: 'Universal enterprise compatibility' }
    ],
    highlights: {
      id: [
        'Footprint Memori Minimal: konsumsi RAM hanya 40–60 MB, menggantikan Keycloak berbasis JVM yang memakan 1.5GB RAM.',
        'Dukungan Protokol Ganda: SAML 2.0 untuk aplikasi instansi kementerian, dan OIDC untuk aplikasi modern Svelte, Vue, Laravel, Go, dan Rust.',
        'Migrasi Password Tanpa Reset: mengimpor 37 akun pengguna dengan hash bcrypt asli, otomatis ditingkatkan ke Argon2id saat login pertama.',
        'Atribut Pegawai BPS: injeksi NIP 18 digit dan NIP 9 digit langsung ke klaim ID Token & UserInfo.'
      ],
      en: [
        'Minimal Footprint: operates at only 40–60 MB RAM, replacing bloated 1.5GB JVM Keycloak instances.',
        'Dual-Protocol Support: SAML 2.0 for ministerial enterprise systems and OIDC for modern Svelte, Vue, Laravel, Go, and Rust apps.',
        'Seamless Password Migration: preserved legacy bcrypt hashes during bulk import, automatically upgraded to Argon2id upon first login.',
        'BPS Employee Attributes: custom NIP 18-digit and 9-digit attributes injected directly into ID Tokens and UserInfo claims.'
      ]
    },
    problemStatement: {
      id: 'Server SSO enterprise konvensional (Keycloak) membutuhkan spesifikasi server yang sangat tinggi (1GB - 2GB RAM) dan startup lambat, tidak efisien untuk infrastruktur kantor satker daerah.',
      en: 'Conventional enterprise SSO servers (Keycloak) demand high compute specs (1GB - 2GB RAM) with slow startup, making them inefficient for regional branch server infrastructures.'
    },
    architectureSolution: {
      id: 'Deploy Central IdP berbasis Rust (rIDM) di auth.dvlpid.my.id dengan multi-tenant isolation (tenant bps), auto-rehash password ke Argon2id, dan endpoint SAML/OIDC standar.',
      en: 'Deploying a Rust-based Central IdP (rIDM) at auth.dvlpid.my.id featuring multi-tenant isolation, automated Argon2id re-hashing, and compliant SAML/OIDC endpoints.'
    },
    architectureFlow: [
      { step: '01 Login', title: 'Centralized Login Portal', detail: 'Pengguna mengakses https://auth.dvlpid.my.id/login/ dengan akun pegawai BPS.' },
      { step: '02 Rehash', title: 'Argon2id Auto-Upgrade', detail: 'Verifikasi hash bcrypt lama dan otomatis meng-upgrade hash password ke Argon2id.' },
      { step: '03 Token', title: 'SAML/OIDC Token Signing', detail: 'Penerbitan assertion XML SAML 2.0 atau JWT OIDC dengan klaim NIP pegawai.' },
      { step: '04 Handshake', title: 'Seamless App Ingress', detail: 'Aplikasi klien (Lumis, Dokter-V, Sikendis) menerima identitas user terverifikasi.' }
    ]
  },
  {
    id: 'flashlearn',
    slug: 'flashlearn',
    title: '⚡ FlashLearn',
    subtitle: {
      id: 'Platform active-recall berbasis arsitektur heksagonal memadukan bacaan teori, kuis interaktif, dan 3D flashcards instan.',
      en: 'Hexagonal active-recall educational platform combining theoretical readings, quizzes, and instant 3D tactile flashcards.'
    },
    category: 'education',
    priority: 6,
    featured: false,
    repoUrl: 'https://github.com/ihkaru/flashlearn',
    techStack: ['Bun', 'Elysia.js', 'PostgreSQL (Drizzle)', 'Svelte 5', 'Framework7 v9', 'OpenAPI 3.1'],
    metrics: [
      { label: 'Architecture', value: 'Hexagonal', description: 'Strict Ports & Adapters separation' },
      { label: 'Recall Mode', value: '3D Cards', description: 'Instant conversion of quiz into flip cards' },
      { label: 'API Security', value: 'Scoped Keys', description: 'Granular fl_live_... developer tokens' }
    ],
    highlights: {
      id: [
        'Triple Content Modes: mendukung unit bacaan teori, kuis evaluasi, atau perpaduan materi & kuis bertahap.',
        'Instant 3D Flip Flashcards: begitu kuis selesai, satu ketukan langsung mengonversi butir soal menjadi tumpukan kartu fisik 3D untuk active-recall.',
        'Arsitektur Heksagonal Murni: domain model terisolasi dari database Drizzle dan web framework Elysia.js.',
        'Developer Scoped API Keys: generator token API fl_live_... dengan dokumentasi interaktif Scalar OpenAPI 3.1.'
      ],
      en: [
        'Triple Content Modes: supports standalone reading modules, evaluation quizzes, or seamlessly sequenced theory-quiz units.',
        'Instant 3D Flip Flashcards: one-tap conversion of completed quiz questions into a tactile 3D card deck for active recall.',
        'Hexagonal Architecture: pure domain logic decoupled from Drizzle PostgreSQL and Elysia.js HTTP layers.',
        'Developer Scoped API Keys: granular developer token engine backed by interactive Scalar OpenAPI 3.1 documentation.'
      ]
    },
    problemStatement: {
      id: 'Aplikasi edukasi modern kerap memisahkan bahan ajar teori dari kuis evaluasi, atau menyajikan kartu flashcard hafalan statis tanpa alur review miskonsepsi yang terintegrasi.',
      en: 'Educational platforms frequently fragment theoretical materials from active assessment, lacking an integrated cognitive workflow to review misconceptions immediately.'
    },
    architectureSolution: {
      id: 'Monorepo modern berkecepatan tinggi dengan Bun + Elysia.js di backend heksagonal, dipadukan dengan Svelte 5 Runes dan Framework7 untuk transisi 3D tactile flashcard.',
      en: 'High-speed monorepo combining Bun + Elysia.js on a hexagonal backend with Svelte 5 Runes and Framework7 for tactile 3D card interactions.'
    },
    architectureFlow: [
      { step: '01 Theory', title: 'Structured Material Reading', detail: 'Pengguna membaca unit materi dengan code highlights dan key takeaways.' },
      { step: '02 Quiz', title: 'Interactive Knowledge Check', detail: 'Pengujian pemahaman dengan scoring instan dan deteksi miskonsepsi.' },
      { step: '03 Flip', title: 'Instant 3D Deck Conversion', detail: 'Konversi instan seluruh soal kuis menjadi tumpukan kartu 3D berkedalaman fisik.' },
      { step: '04 Grade', title: 'Active Recall Scoring', detail: 'Pengguna menilai daya ingat kartu (Again, Hard, Good, Easy) secara mandiri.' }
    ]
  },
  {
    id: 'dokterv',
    slug: 'dokter-v',
    title: '📋 Dokter-V (Sikendis)',
    subtitle: {
      id: 'Platform tata kelola penugasan, perjalanan dinas, kepatuhan batas honor SBM 2026, dan Laporan Perjalanan Dinas AI.',
      en: 'Financial and field assignment governance framework with SBM 2026 honor limits validation and AI report generator.'
    },
    category: 'enterprise',
    priority: 7,
    featured: false,
    repoUrl: 'https://github.com/ihkaru/sipedas',
    liveUrl: 'https://admin.dvlpid.my.id',
    techStack: ['PHP 8.4', 'FrankenPHP Octane', 'MySQL', 'Redis', 'Whatsmeow / Aina', 'arc42'],
    metrics: [
      { label: 'SLA Deploy', value: '<10 Menit', description: 'Automated CI/CD zero-downtime deployment' },
      { label: 'Compliance', value: 'SBM 2026', description: 'Automated PMK honor ceiling enforcement' },
      { label: 'Documentation', value: 'arc42', description: 'Enterprise architecture in 12 modular sections' }
    ],
    highlights: {
      id: [
        'Anti-Schedule Collision: otomatis mendeteksi dan mencegah penugasan ganda pegawai di tanggal pelaksanaan yang sama.',
        'Kepatuhan Batas Honor SBM 2026: validasi kumulatif batas honor bulanan mitra survei sesuai regulasi PMK Kemenkeu.',
        'Konsolidasi Kontrak Bulanan: penggabungan otomatis beberapa penugasan survei dalam 1 bulan ke dalam 1 kontrak SPK & BAST terpadu.',
        'LPD AI (Laporan Perjalanan Dinas AI): mentransformasikan catatan lapangan dan foto dokumentasi menjadi draf laporan dinas formal baku (PUEBI).'
      ],
      en: [
        'Anti-Schedule Collision: automatically prevents overlapping field assignments for employees on identical dates.',
        'SBM 2026 Honor Ceilings: enforces cumulative monthly remuneration caps for external enumerators according to PMK regulations.',
        'Monthly Contract Consolidation: combines multiple survey assignments within a single month into unified SPK & BAST documents.',
        'LPD AI Report Generator: transforms raw field notes and photographic evidence into formal governmental trip reports (PUEBI).'
      ]
    },
    problemStatement: {
      id: 'Pengelolaan administrasi penugasan perjalanan dinas dan pembayaran honor mitra di satker daerah rawan bentrok jadwal, risiko pelanggaran pagu SBM Kemenkeu, dan proses verifikasi berkas berulang yang lambat.',
      en: 'Managing field assignments and enumerator remuneration in regional offices suffers from schedule collisions, compliance violations against ministerial ceilings, and cumbersome paper verifications.'
    },
    architectureSolution: {
      id: 'Sistem tata kelola keuangan berkinerja tinggi berbasis PHP 8.4 FrankenPHP Octane, Redis queue, database MySQL sikendis, terdokumentasi lengkap dalam arsitektur enterprise arc42, dan terintegrasi notifikasi WhatsApp pimpinan via Aina.',
      en: 'High-performance governance engine built on PHP 8.4 FrankenPHP Octane, Redis queues, MySQL database, enterprise arc42 documentation, and mobile WhatsApp approvals via Aina.'
    },
    architectureFlow: [
      { step: '01 Penugasan', title: 'Surat Tugas & Collision Check', detail: 'Penerbitan surat tugas resmi dengan validasi bentrok tanggal otomatis.' },
      { step: '02 Validasi', title: 'SBM 2026 Honor Ceiling', detail: 'Pengecekan kumulatif batas honor bulanan mitra sebelum SPK diterbitkan.' },
      { step: '03 LPD AI', title: 'Automated Trip Report', detail: 'AI mengolah foto & ringkasan lapangan menjadi laporan dinas formal PUEBI.' },
      { step: '04 Approval', title: 'WhatsApp Mobile Approval', detail: 'Pimpinan menerima notifikasi ringkas dan menyetujui berkas langsung dari WhatsApp.' }
    ]
  }
];
