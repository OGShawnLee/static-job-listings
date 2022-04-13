<script lang="ts">
  import { Filters, Filter, Listing, Listings } from './components';
  import { fade } from 'svelte/transition';

  let main: HTMLElement;

  function decreaseMarginTop() {
    main.classList.replace('mt-66', 'mt-32');
  }

  function increaseMarginTop() {
    main.classList.replace('mt-32', 'mt-66');
  }
</script>

<main bind:this={main} class="mt-66 max-w-xs mx-auto | flex flex-col gap-14 | sm:container">
  <h1 class="sr-only">Job Listings</h1>

  <Filters let:filters let:remove let:setLevel let:setRole let:clear>
    <section
      class="min-w-xs max-w-sm mx-auto p-6 | flex justify-between gap-4 | bg-white rounded-md shadow-lg | sm:container"
      transition:fade={{ duration: 150 }}
      on:introstart={decreaseMarginTop}
      on:outroend={increaseMarginTop}>
      <h2 class="sr-only">Filters</h2>
      <div class="flex flex-wrap gap-4">
        <Filter filter={filters.role} on:click={() => setRole(null)} />
        <Filter filter={filters.level} on:click={() => setLevel(null)} />
        {#each filters.skills as skill}
          <Filter filter={skill} on:click={() => remove(skill)} />
        {/each}
      </div>
      <button
        class="font-bold transition-colors duration-150 hover:(text-cadet underline)"
        on:click={clear}>
        Clear
      </button>
    </section>
  </Filters>

  <Listings let:listings>
    <section class="grid gap-9">
      <h2 class="sr-only">Filtered Job Listings</h2>
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
