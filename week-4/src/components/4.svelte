<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import axios from "axios";
  export let pk;
  let post;

  const getPost = async () => {
    const res = await axios.get(`http://127.0.0.1:8080/post/${pk}`);
    post = res.data.post;
  };

  onMount(() => {
    setTimeout(getPost, 1000);
  });
</script>

{#if post}
  <h1>{post.title}</h1>
  <p>{post.content}</p>
{:else}
  <div class="loading">로딩중</div>
{/if}

<Link to="/second">돌아가기</Link>
