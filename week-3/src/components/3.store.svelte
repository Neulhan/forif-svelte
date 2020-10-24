<script>
  import { countStore } from "./store";

  import Controler from "./3.1.store.set.update.svelte";
  console.log(countStore); //  {set: ƒ, update: ƒ, subscribe: ƒ}

  let count_subscribe;

  countStore.subscribe((value) => {
    count_subscribe = value;
  });
</script>

<style lang="scss">
  @import "../scss/_definition.scss";
  .container {
    height: 100%;
    @include custom-flex(center, center);
    .wrapper {
      margin-top: 200px;
      width: 800px;
      padding: 40px;
      background-color: $color-gray-50;
      border: 1px solid $color-gray-100;
    }
  }
</style>

<div class="container">
  <div class="wrapper">
    <h1>STORE</h1>
    {count_subscribe}
    {$countStore}
    <Controler />
  </div>
</div>
