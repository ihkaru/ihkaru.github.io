<script lang="ts">
  import type { ProjectItem, Locale } from '../types/portfolio';
  import { ArrowUpRight, Github, Terminal } from 'lucide-svelte';
  import AppVisualPreview from './AppVisualPreview.svelte';
  import ProjectIcon from './ProjectIcon.svelte';

  interface Props {
    project: ProjectItem;
    locale: Locale;
    onOpenModal: (project: ProjectItem) => void;
  }

  let { project, locale, onOpenModal }: Props = $props();

  const categoryColor: Record<string, string> = {
    systems: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    ai: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    enterprise: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    education: 'border-teal-500/30 text-teal-400 bg-teal-500/10'
  };
</script>

<div class="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/70 space-y-4">
  <div class="space-y-4">
    <!-- Visual Living App Preview Window -->
    <div class="transition-transform duration-200 group-hover:scale-[1.01]">
      <AppVisualPreview {project} {locale} isModal={false} />
    </div>

    <!-- Header: Category & Priority -->
    <div class="flex items-center justify-between pt-1">
      <span class="inline-flex rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium {categoryColor[project.category] || 'border-neutral-800 text-neutral-400'}">
        {project.category.toUpperCase()}
      </span>
      <span class="font-mono text-xs text-neutral-500">priority: #{project.priority}</span>
    </div>

    <!-- Title & Subtitle -->
    <div class="space-y-1.5">
      <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
        <ProjectIcon name={project.iconKey} class="h-5 w-5 text-emerald-400 shrink-0" />
        <span>{project.title}</span>
      </h3>
      <p class="text-xs sm:text-sm text-neutral-300 font-reading leading-relaxed">
        {project.subtitle[locale]}
      </p>
    </div>

    <!-- Metrics Row -->
    <div class="grid grid-cols-3 gap-2 border-y border-neutral-800/80 py-3">
      {#each project.metrics as metric}
        <div class="space-y-0.5">
          <div class="font-mono text-[10px] text-neutral-400">{metric.label}</div>
          <div class="font-mono text-xs sm:text-sm font-bold text-white truncate" title={metric.value}>
            {metric.value}
          </div>
        </div>
      {/each}
    </div>

    <!-- Tech Stack Tags -->
    <div class="flex flex-wrap gap-1.5 pt-1">
      {#each project.techStack as tech}
        <span class="rounded bg-neutral-950 px-2 py-0.5 font-mono text-[10px] text-neutral-400 border border-neutral-800/80">
          {tech}
        </span>
      {/each}
    </div>
  </div>

  <!-- Card Action Footer -->
  <div class="flex items-center justify-between pt-6 border-t border-neutral-800/60 mt-4">
    <button
      onclick={() => onOpenModal(project)}
      class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
    >
      <Terminal class="h-3.5 w-3.5" />
      <span>{locale === 'id' ? 'Detail Arsitektur' : 'Architecture Spec'}</span>
    </button>

    <div class="flex items-center gap-2">
      {#if project.liveUrl}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-xs font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
          title="Live Production"
          aria-label="Live Demo"
        >
          <ArrowUpRight class="h-3.5 w-3.5" />
        </a>
      {/if}
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-xs font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
        title="GitHub Repository"
        aria-label="GitHub Repository"
      >
        <Github class="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
</div>
