<script lang="ts">
  import type { ProjectIconKey } from '../types/portfolio';
  import {
    Bot,
    Database,
    Cpu,
    Shield,
    KeyRound,
    GraduationCap,
    FileSpreadsheet,
    Terminal
  } from 'lucide-svelte';

  interface Props {
    name?: ProjectIconKey | string;
    class?: string;
  }

  let { name = 'bot', class: className = 'h-5 w-5' }: Props = $props();
</script>

{#if name === 'bot'}
  <Bot class={className} />
{:else if name === 'database'}
  <Database class={className} />
{:else if name === 'cpu'}
  <Cpu class={className} />
{:else if name === 'shield'}
  <Shield class={className} />
{:else if name === 'key'}
  <KeyRound class={className} />
{:else if name === 'graduation-cap'}
  <GraduationCap class={className} />
{:else if name === 'file-spreadsheet'}
  <FileSpreadsheet class={className} />
{:else}
  <Terminal class={className} />
{/if}
