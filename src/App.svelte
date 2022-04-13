<script lang="ts">
  import { Listing, Listings } from './components';
</script>

<main class="max-w-sm mx-auto | sm:container">
  <Listings let:listings>
    <section class="grid gap-9">
      <h1 class="sr-only">Job Listings</h1>
      {#each listings as listing (listing.id)}
        <Listing {listing} />
      {/each}
    </section>
  </Listings>
</main>

<style>
  :global(html) {
    font-size: 15px;
  }

  :global(body::after) {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 156px;
    z-index: -10;
    background-color: hsl(180, 29%, 50%);
    background-image: url('./assets/bg-header-desktop.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 375px) {
    :global(body::after) {
      background-image: url('./assets/bg-header-mobile.svg');
    }
  }
</style>
