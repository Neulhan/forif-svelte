import App from "./5.1.Props.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
