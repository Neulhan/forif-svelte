<script>
  let color = "red";

  let yellow = true;
</script>

<style>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .yellow {
    color: yellow;
  }
  :global(.yellow) {
    color: hotpink;
  }
</style>

<div class="container">
  <section>
    <h1>#3 class</h1>
    <div class={color}>파란색</div>
    <div class:blue={color === 'red'}>파란색</div>
    <div class:yellow>파란색</div>
  </section>
</div>
