<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { Github, ShieldCheck, Mail, Linkedin, MessageSquare } from 'lucide-svelte';

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
          <span>Ihza Fikri Zaki Karunia (ihkaru)</span>
        </div>
        <p class="text-xs font-reading text-neutral-500">
          {locale === 'id' 
            ? 'Information System Technician di BPS Mempawah • Alumnus Komputasi Statistik STIS.' 
            : 'Information System Technician at BPS Mempawah • STIS Computational Statistics Alumnus.'}
        </p>
      </div>

      <!-- Links & Standards -->
      <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
        <a
          href="https://wa.me/6289625345646"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-emerald-400 transition-colors"
          title="WhatsApp"
        >
          <MessageSquare class="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ihza-fikri-zaki-karunia-89463519b"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-blue-400 transition-colors"
          title="LinkedIn"
        >
          <Linkedin class="h-3.5 w-3.5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:ihza2karunia@gmail.com"
          class="flex items-center gap-1 hover:text-white transition-colors"
          title="Email"
        >
          <Mail class="h-3.5 w-3.5" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/ihkaru"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-white transition-colors"
          title="GitHub ihkaru"
        >
          <Github class="h-3.5 w-3.5" />
          <span>ihkaru</span>
        </a>
        <a
          href="https://github.com/ipds6104"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 hover:text-white transition-colors"
          title="GitHub ipds6104"
        >
          <Github class="h-3.5 w-3.5" />
          <span>ipds6104</span>
        </a>
        <span class="text-neutral-600">|</span>
        <div class="inline-flex items-center gap-1 text-emerald-400">
          <ShieldCheck class="h-3.5 w-3.5" />
          <span>Zero-Mock</span>
        </div>
      </div>

    </div>
  </div>
</footer>
