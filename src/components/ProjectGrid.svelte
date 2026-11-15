<script lang="ts">
  import type { ProjectItem, Locale, ProjectCategory } from '../types/portfolio';
  import ProjectCard from './ProjectCard.svelte';
  import { Layers } from 'lucide-svelte';

  interface Props {
    projects: ProjectItem[];
    locale: Locale;
    onOpenModal: (project: ProjectItem) => void;
  }

  let { projects, locale, onOpenModal }: Props = $props();

  let activeCategory = $state<string>('all');

  const filteredProjects = $derived(
    activeCategory === 'all'
      ? projects.filter(p => p.id !== 'aina') // Aina is in Hero Spotlight
      : projects.filter(p => p.id !== 'aina' && p.category === activeCategory)
  );

  const filters = [
    { id: 'all', label: { id: 'Semua Proyek', en: 'All Projects' } },
    { id: 'systems', label: { id: 'Systems & Rust', en: 'Systems & Rust' } },
    { id: 'enterprise', label: { id: 'Enterprise & Gov', en: 'Enterprise & Gov' } },
    { id: 'education', label: { id: 'Learning Platforms', en: 'Learning Platforms' } }
  ];
</script>

<section class="py-14 sm:py-20 border-b border-neutral-900">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
    
    <!-- Section Header & Filter Tabs -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          <Layers class="h-6 w-6 text-emerald-400" />
          <span>{locale === 'id' ? 'Koleksi Rekayasa Terkurasi' : 'Curated Engineering Works'}</span>
        </h2>
        <p class="text-sm text-neutral-400 font-reading mt-1">
          {locale === 'id' 
            ? '6 Proyek Unggulan Teruji: Bebas mock, footprint memori minimal, dan arsitektur enterprise.' 
            : '6 Battle-Tested Flagships: Zero-mock, low-memory footprint, and enterprise architectures.'}
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-neutral-800 bg-neutral-900/60">
        {#each filters as f}
          <button
            onclick={() => activeCategory = f.id}
            class="rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors cursor-pointer min-h-[44px] {activeCategory === f.id ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'}"
          >
            {f.label[locale]}
          </button>
        {/each}
      </div>
    </div>

    <!-- 2-Column Responsive Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each filteredProjects as project (project.id)}
        <ProjectCard {project} {locale} {onOpenModal} />
      {/each}
    </div>

  </div>
</section>
