<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { Github, Globe, Menu } from 'lucide-svelte';

  interface Props {
    locale: Locale;
    onToggleLocale: () => void;
    onToggleMobileDrawer?: () => void;
  }

  let { locale, onToggleLocale, onToggleMobileDrawer }: Props = $props();
</script>

<header class="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md transition-colors">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
    <!-- Brand -->
    <a href="/" class="group flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors">
      <span class="font-mono text-emerald-400 font-bold">&gt;</span>
      <span>ihkaru</span>
      <span class="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-[11px] text-neutral-400 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
        systems
      </span>
    </a>

    <!-- Status & Action controls -->
    <div class="flex items-center gap-3 sm:gap-4">
      <!-- Availability Badge -->
      <div class="hidden md:flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span class="font-sans">
          {locale === 'id' ? 'Tersedia untuk Rekayasa Sistem & AI' : 'Available for Systems & AI'}
        </span>
      </div>

      <!-- Language Toggle -->
      <button
        onclick={onToggleLocale}
        class="hidden sm:flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
        aria-label="Toggle language"
      >
        <Globe class="h-3.5 w-3.5 text-neutral-400" />
        <span class="font-bold">{locale.toUpperCase()}</span>
      </button>

      <!-- GitHub Profile Links -->
      <a
        href="https://github.com/ihkaru"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
        aria-label="GitHub Profile"
      >
        <Github class="h-4 w-4" />
      </a>

      <!-- Mobile Menu Trigger Button -->
      {#if onToggleMobileDrawer}
        <button
          onclick={onToggleMobileDrawer}
          class="flex md:hidden items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
          aria-label="Open mobile navigation drawer"
        >
          <Menu class="h-4 w-4" />
        </button>
      {/if}
    </div>
  </div>
</header>
