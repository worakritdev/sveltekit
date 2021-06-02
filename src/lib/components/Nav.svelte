<script>
  export let navPages;
</script>

<!-- markup (zero or more items) goes here -->
<nav>
  {#each navPages as navPage}
    <!-- content here -->
    <a href="#">{navPage}</a>
  {/each}
</nav>

<style>
  /* your styles go here */
</style>
