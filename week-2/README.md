# 2주차 스터디

## 2.1 Event Listener

```html
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
        <button on:click="{add}">+</button>
        <button on:click="{minus}">-</button>
      </article>

      <article class="scroll" on:scroll="{scrollNow}">
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

      <article class="mouse-move" on:mousemove="{mouseNow}">
        <div class="location">X: {client.x} Y; {client.y}</div>
      </article>
    </div>
  </section>
</div>
```

`on:이벤트이름={핸들러함수}` 를 통해서 이벤트를 할당 가능

## 2.2 Reactivity Declaration

```html
<script>
  let count = 0;
  $: double = count * 2;
</script>

<style>

</style>

<div class="container">
  <section>
    <h1>#2 Reactivity Declaration</h1>
    <p>{count}</p>
    <p>{double}</p>
    <button
      on:click={() => {
        count++;
      }}>
      +
    </button>
  </section>
</div>

```

`$` 문법을 통해 Vue 에서의 computed와 유사하게 사용이 가능  
반응형으로 변수를 선언

## 2.3 Reactivity Statements

```html
<script>
  let count = 0;
  $: double = count * 2;
  $: console.log(count);
  $: if (count >= 7) {
    alert("초과!");
    count = 0;
  }
  $: for (let i = 0; i < count; i++) {
    console.log("for", i);
  }
</script>

<style>

</style>

<div class="container">
  <section>
    <h1>#3 Reactivity Statements</h1>
    <p>{count}</p>
    <p>{double}</p>
    <button
      on:click={() => {
        count++;
      }}>
      +
    </button>
  </section>
</div>

```

`$` 뒤에 코드를 작성하면 해당 스코프 내에서 사용된 변수의 변화에 반응하여 동작함

## 2.4 Reactivity Array

```html
<script>
  let arr = [];
  let count = 0;

  $: {
    arr.push(count);
    // arr = arr;
    console.log(arr);
  }

  $: sum = arr.reduce((acc, crv) => acc + crv, 0);
  $: sub = arr.reduce((acc, crv) => acc - crv, 0);

  const add = () => {
    count++;
  };
</script>

<style></style>

<div class="container">
  <section>
    <h1>#4 Reactivity Array</h1>
    <p>{arr.join(' + ')} = {sum}</p>
    <p>{arr.join(' - ')} = {sub}</p>
    <button on:click="{add}">{count}</button>
  </section>
</div>
```

`Array`가 `push` 함수를 통해 변화한 경우에는 `$`가 감지를 못함  
이런 경우에는 해당 `Array` 재할당해주는 방식으로 사용해야함

## 2.5 Props

```html
<!-- 5.1.Props.svelte  -->
<script>
  import Child from "./5.2.Child.svelte";
</script>

<style>
  .wrapper {
    display: flex;
  }
</style>

<div class="container">
  <section>
    <h1>#5 Props</h1>
    <div class="wrapper">
      <Child />
      <Child color="white" />
      <Child backgroundColor="gold" />
      <Child color="white" backgroundColor="gold" />
    </div>
  </section>
</div>

<!-- 5.2.Child.svelte -->
<script>
  export let color;
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
  style="background-color: {backgroundColor}; color: {color};"
>
  안녕
</div>
```

부모 컴포넌트에서 자식컴포넌트를 호출하면서 `attribute` 주듯이 `props`를 선언할 수 있음  
자식 컴포넌트에서는 `export` 를 통해서 해당 `props` 를 받을 수 있음

# 2주차 스터디 과제

```
60초 타이머 만들기 (물리)
```

![](../image/스크린샷%202020-08-31%20오후%2011.13.18.png)

### 필수 사항

- 디지털 시계 부분에 브라우저를 새로고침하면 0이되는 시간초 나타내는 숫자 판을 만들어주세요.
- 타이머 설정하기 부분에는 + 버튼과 - 버튼이 있습니다. 각 버튼을 누르면 위에서 만든 디지털 시계 부분에 1초씩 추가 / 삭제 됩니다. 다만 0초 이상이어야 하고 60초 미만이어야 합니다.
- 시작 버튼이 있습니다. 시작을 누르면 시작 버튼과 + - 버튼은 disabled 상태가 되고, 시간초를 나타내는 부분이 1초에 1씩 감소합니다. 0이 되면 정지합니다. 정지되면 disabled가 풀립니다.
- 아날로그 타이머를 만들어보세요. 틀은 동그랗고 초침만 있으면 됩니다.
- 아날로그 타이머는 별도 컴포넌트로 분리해서 만들어보세요.
