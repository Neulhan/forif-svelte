<script>
  // npm install svelte-router
  import { Router, Link, Route } from "svelte-routing";

  import Zero from "./0.scss.svelte";
  import First from "./1.for.svelte";
  import Second from "./2.if.svelte";
  import Third from "./3.store.svelte";
  import Fourth from "./4.store.binding.svelte";
</script>

<Router>
  <nav>
    <Link to="/">HOME</Link>
    <Link to="/first">FIRST</Link>
    <Link to="/second">SECOND</Link>
    <Link to="/third">THIRD</Link>
    <Link to="/fourth">FOURTH</Link>
  </nav>
  <div>
    <Route path="/">
      <Zero />
    </Route>
    <Route path="/first">
      <First />
    </Route>
    <Route path="/second" component={Second} />
    <Route path="/third" component={Third} />
    <Route path="/fourth" component={Fourth} />
  </div>
</Router>
