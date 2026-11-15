<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../../utils';

  interface Props {
    class?: string;
    variant?: 'default' | 'secondary' | 'outline' | 'emerald';
    children?: Snippet;
  }

  let { class: className = '', variant = 'default', children }: Props = $props();

  const variantStyles = {
    default: 'border-transparent bg-neutral-800 text-neutral-100 hover:bg-neutral-700',
    secondary: 'border-transparent bg-neutral-900 text-neutral-300 hover:bg-neutral-800',
    outline: 'border-neutral-800 text-neutral-300',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
  };
</script>

<div
  class={cn(
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2',
    variantStyles[variant] || variantStyles.default,
    className
  )}
>
  {#if children}
    {@render children()}
  {/if}
</div>
