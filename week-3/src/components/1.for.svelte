<script>
  let foods = ["김치", "불고기", "까르보나라 파스타", "불닭볶음면"];
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

      .food {
        background-color: $main-color;
        color: white;
        padding: 4px 8px;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
</style>

<div class="container">
  <div class="wrapper">
    <h1>FOR</h1>
    {#each foods as food}
      <div class="food">{food}</div>
    {/each}
  </div>
</div>
