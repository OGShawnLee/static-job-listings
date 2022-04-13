<script lang="ts">
  import { filters } from '../state';

  export let label: string;
  export let option: string;
</script>

<button
  class="py-1.5 px-2 rounded | bg-steal-100 font-bold text-cadet transition-colors duration-150 hover:(bg-cadet text-steal-100)"
  class:selected={filters.isSelected(option, $filters)}
  aria-label={label}
  on:click>
  <span class="capitalize">
    {option}
  </span>
</button>

<style>
  .selected {
    color: hsl(180, 31%, 95%);
    background-color: hsl(180, 14%, 20%);
  }
</style>
