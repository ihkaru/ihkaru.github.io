<script lang="ts">
  import type { Locale } from '../types/portfolio';
  import { 
    Terminal, Shield, Cpu, ExternalLink, Mail, Linkedin, 
    MessageSquare, Github, MapPin, Briefcase, GraduationCap 
  } from 'lucide-svelte';

  interface Props {
    locale: Locale;
  }

  let { locale }: Props = $props();
</script>

<section class="relative overflow-hidden py-12 sm:py-16 border-b border-neutral-900">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
      
      <!-- Left: Bio & Intro -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Role & Institution Pill -->
        <div class="flex flex-wrap items-center gap-2">
          <div class="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-1 font-mono text-xs text-neutral-300">
            <Briefcase class="h-3.5 w-3.5 text-emerald-400" />
            <span>Badan Pusat Statistik (BPS Mempawah)</span>
          </div>
          <div class="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-1 font-mono text-xs text-neutral-400">
            <MapPin class="h-3.5 w-3.5 text-neutral-500" />
            <span>Kalimantan Barat, Indonesia</span>
          </div>
        </div>

        <!-- Name & Professional Title -->
        <div class="space-y-2">
          <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ihza Fikri Zaki Karunia
          </h1>
          <p class="text-base sm:text-xl font-mono text-emerald-400 font-medium">
            {locale === 'id' 
              ? 'Information System Technician & Alumnus Komputasi Statistik STIS' 
              : 'Information System Technician & Computational Statistics Alumnus'}
          </p>
        </div>

        <!-- Core Mission / Bio -->
        <p class="text-sm sm:text-base text-neutral-300 font-reading leading-relaxed">
          {locale === 'id'
            ? 'Merencanakan, mengimplementasikan, dan memelihara sistem informasi otomasi statistik untuk mendukung Badan Pusat Statistik (BPS) dalam kerangka kerja Generic Statistical Business Process Model (GSBPM). Mengembangkan arsitektur backend Pure Rust, agen AI otonom, sistem data offline-first, dan ekosistem enterprise tanpa mock.'
            : 'Planning, implementing, and maintaining automated statistical information systems for the National Statistical Office of Indonesia (BPS) under the Generic Statistical Business Process Model (GSBPM). Crafting high-performance Pure Rust backends, autonomous AI agents, offline-first survey systems, and zero-mock enterprise architectures.'}
        </p>

        <!-- Direct Contact Actions (Touch target >= 44px) -->
        <div class="flex flex-wrap items-center gap-2.5 pt-1">
          <a
            href="https://wa.me/6289625345646"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-2 font-mono text-xs font-semibold text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-500/60 transition-colors min-h-[44px]"
            title="Chat di WhatsApp"
          >
            <MessageSquare class="h-4 w-4" />
            <span>WhatsApp (089625345646)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ihza-fikri-zaki-karunia-89463519b"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-950/20 px-3.5 py-2 font-mono text-xs font-semibold text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/60 transition-colors min-h-[44px]"
            title="Profil LinkedIn"
          >
            <Linkedin class="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:ihza2karunia@gmail.com"
            class="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 font-mono text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors min-h-[44px]"
            title="Kirim Email"
          >
            <Mail class="h-4 w-4 text-neutral-400" />
            <span>ihza2karunia@gmail.com</span>
          </a>

          <a
            href="https://github.com/ihkaru"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 font-mono text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors min-h-[44px]"
            title="GitHub ihkaru"
          >
            <Github class="h-4 w-4" />
            <span>@ihkaru</span>
          </a>
        </div>

        <!-- Technical Badges -->
        <div class="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <div class="inline-flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 text-neutral-300">
            <GraduationCap class="h-3.5 w-3.5 text-teal-400" />
            <span>Politeknik Statistika STIS (2018–2022)</span>
          </div>
          <div class="inline-flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 text-neutral-300">
            <Cpu class="h-3.5 w-3.5 text-cyan-400" />
            <span>Pure Rust &amp; High-Concurrency</span>
          </div>
          <div class="inline-flex items-center gap-1.5 rounded border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 text-neutral-300">
            <Terminal class="h-3.5 w-3.5 text-emerald-400" />
            <span>Zero-Mock Integrity</span>
          </div>
        </div>

      </div>

      <!-- Right: Profile Portrait Card -->
      <div class="lg:col-span-4 flex flex-col items-center lg:items-end">
        <div class="relative group">
          <!-- Subtle glow ring -->
          <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
          
          <div class="relative rounded-2xl border-2 border-neutral-800 bg-neutral-900 p-2.5 shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Ihza Fikri Zaki Karunia" 
              class="h-56 w-56 sm:h-64 sm:w-64 rounded-xl object-cover object-top shadow-inner"
              loading="eager"
            />
            
            <!-- Live Availability Pill -->
            <div class="mt-2.5 flex items-center justify-between px-2 py-1 bg-neutral-950/80 rounded-lg border border-neutral-800/80 text-[11px] font-mono">
              <span class="flex items-center gap-1.5 text-emerald-400">
                <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Systems Eng</span>
              </span>
              <span class="text-neutral-500">Mempawah</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
