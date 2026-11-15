<script lang="ts">
  import type { ProjectItem, Locale } from '../types/portfolio';
  import { Terminal, Shield, Sparkles, Github, ArrowUpRight, CheckCircle2, Bot } from 'lucide-svelte';

  interface Props {
    project: ProjectItem;
    locale: Locale;
    onOpenModal: (project: ProjectItem) => void;
  }

  let { project, locale, onOpenModal }: Props = $props();
</script>

<section class="py-12 border-b border-neutral-900 bg-gradient-to-b from-neutral-950 via-neutral-900/20 to-neutral-950">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <!-- Header Flagship Tag -->
    <div class="flex items-center justify-between pb-6">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-400">
          <Sparkles class="h-3.5 w-3.5" />
          {locale === 'id' ? 'Proyek Utama (Flagship)' : 'Primary Flagship Project'}
        </span>
        <span class="font-mono text-xs text-neutral-500">priority: #1</span>
      </div>
      <span class="font-mono text-xs text-neutral-400">ipds6104 / aina</span>
    </div>

    <!-- Main Card Body -->
    <div class="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-xl transition-all hover:border-neutral-700/80">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Project Narrative -->
        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
              <Bot class="h-8 w-8 text-emerald-400 shrink-0" />
              <span>{project.title}</span>
            </h2>
            <p class="text-base sm:text-lg text-emerald-400 font-mono font-medium">
              {locale === 'id' ? 'Asisten AI Rekan Kerja Mandiri di WhatsApp' : 'Self-Hosted Agentic AI Co-Worker in WhatsApp'}
            </p>
          </div>

          <p class="text-sm sm:text-base text-neutral-300 font-reading leading-relaxed">
            {project.subtitle[locale]}
          </p>

          <!-- Metrics Row -->
          <div class="grid grid-cols-3 gap-3 pt-2">
            {#each project.metrics as metric}
              <div class="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3 space-y-1">
                <div class="font-mono text-xs text-neutral-400">{metric.label}</div>
                <div class="text-lg sm:text-xl font-bold text-white font-mono">{metric.value}</div>
                {#if metric.description}
                  <div class="text-[11px] text-neutral-500 truncate" title={metric.description}>{metric.description}</div>
                {/if}
              </div>
            {/each}
          </div>

          <!-- Feature Bullets -->
          <ul class="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-300">
            {#each project.highlights[locale] as highlight}
              <li class="flex items-start gap-2.5">
                <CheckCircle2 class="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-4">
            <button
              onclick={() => onOpenModal(project)}
              class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-sans text-sm font-semibold text-neutral-950 hover:bg-emerald-400 transition-colors cursor-pointer min-h-[44px]"
            >
              <Terminal class="h-4 w-4" />
              <span>{locale === 'id' ? 'Buka Arsitektur & Alur Data' : 'Explore Architecture Flow'}</span>
            </button>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-2.5 font-mono text-sm text-neutral-200 hover:border-neutral-600 hover:text-white transition-colors min-h-[44px]"
            >
              <Github class="h-4 w-4" />
              <span>ipds6104/aina</span>
              <ArrowUpRight class="h-3.5 w-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        <!-- Right: Telemetry & WhatsApp Flow Simulation -->
        <div class="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs space-y-4 shadow-inner">
          <!-- Terminal Header -->
          <div class="flex items-center justify-between border-b border-neutral-800 pb-3 text-neutral-400">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
              <span class="ml-2 text-[11px] text-neutral-400">aina-core::telemetry</span>
            </div>
            <span class="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">READY</span>
          </div>

          <!-- WhatsApp Chat Simulation Mockup -->
          <div class="space-y-3 pt-1">
            <!-- Ingress Message -->
            <div class="rounded-lg bg-neutral-900/90 border border-neutral-800/80 p-3 space-y-1">
              <div class="flex items-center justify-between text-[11px] text-neutral-400">
                <span class="font-bold text-neutral-300">Staff @ BPS Mempawah</span>
                <span>09:41 AM</span>
              </div>
              <p class="text-neutral-200 font-sans text-xs">
                "Aina, tolong periksa anomali data harga beras dan jalankan skrip perapian Parquet-nya."
              </p>
            </div>

            <!-- Agent Trace Log -->
            <div class="p-2.5 rounded bg-black/60 border border-neutral-800/60 space-y-1 text-[11px] text-neutral-400">
              <div class="text-cyan-400 font-bold">&gt; FTS5 Context Retrieval: 2.4ms (OK)</div>
              <div class="text-neutral-400">&gt; Quota Pool: Google Account #4 (allocated)</div>
              <div class="text-emerald-400">&gt; DAC Check: Staff authorized for workspace</div>
              <div class="text-neutral-500">&gt; Engine: agy terminal sandboxed execution</div>
            </div>

            <!-- Egress Response -->
            <div class="rounded-lg bg-emerald-950/20 border border-emerald-800/30 p-3 space-y-1">
              <div class="flex items-center justify-between text-[11px] text-emerald-400 font-bold">
                <span class="flex items-center gap-1.5">
                  <Bot class="h-3.5 w-3.5 text-emerald-400" />
                  <span>Aina</span>
                </span>
                <span class="text-neutral-400 font-normal">09:41 AM</span>
              </div>
              <p class="text-neutral-200 font-sans text-xs">
                "Siap. Anomali 3 sampel harga terdeteksi di pasar Sungai Kunyit. Script agregasi Parquet telah dieksekusi bersih tanpa error."
              </p>
            </div>
          </div>

          <!-- Footer Telemetry -->
          <div class="flex items-center justify-between border-t border-neutral-800 pt-3 text-[11px] text-neutral-400">
            <span class="flex items-center gap-1.5 text-neutral-300">
              <Shield class="h-3.5 w-3.5 text-emerald-400" />
              <span>Data Custodianship (DAC)</span>
            </span>
            <span class="text-emerald-400 font-semibold">100% Hermetic</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
