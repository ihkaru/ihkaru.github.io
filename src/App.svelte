<script lang="ts">
  import { onMount } from 'svelte';
  import type { Locale, ProjectItem } from './types/portfolio';
  import { projects } from './data/projects';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import AinaSpotlight from './components/AinaSpotlight.svelte';
  import ProjectGrid from './components/ProjectGrid.svelte';
  import ExperienceSection from './components/ExperienceSection.svelte';
  import ProjectModal from './components/ProjectModal.svelte';
  import Footer from './components/Footer.svelte';
  import { X, Bot, Globe, MessageSquare, Linkedin, Mail } from 'lucide-svelte';

  let locale = $state<Locale>('id');
  let selectedProject = $state<ProjectItem | null>(null);
  let isMobileDrawerOpen = $state(false);

  const ainaProject = projects.find(p => p.id === 'aina') || projects[0];

  function toggleLocale() {
    locale = locale === 'id' ? 'en' : 'id';
  }

  function openModal(project: ProjectItem) {
    selectedProject = project;
    history.replaceState(null, '', `#project-${project.slug}`);
  }

  function closeModal() {
    selectedProject = null;
    if (window.location.hash.startsWith('#project-')) {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const slug = hash.replace('#project-', '');
      const found = projects.find(p => p.slug === slug);
      if (found) {
        selectedProject = found;
      }
    } else {
      selectedProject = null;
    }
  }

  onMount(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });
</script>

<div class="min-h-screen bg-neutral-950 flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-300">
  <Navbar {locale} onToggleLocale={toggleLocale} onToggleMobileDrawer={() => isMobileDrawerOpen = !isMobileDrawerOpen} />

  <!-- Mobile Responsive Drawer (md: hidden, backdrop overlay) -->
  {#if isMobileDrawerOpen}
    <div
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden transition-opacity"
      onclick={(e) => { if (e.target === e.currentTarget) isMobileDrawerOpen = false; }}
      role="presentation"
    >
      <div
        class="fixed right-0 top-0 bottom-0 w-72 bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <div class="space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
            <span class="font-mono text-sm font-bold text-white">&gt; ihkaru</span>
            <button
              onclick={() => isMobileDrawerOpen = false}
              class="p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-neutral-950 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close navigation drawer"
            >
              <X class="h-4 w-4" />
            </button>
          </div>

          <nav class="space-y-3 font-mono text-xs">
            <div class="text-[10px] uppercase text-neutral-500 tracking-wider">Navigasi Proyek</div>
            <a
              href="#project-aina"
              onclick={() => { openModal(ainaProject); isMobileDrawerOpen = false; }}
              class="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-950/70 text-neutral-200 hover:text-emerald-400 border border-neutral-800/80 min-h-[44px]"
            >
              <Bot class="h-4 w-4 text-emerald-400" />
              <span>Aina (あいな) #1</span>
            </a>
            <div class="text-[10px] uppercase text-neutral-500 tracking-wider pt-2">Saluran Langsung</div>
            <a
              href="https://wa.me/6289625345646"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/70 text-neutral-200 hover:text-emerald-400 border border-neutral-800/80 min-h-[44px]"
            >
              <span class="flex items-center gap-2">
                <MessageSquare class="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </span>
              <span class="text-neutral-500 text-[10px]">089625345646</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ihza-fikri-zaki-karunia-89463519b"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/70 text-neutral-200 hover:text-blue-400 border border-neutral-800/80 min-h-[44px]"
            >
              <span class="flex items-center gap-2">
                <Linkedin class="h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
              </span>
              <span class="text-neutral-500 text-[10px]">ihza-fikri...</span>
            </a>

            <div class="text-[10px] uppercase text-neutral-500 tracking-wider pt-2">Preferensi</div>
            <button
              onclick={toggleLocale}
              class="w-full flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/70 text-neutral-200 border border-neutral-800/80 min-h-[44px] cursor-pointer"
            >
              <span class="flex items-center gap-2">
                <Globe class="h-4 w-4 text-neutral-400" />
                <span>Bahasa</span>
              </span>
              <span class="font-bold text-emerald-400">{locale.toUpperCase()}</span>
            </button>
          </nav>
        </div>

        <div class="pt-6 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
          <span>Systems & AI Engineer</span>
        </div>
      </div>
    </div>
  {/if}

  <main class="flex-grow">
    <!-- Hero Section with Profile Photo & Bio -->
    <Hero {locale} />

    <!-- Flagship Spotlight: Aina -->
    <AinaSpotlight project={ainaProject} {locale} onOpenModal={openModal} />

    <!-- Curated Project Grid: Cerdas, Lumis, Propylon, rIDM, FlashLearn, Dokter-V -->
    <ProjectGrid {projects} {locale} onOpenModal={openModal} />

    <!-- Career Experience & Academic Background -->
    <ExperienceSection {locale} />
  </main>

  <Footer {locale} />

  <!-- Architecture Deep-Dive Modal -->
  <ProjectModal project={selectedProject} {locale} onClose={closeModal} />
</div>
