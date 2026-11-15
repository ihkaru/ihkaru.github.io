<script lang="ts">
  import type { ProjectItem, Locale } from '../types/portfolio';
  import { 
    Terminal, Shield, Cpu, ExternalLink, CheckCircle2, RotateCw, 
    Sparkles, Database, FileText, Check, Lock, Sliders, Smartphone,
    Laptop, Globe, ArrowRight, Bot, CheckCheck
  } from 'lucide-svelte';

  interface Props {
    project: ProjectItem;
    locale: Locale;
    isModal?: boolean;
  }

  let { project, locale, isModal = false }: Props = $props();

  // State for interactive FlashLearn 3D card
  let flashcardFlipped = $state(false);

  // State for Lumis interactive slider
  let lumisSliderVal = $state(65);
</script>

<div class="w-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-inner text-neutral-300">
  
  <!-- Browser Frame Window Topbar -->
  <div class="flex items-center justify-between border-b border-neutral-850 bg-neutral-900/90 px-3.5 py-2 text-xs font-mono">
    <!-- Traffic lights dots -->
    <div class="flex items-center gap-1.5">
      <span class="h-2.5 w-2.5 rounded-full bg-neutral-700/80"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-neutral-700/80"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-neutral-700/80"></span>
      <span class="ml-2 text-[11px] text-neutral-400 font-sans hidden sm:inline">
        {project.title}
      </span>
    </div>

    <!-- Domain Pill -->
    <div class="flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-0.5 text-[11px] text-neutral-400">
      <Globe class="h-3 w-3 text-emerald-400" />
      <span>{project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.slug}.dvlpid.my.id`}</span>
    </div>

    <!-- Right badge -->
    <span class="font-mono text-[10px] text-emerald-400/90 font-semibold uppercase">
      {project.category}
    </span>
  </div>

  <!-- Content Window: Dynamic Living UI Previews -->
  <div class="p-4 sm:p-5 {isModal ? 'min-h-[220px]' : 'min-h-[180px]'} flex flex-col justify-center">

    <!-- 1. AINA (WhatsApp Mobile Session Mockup) -->
    {#if project.id === 'aina'}
      <div class="max-w-md mx-auto w-full space-y-2.5 font-sans">
        <div class="flex items-center justify-between text-xs pb-1 border-b border-neutral-850">
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <Bot class="h-3.5 w-3.5" />
            </div>
            <div>
              <div class="font-semibold text-white text-xs">Aina (BPS Mempawah)</div>
              <div class="text-[10px] text-emerald-400">online • agy agent active</div>
            </div>
          </div>
          <span class="text-[10px] text-neutral-400 font-mono">WhatsApp Bridge</span>
        </div>

        <div class="space-y-2 text-xs">
          <!-- Inbound -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 max-w-[88%] space-y-0.5">
            <div class="text-[10px] text-neutral-400 font-mono">Staff (IPDS) • 09:42</div>
            <p class="text-neutral-200">
              {locale === 'id' 
                ? 'Tolong ringkas dokumen survei padi dan periksa anomali harga gabah.' 
                : 'Please summarize paddy survey docs and audit grain price anomalies.'}
            </p>
          </div>

          <!-- Outbound -->
          <div class="rounded-lg bg-emerald-950/40 border border-emerald-800/40 p-2.5 max-w-[88%] ml-auto space-y-1">
            <div class="flex items-center justify-between text-[10px] text-emerald-400 font-mono">
              <span class="flex items-center gap-1">
                <Bot class="h-3 w-3" />
                <span>Aina</span>
              </span>
              <span class="flex items-center gap-1">
                <span>09:42</span>
                <CheckCheck class="h-3 w-3 text-emerald-400" />
              </span>
            </div>
            <p class="text-neutral-100">
              {locale === 'id'
                ? 'Dokumen diverifikasi (DAC OK). 2 anomali ditemukan di Mempawah Hilir. Skrip agregasi Parquet siap dijalankan.'
                : 'Verified (DAC OK). 2 anomalies detected in Mempawah Hilir. Parquet aggregation script ready to execute.'}
            </p>
          </div>
        </div>

        <!-- Telemetry Pill -->
        <div class="pt-1 flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-neutral-850">
          <span>Latency: &lt;5ms (FTS5 BM25)</span>
          <span class="text-emerald-400">Quota: Google Pool #4</span>
        </div>
      </div>

    <!-- 2. CERDAS (Visual Form Builder & Offline Sync) -->
    {:else if project.id === 'cerdas'}
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1.5 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <Smartphone class="h-3.5 w-3.5 text-blue-400" />
            <span>Survey Schema Engine (Offline PWA)</span>
          </span>
          <span class="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">SQLite Sync: OK</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <!-- Schema Nodes -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 space-y-1.5">
            <div class="text-neutral-400 text-[10px]">Kuesioner Struktur:</div>
            <div class="flex items-center gap-1 text-white font-semibold">
              <span class="text-emerald-400">&gt;</span> R101: Nama Kepala Rumah Tangga
            </div>
            <div class="text-[10px] text-cyan-300 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
              Show If: status_kunjungan == '1'
            </div>
            <div class="text-[10px] text-yellow-300 bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/40">
              Warning: luas_panen &gt; 50
            </div>
          </div>

          <!-- GPS MapLibre Box -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 space-y-1.5 flex flex-col justify-between">
            <div>
              <div class="text-neutral-400 text-[10px]">Offline GPS Spatial Capture:</div>
              <div class="text-neutral-200 mt-1 font-mono text-[10px]">
                Lat: -0.0682 • Long: 109.1834<br/>
                Accuracy: 3.2m (High Precision)
              </div>
            </div>
            <div class="text-[10px] text-emerald-400 flex items-center gap-1">
              <Check class="h-3 w-3" /> MapLibre Vector Cache Ready
            </div>
          </div>
        </div>
      </div>

    <!-- 3. LUMIS (Split-Pane AI Chat + Reactive OpenUI Canvas) -->
    {:else if project.id === 'lumis'}
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1.5 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <Sliders class="h-3.5 w-3.5 text-orange-400" />
            <span>OpenUI Split-Pane Canvas (&lt;25MB RAM)</span>
          </span>
          <span class="text-neutral-400 text-[10px]">Axum 0.8 • Svelte 5</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <!-- Left: Chat Stream -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 space-y-1">
            <div class="text-[10px] text-neutral-400">Streamed Response:</div>
            <p class="text-neutral-200 font-sans text-xs">
              "Berikut simulasi perhitungan alokasi komputasi kustom:"
            </p>
            <div class="text-[10px] text-orange-400 font-mono mt-1">
              &lt;openui-widget type="slider" /&gt;
            </div>
          </div>

          <!-- Right: Interactive Canvas Widget -->
          <div class="rounded-lg bg-neutral-900/90 border border-neutral-800 p-2.5 space-y-2">
            <div class="flex items-center justify-between text-[10px]">
              <span class="text-neutral-400">Parameter Slider:</span>
              <span class="text-white font-bold">{lumisSliderVal}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              bind:value={lumisSliderVal}
              class="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div class="text-[10px] text-emerald-400 flex items-center justify-between">
              <span>RAM Allocation:</span>
              <span class="font-bold">{(lumisSliderVal * 0.24).toFixed(1)} MB</span>
            </div>
          </div>
        </div>
      </div>

    <!-- 4. PROPYLON GATEWAY (Zero-Trust MCP & In-Situ Enclave) -->
    {:else if project.id === 'propylon'}
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1.5 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <Lock class="h-3.5 w-3.5 text-blue-400" />
            <span>Zero-Trust MCP Control Plane (#![deny(unsafe_code)])</span>
          </span>
          <span class="text-cyan-400 text-[10px] bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">DLP: Active</span>
        </div>

        <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-3 space-y-2">
          <div class="flex items-center justify-between text-[10px] text-neutral-400">
            <span>Payload Pipeline</span>
            <span class="text-emerald-400">&gt;99.9% Egress Cut</span>
          </div>

          <div class="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] text-center">
            <div class="rounded bg-neutral-950 border border-neutral-800 p-1.5 flex-1">
              <div class="text-neutral-400 text-[9px]">Ingress</div>
              <div class="text-white font-bold">128 MB</div>
              <div class="text-[9px] text-neutral-500">Parquet/Zip</div>
            </div>

            <ArrowRight class="h-3 w-3 text-neutral-600 shrink-0" />

            <div class="rounded bg-blue-950/40 border border-blue-800/40 p-1.5 flex-1">
              <div class="text-blue-400 text-[9px]">In-Situ Enclave</div>
              <div class="text-white font-bold">DuckDB</div>
              <div class="text-[9px] text-blue-300">Zero Leakage</div>
            </div>

            <ArrowRight class="h-3 w-3 text-neutral-600 shrink-0" />

            <div class="rounded bg-emerald-950/40 border border-emerald-800/40 p-1.5 flex-1">
              <div class="text-emerald-400 text-[9px]">Summary</div>
              <div class="text-white font-bold">412 B</div>
              <div class="text-[9px] text-emerald-300">Clean Result</div>
            </div>
          </div>
        </div>
      </div>

    <!-- 5. RIDM SSO (Central IdP & Argon2id Seal) -->
    {:else if project.id === 'ridm'}
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1.5 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <Shield class="h-3.5 w-3.5 text-purple-400" />
            <span>Central IdP (auth.dvlpid.my.id / tenant: bps)</span>
          </span>
          <span class="text-purple-400 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-800/40">40-60MB RAM</span>
        </div>

        <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-3 space-y-2">
          <div class="flex items-center justify-between text-[10px]">
            <span class="text-white font-bold">Pegawai BPS Kabupaten Mempawah</span>
            <span class="text-emerald-400">SAML 2.0 & OIDC Ready</span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[10px] pt-1">
            <div class="bg-neutral-950 p-2 rounded border border-neutral-800 space-y-0.5">
              <div class="text-neutral-500">Security Standard:</div>
              <div class="text-white font-bold">Argon2id (Auto-Rehash)</div>
            </div>
            <div class="bg-neutral-950 p-2 rounded border border-neutral-800 space-y-0.5">
              <div class="text-neutral-500">Profile Claims:</div>
              <div class="text-cyan-300 font-bold">NIP 18-digit & 9-digit</div>
            </div>
          </div>
        </div>
      </div>

    <!-- 6. FLASHLEARN (Interactive 3D Flip Flashcard) -->
    {:else if project.id === 'flashlearn'}
      <div class="space-y-2 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <RotateCw class="h-3.5 w-3.5 text-teal-400" />
            <span>Interactive 3D Flashcard Preview (Klik Kartu!)</span>
          </span>
          <span class="text-neutral-500 text-[10px]">Svelte 5 Runes</span>
        </div>

        <!-- 3D Card Container -->
        <button
          onclick={() => flashcardFlipped = !flashcardFlipped}
          class="w-full text-left rounded-xl border border-neutral-800 bg-neutral-900/90 p-4 transition-all duration-300 hover:border-teal-500/60 cursor-pointer min-h-[110px] flex flex-col justify-between"
          aria-label="Flip flashcard"
        >
          {#if !flashcardFlipped}
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[10px] text-teal-400 font-bold">
                <span>PERTANYAAN (QUIZ ITEM)</span>
                <span class="text-neutral-500 flex items-center gap-1">
                  <RotateCw class="h-3 w-3" />
                  <span>Klik untuk balik</span>
                </span>
              </div>
              <p class="text-white font-sans text-xs sm:text-sm">
                "Mengapa arsitektur heksagonal mengisolasi domain logic dari framework database?"
              </p>
            </div>
            <div class="text-[10px] text-neutral-500 font-mono pt-1">
              Mode: Materi & Quiz Digabung
            </div>
          {:else}
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[10px] text-emerald-400 font-bold">
                <span>JAWABAN & KEY TAKEAWAY</span>
                <span class="text-neutral-500 flex items-center gap-1">
                  <RotateCw class="h-3 w-3" />
                  <span>Klik untuk balik</span>
                </span>
              </div>
              <p class="text-emerald-200 font-sans text-xs sm:text-sm">
                "Agar domain business logic dapat diuji 100% tanpa mock I/O dan tidak terikat vendor database tertentu."
              </p>
            </div>
            <div class="flex items-center gap-2 pt-1 text-[10px]">
              <span class="px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-800/40">Again</span>
              <span class="px-1.5 py-0.5 rounded bg-yellow-950 text-yellow-400 border border-yellow-800/40">Hard</span>
              <span class="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">Good</span>
              <span class="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">Easy</span>
            </div>
          {/if}
        </button>
      </div>

    <!-- 7. DOKTER-V (Financial & SBM Engine) -->
    {:else if project.id === 'dokterv'}
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between text-[11px] pb-1.5 border-b border-neutral-850">
          <span class="text-neutral-300 font-semibold flex items-center gap-1.5">
            <FileText class="h-3.5 w-3.5 text-purple-400" />
            <span>Tata Kelola Keuangan & Validasi SBM 2026 (admin.dvlpid.my.id)</span>
          </span>
          <span class="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">arc42 Compliant</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
          <!-- Surat Tugas & Collision -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 space-y-1">
            <div class="text-neutral-500">Surat Tugas & SPPD:</div>
            <div class="text-white font-bold">ST/2026/04/0021</div>
            <div class="text-emerald-400 flex items-center gap-1">
              <Check class="h-3 w-3" /> Anti-Collision: Zero Bentrok Jadwal
            </div>
          </div>

          <!-- SBM 2026 Ceiling -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 p-2.5 space-y-1">
            <div class="text-neutral-500">Validasi Batas Honor PMK:</div>
            <div class="text-white font-bold">Rp 2.400.000 / Rp 3.200.000</div>
            <div class="text-emerald-400 flex items-center gap-1">
              <Check class="h-3 w-3" /> Status: SBM Compliant (Aman)
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-850 pt-1.5">
          <span>LPD AI: Transformasi Catatan & Foto $\rightarrow$ PUEBI Formal</span>
          <span class="text-purple-300 font-bold">Octane FrankenPHP</span>
        </div>
      </div>

    {/if}

  </div>
</div>
