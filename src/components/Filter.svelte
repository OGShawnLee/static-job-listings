<script lang="ts">
  import { scale } from 'svelte/transition';

  export let filter: string | null;
</script>

{#if filter}
  <div class="flex items-center | bg-steal-100" transition:scale={{ start: 1.5, duration: 125 }}>
    <span class="px-2">
      {filter}
    </span>
    <button
      class="h-8 w-8 min-w-8 | bg-cadet rounded-r-md transition-colors duration-150 hover:bg-steal-600"
      aria-label="remove {filter} from the filters"
      on:click>
      <img class="block m-auto" src="/icon-remove.svg" alt="" />
    </button>
  </div>
{/if}
