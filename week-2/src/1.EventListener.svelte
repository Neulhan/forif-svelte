<script>
  let count = 0;
  let scroll = 0;
  const client = {
    x: 0,
    y: 0,
  };
  const add = () => {
    count++;
  };
  const minus = () => {
    count--;
  };
  const scrollNow = (e) => {
    scroll = e.target.scrollTop;
  };

  const mouseNow = (e) => {
    client.x = e.clientX;
    client.y = e.clientY;
  };
</script>

<style>
  .wrapper {
    display: flex;
  }
  article {
    width: 200px;
    height: 200px;
  }
  .click {
    background-color: #fafafa;
  }
  .scroll {
    overflow: auto;
  }
  .scroll > span {
    color: red;
    font-weight: 700;
  }
  .mouse-move {
    background-color: #888;
  }
  .location {
    color: white;
  }
</style>

<div class="container">
  <section>
    <h1>#1. Event Listener</h1>

    <div class="wrapper">
      <article class="click">
        <p>{count}</p>
        <button on:click={add}>+</button>
        <button on:click={minus}>-</button>
      </article>

      <article class="scroll" on:scroll={scrollNow}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolores
        at aperiam ullam, quidem dignissimos inventore animi tempora eum amet in
        vel consequuntur totam quisquam sequi ipsum fugit qui itaque rerum
        assumenda praesentium possimus.
        <span>{scroll}</span>
        Repellendus accusamus odio commodi laudantium adipisci! Illum sunt
        placeat dignissimos, libero quidem nam ea suscipit aspernatur facere
        corrupti accusamus sit, nesciunt, voluptatem odit! Aliquid, sequi
        officia.
      </article>

      <article class="mouse-move" on:mousemove={mouseNow}>
        <div class="location">X: {client.x} Y; {client.y}</div>
      </article>
    </div>

  </section>
</div>
