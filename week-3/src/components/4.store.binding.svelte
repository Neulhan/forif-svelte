<script>
  import { textStore } from "./store";

  import StoreInput from "./4.1.store.binding.child.svelte";
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
    <h1>STORE2</h1>
    {$textStore}
    <StoreInput />
  </div>
</div>
