<script>
  import Child from "./5.2.Child.svelte";
</script>

<style>
  .wrapper {
    display: flex;
  }
</style>

<div class="container">
  <section>
    <h1>#5 Props</h1>
    <div class="wrapper">
      <Child />
      <Child color="white" />
      <Child backgroundColor="gold" />
      <Child color="blue" backgroundColor="gold" />
    </div>
  </section>
</div>
