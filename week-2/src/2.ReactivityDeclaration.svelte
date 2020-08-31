<script>
  let count = 0;
  $: double = count * 2;
  $: if (count >= 7) {
    alert("초과!");
    count = 0;
  }
</script>

<style>

</style>

<div class="container">
  <section>
    <h1>#2 Reactivity Declaration</h1>
    <p>{count}</p>
    <p>{double}</p>
    <button
      on:click={() => {
        count++;
      }}>
      +
    </button>
  </section>
</div>
