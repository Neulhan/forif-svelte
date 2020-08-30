import App from "./6.InputBinding.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
