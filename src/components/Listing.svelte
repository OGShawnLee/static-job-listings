<script lang="ts">
  export let listing: Listing;

  const skills = [listing.role, listing.level, ...listing.languages, ...listing.tools];
</script>

<article
  class="relative pt-12 px-6 pb-6 | flex flex-col gap-3 | bg-white rounded-md shadow-lg | sm:pt-8 lg:(flex-row items-center gap-8)"
  class:featured={listing.featured}
  id="listing-{listing.id}">
  <!-- Details -->
  <div class="sm:(flex items-center gap-8)">
    <!-- Image -->
    <div class="absolute -top-6 h-16 w-16 min-h-16 rounded-full sm:(static h-20 w-20 min-h-20)">
      <img
        class="w-full h-full object-center object-cover"
        src={listing.logo}
        alt="{listing.company}-logo" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-6">
        <span class="text-lg font-bold text-cadet">
          {listing.company}
        </span>
        {#if listing.featured || listing.new}
          <div class="space-x-1 children:max-h-[fit-content]">
            {#if listing.new}
              <div class="inline-block px-2.5 py-0.5 | bg-cadet rounded-xl">
                <span class="text-sm text-white uppercase">New!</span>
              </div>
            {/if}
            {#if listing.featured}
              <div class="inline-block px-2.5 py-0.5 | bg-steal-600 rounded-xl">
                <span class="text-sm text-white uppercase">Featured</span>
              </div>
            {/if}
          </div>
        {/if}
      </div>
      <h2
        class="text-xl font-bold text-steal-600 transition-colors duration-150 hover:text-cadet cursor-pointer">
        {listing.position}
      </h2>
      <div class="space-x-1 text-steal-500">
        <span>{listing.postedAt}</span>
        <span aria-hidden="true"> &bull </span>
        <span>{listing.contract}</span>
        <span aria-hidden="true"> &bull </span>
        <span>{listing.location}</span>
      </div>
    </div>
  </div>
  <!-- Divider -->
  <div class="h-[1px] my-2.5 | bg-steal-600/30 | lg:hidden" />
  <!-- Skills -->
  <section class="lg:ml-auto">
    <h3 class="sr-only">Skills</h3>
    <ul class="flex flex-wrap gap-4">
      {#each skills as skill}
        <li>
          <button
            class="py-1.5 px-2 rounded | bg-steal-100 font-bold text-cadet transition-colors duration-150 hover:(bg-cadet text-steal-100)"
            aria-label="add {skill} to the filter list">
            {skill}
          </button>
        </li>
      {/each}
    </ul>
  </section>
</article>

<style>
  .featured {
    border-left: 5px;
    border-style: solid;
    border-left-color: hsl(180, 29%, 50%);
  }
</style>
