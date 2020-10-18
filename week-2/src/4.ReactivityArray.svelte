<script>
  let arr = [];
  let count = 0;

  $: {
    arr.push(count);
    arr = arr;
    console.log(arr);
  }

  $: sum = arr.reduce((result, value) => result + value, 0);
  $: sub = arr.reduce((result, value) => result - value, 0);

  const add = () => {
    count++;
  };
</script>

<style>
</style>

<div class="container">
  <section>
    <h1>#4 Reactivity Array</h1>
    <p>{arr.join(' + ')} = {sum}</p>
    <p>{arr.join(' - ')} = {sub}</p>
    <button on:click={add}>{count}</button>
  </section>
</div>
