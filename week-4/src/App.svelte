<script>
  import { Router, Link, Route } from "svelte-routing";

  import Main from "./components/Main.svelte";
  import First from "./components/1.svelte";
  import Second from "./components/2.svelte";
  import Third from "./components/3.svelte";
  import Detail from "./components/4.svelte";
</script>

<Router>
  <Route path="/" component={Main} />
  <Route path="/first" component={First} />
  <Route path="/second" component={Second} />
  <Route path="/third" component={Third} />
  <Route path="/detail/:pk" component={Detail} let:pk />
</Router>
