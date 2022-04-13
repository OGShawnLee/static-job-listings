<script lang="ts">
  import data from '../assets/data.json';

  let listings = data as Listing[];
</script>

<slot {listings} />
