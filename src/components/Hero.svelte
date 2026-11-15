<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { Terminal, Shield, Cpu, ExternalLink } from 'lucide-svelte';

  interface Props {
    locale: Locale;
  }

  let { locale }: Props = $props();
</script>

<section class="relative overflow-hidden py-14 sm:py-20 border-b border-neutral-900">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-3xl space-y-6">
      <!-- Tag / Sub-label -->
      <div class="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-1 font-mono text-xs text-neutral-400">
        <Cpu class="h-3.5 w-3.5 text-emerald-400" />
        <span>Rust • Autonomous Agents • Svelte 5 • Enterprise Architecture</span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
        {locale === 'id' 
          ? 'Membangun Sistem Tangguh, Agen AI Otonom & Rekayasa Berkinerja Tinggi.' 
          : 'Engineering Resilient Systems, Autonomous AI Agents & High-Performance Backends.'}
      </h1>

      <!-- Bio / Prose -->
      <p class="text-base sm:text-lg text-neutral-300 font-reading leading-relaxed">
        {locale === 'id'
          ? 'Portofolio terpilih dari ihkaru dan ipds6104. Mengutamakan kode sumber tanpa mock, footprint memori minimal (<25MB), keamanan Zero-Trust, dan arsitektur bersih yang teruji di lingkungan produksi.'
          : 'Curated technical portfolio from ihkaru and ipds6104. Focused on zero-mock code, minimal memory footprint (<25MB), zero-trust security boundaries, and battle-tested enterprise architectures.'}
      </p>

      <!-- Badges / Principles -->
      <div class="flex flex-wrap items-center gap-2 pt-2">
        <div class="inline-flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-300">
          <Terminal class="h-3 w-3 text-emerald-400" />
          <span>Zero-Mock Integrity</span>
        </div>
        <div class="inline-flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-300">
          <Shield class="h-3 w-3 text-cyan-400" />
          <span>Pure Rust Systems</span>
        </div>
        <a 
          href="https://github.com/ipds6104" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-1 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
        >
          <span>org: @ipds6104</span>
          <ExternalLink class="h-3 w-3" />
        </a>
      </div>
    </div>
  </div>
</section>
