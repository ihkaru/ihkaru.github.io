<script lang="ts">
  import { onMount } from 'svelte';
  import type { Locale, ProjectItem } from './types/portfolio';
  import { projects } from './data/projects';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import AinaSpotlight from './components/AinaSpotlight.svelte';
  import ProjectGrid from './components/ProjectGrid.svelte';
  import ProjectModal from './components/ProjectModal.svelte';
  import Footer from './components/Footer.svelte';

  let locale = $state<Locale>('id');
  let selectedProject = $state<ProjectItem | null>(null);

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
  <Navbar {locale} onToggleLocale={toggleLocale} />

  <main class="flex-grow">
    <!-- Hero Section -->
    <Hero {locale} />

    <!-- Flagship Spotlight: Aina -->
    <AinaSpotlight project={ainaProject} {locale} onOpenModal={openModal} />

    <!-- Curated Project Grid: Cerdas, Lumis, Propylon, rIDM, FlashLearn, Dokter-V -->
    <ProjectGrid {projects} {locale} onOpenModal={openModal} />
  </main>

  <Footer {locale} />

  <!-- Architecture Deep-Dive Modal -->
  <ProjectModal project={selectedProject} {locale} onClose={closeModal} />
</div>
