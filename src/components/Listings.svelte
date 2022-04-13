<script lang="ts">
  import data from '../assets/data.json';
  import { filters } from '../state';

  let listings = data as Listing[];
  $: filtered = filters.filter(listings, $filters);
</script>

<slot listings={filtered} />
