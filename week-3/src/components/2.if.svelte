<script>
  let foods = [
    "김치",
    "불고기",
    "까르보나라 파스타",
    "불닭볶음면",
    "블루레몬에이드",
  ];
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

        &.red {
          background-color: #ff0000;
        }
        &.blue {
          background-color: $sub-main-color;
        }
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
</style>

<div class="container">
  <div class="wrapper">
    <h1>if/else</h1>
    {#each foods as food}
      {#if food === '김치'}
        <div class="food red">{food}</div>
      {:else if food === '블루레몬에이드'}
        <div class="food blue">{food}</div>
      {:else}
        <div class="food">{food}</div>
      {/if}
    {/each}
  </div>
</div>
