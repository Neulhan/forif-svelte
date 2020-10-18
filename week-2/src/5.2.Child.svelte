<script>
  export let color = "black";
  export let backgroundColor = "red";
</script>

<style>
  .element {
    width: 200px;
    height: 200px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
</style>

<div
  class="element"
  style="background-color: {backgroundColor}; color: {color};">
  안녕
</div>
