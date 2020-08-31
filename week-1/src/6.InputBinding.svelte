<script>
  let text = "";
  let number = 0;
</script>

<div class="container">
  <section>
    <h1>#6 InputBinding</h1>

    <input type="text" bind:value={text} />
    <h1>{text}</h1>

    <input type="number" bind:value={number} />
    <h1>{number === undefined ? 0 : number}px</h1>

  </section>
</div>
