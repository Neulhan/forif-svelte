<script>
  import countStore from "./countStore";

  const add = () => {
    countStore.update((value) => value + 1);
  };

  const sub = () => {
    countStore.update((value) => value - 1);
  };

  const reset = () => {
    countStore.set(0);
  };
</script>

<div class="controler">
  <button on:click={add}>+</button>
  <button on:click={sub}>-</button>
  <button on:click={reset}>0</button>
</div>
