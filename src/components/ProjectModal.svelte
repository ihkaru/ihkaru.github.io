<script lang="ts">
  import type { ProjectItem, Locale } from '../types/portfolio';
  import { X, Github, ArrowUpRight, CheckCircle2, Cpu, ShieldAlert, Zap } from 'lucide-svelte';
  import { onMount, onDestroy } from 'svelte';

  interface Props {
    project: ProjectItem | null;
    locale: Locale;
    onClose: () => void;
  }

  let { project, locale, onClose }: Props = $props();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  $effect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

{#if project}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
    onclick={onClose}
    role="presentation"
  >
    <!-- Modal Dialog Window -->
    <div
      class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl text-neutral-100 space-y-6 focus:outline-none"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
    >
      <!-- Close Button -->
      <button
        onclick={onClose}
        class="absolute top-4 right-4 flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
        aria-label="Close modal"
      >
        <X class="h-5 w-5" />
      </button>

      <!-- Header Title & Badges -->
      <div class="space-y-2 pr-12">
        <div class="flex items-center gap-2">
          <span class="rounded bg-neutral-800 px-2 py-0.5 font-mono text-xs text-neutral-400 border border-neutral-700">
            {project.category.toUpperCase()}
          </span>
          <span class="font-mono text-xs text-neutral-500">priority: #{project.priority}</span>
        </div>
        <h2 id="modal-title" class="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {project.title}
        </h2>
        <p class="text-sm sm:text-base text-neutral-300 font-reading leading-relaxed">
          {project.subtitle[locale]}
        </p>
      </div>

      <!-- Problem Statement & Solution -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Problem -->
        <div class="rounded-xl border border-red-500/20 bg-red-950/10 p-4 space-y-2">
          <div class="flex items-center gap-2 font-mono text-xs font-semibold text-red-400">
            <ShieldAlert class="h-4 w-4" />
            <span>{locale === 'id' ? 'Tantangan Rekayasa (The Problem)' : 'Engineering Challenge'}</span>
          </div>
          <p class="text-xs sm:text-sm text-neutral-300 font-reading leading-relaxed">
            {project.problemStatement[locale]}
          </p>
        </div>

        <!-- Solution -->
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 space-y-2">
          <div class="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400">
            <Zap class="h-4 w-4" />
            <span>{locale === 'id' ? 'Solusi Arsitektural' : 'Architecture Solution'}</span>
          </div>
          <p class="text-xs sm:text-sm text-neutral-300 font-reading leading-relaxed">
            {project.architectureSolution[locale]}
          </p>
        </div>
      </div>

      <!-- Architecture Flow Sequence -->
      <div class="space-y-3">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
          <Cpu class="h-4 w-4 text-emerald-400" />
          <span>{locale === 'id' ? 'Alur Data & Eksekusi Sistem' : 'System Execution & Data Flow'}</span>
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {#each project.architectureFlow as flow}
            <div class="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 space-y-1">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-emerald-400 font-semibold">{flow.step}</span>
                <span class="text-white font-medium">{flow.title}</span>
              </div>
              <p class="text-xs text-neutral-400 font-reading leading-normal">
                {flow.detail}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Key Metrics Row -->
      <div class="space-y-2">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
          {locale === 'id' ? 'Metrik Pembuktian Teknis' : 'Technical Invariant Metrics'}
        </h3>
        <div class="grid grid-cols-3 gap-3">
          {#each project.metrics as metric}
            <div class="rounded-xl border border-neutral-800 bg-neutral-950/80 p-3 space-y-1">
              <div class="font-mono text-xs text-neutral-400">{metric.label}</div>
              <div class="font-mono text-base sm:text-lg font-bold text-white truncate">{metric.value}</div>
              {#if metric.description}
                <div class="text-[11px] text-neutral-500 truncate" title={metric.description}>{metric.description}</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- Highlights -->
      <div class="space-y-2">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
          {locale === 'id' ? 'Inovasi Rekayasa Utama' : 'Key Engineering Highlights'}
        </h3>
        <ul class="space-y-2 text-xs sm:text-sm text-neutral-300">
          {#each project.highlights[locale] as highlight}
            <li class="flex items-start gap-2.5">
              <CheckCircle2 class="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Tech Stack -->
      <div class="space-y-2">
        <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">Tech Stack</h3>
        <div class="flex flex-wrap gap-1.5">
          {#each project.techStack as tech}
            <span class="rounded bg-neutral-950 px-2.5 py-1 font-mono text-xs text-neutral-300 border border-neutral-800">
              {tech}
            </span>
          {/each}
        </div>
      </div>

      <!-- Modal Footer Actions -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-800">
        <div class="flex items-center gap-2">
          {#if project.liveUrl}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-mono font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors min-h-[44px]"
            >
              <span>Live Deployment</span>
              <ArrowUpRight class="h-3.5 w-3.5" />
            </a>
          {/if}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-xs font-mono font-medium text-neutral-200 hover:text-white hover:border-neutral-600 transition-colors min-h-[44px]"
          >
            <Github class="h-3.5 w-3.5" />
            <span>GitHub Repository</span>
            <ArrowUpRight class="h-3 w-3 text-neutral-400" />
          </a>
        </div>

        <button
          onclick={onClose}
          class="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer min-h-[44px]"
        >
          {locale === 'id' ? 'Tutup (Esc)' : 'Close (Esc)'}
        </button>
      </div>
    </div>
  </div>
{/if}
