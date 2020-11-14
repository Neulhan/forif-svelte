<script>
  import { navigate } from "svelte-routing";
  import axios from "axios";
  let title;
  let content;

  const submit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8080/post/create", {
        title,
        content,
      });
      navigate("/second");
    } catch (e) {
      console.log(e);
    }
  };
</script>

<style lang="scss">
  @import "../scss/_definition.scss";

  .create-post-wrapper {
    width: 100%;
    height: 100%;
    @include custom-flex(center, center);

    .container {
      width: 600px;
      @include custom-flex(center, center, column);
      input,
      textarea,
      button {
        width: 100%;
      }
    }
  }
</style>

<div class="create-post-wrapper">
  <div class="container">
    <h1>블로그 글 작성하기</h1>
    <input bind:value={title} type="text" />
    <textarea bind:value={content} name="" id="" cols="30" rows="10" />
    <button on:click={submit}>글 쓰기</button>
  </div>
</div>
