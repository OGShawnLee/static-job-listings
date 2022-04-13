<script>
  import { filters } from '../state';

  const { clear, remove, setLevel, setRole } = filters;
</script>

{#if $filters.level || $filters.role || $filters.skills.length}
  <slot filters={$filters} {clear} {remove} {setLevel} {setRole} />
{/if}
