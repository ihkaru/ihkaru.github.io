<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { Github, Heart, ShieldCheck } from 'lucide-svelte';

  interface Props {
    locale: Locale;
  }

  let { locale }: Props = $props();
</script>

<footer class="border-t border-neutral-900 bg-neutral-950 py-12 text-neutral-400">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
      
      <!-- Brand & Copy -->
      <div class="space-y-1 text-center sm:text-left">
        <div class="flex items-center justify-center sm:justify-start gap-2 font-mono text-sm text-neutral-200 font-bold">
          <span class="text-emerald-400">&gt;</span>
          <span>ihkaru.github.io</span>
        </div>
        <p class="text-xs font-reading text-neutral-500">
          {locale === 'id' 
            ? 'Portofolio statis bebas AI slop. Dibangun dengan Svelte 5, Vite, dan Tailwind CSS v4.' 
            : 'Static portfolio built without AI slop. Powered by Svelte 5, Vite, and Tailwind CSS v4.'}
        </p>
      </div>

      <!-- Links & Standards -->
      <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
        <div class="inline-flex items-center gap-1 text-emerald-400">
          <ShieldCheck class="h-3.5 w-3.5" />
          <span>Zero-Mock Standard</span>
        </div>
        <a
          href="https://github.com/ihkaru"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-white transition-colors"
        >
          <Github class="h-3.5 w-3.5" />
          <span>ihkaru</span>
        </a>
        <a
          href="https://github.com/ipds6104"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-white transition-colors"
        >
          <Github class="h-3.5 w-3.5" />
          <span>ipds6104</span>
        </a>
        <span class="text-neutral-600">|</span>
        <span class="text-neutral-500">MIT License</span>
      </div>

    </div>
  </div>
</footer>
