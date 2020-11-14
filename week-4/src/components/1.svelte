<script>
  import { beforeUpdate, onMount, afterUpdate, onDestroy } from "svelte";

  let count = 0;

  const addCount = () => {
    count++;
  };

  beforeUpdate(() => {
    console.log("[FIRST] BEFORE UPDATE");
  });

  onMount(() => {
    console.log("[FIRST] ON MOUNT");
  });

  afterUpdate(() => {
    console.log("[FIRST] AFTER UPDATE");
  });

  onDestroy(() => {
    console.log("[FIRST] ON DESTROY");
  });
</script>

<h1>Life Cycle</h1>
<button on:click={addCount}>{count}</button>
