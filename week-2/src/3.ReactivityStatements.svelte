<script>
  let count = 0;
  $: double = count * 2;
  $: console.log(count);
  $: if (count >= 7) {
    alert("초과!");
    count = 0;
  }
  $: for (let i = 0; i < count; i++) {
    console.log("for", i);
  }
</script>

<style>

</style>

<div class="container">
  <section>
    <h1>#3 Reactivity Statements</h1>
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
