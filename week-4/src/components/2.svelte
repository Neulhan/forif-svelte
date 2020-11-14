<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import axios from "axios";

  let posts = [];

  const getPostList = async () => {
    const res = await axios.get("http://127.0.0.1:8080/posts/");
    console.log(res);
    posts = res.data.posts;
  };

  onMount(() => {
    getPostList();
  });
</script>

<div class="container">
  {#each posts as post}
    <p>
      <Link to="/detail/{post.ID}">{post.title}</Link>
    </p>
  {/each}
  <Link to="/third">글 쓰러가기</Link>
</div>
