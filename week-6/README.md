# svelte 스터디 마무리

길다면 길고 짧다면 짧은 svelte의 스터디가 이제 마무리되었습니다.

제가 현재 회사에서 일을 하고 있고, 다른 프로젝트들도 병행하는 것이 있다보니, 스벨트 스터디에 100%를 다했다고 하기에는 부족한 점이 많았던 것 같습니다.

그런 상황에서 다소 생소하고 새로운 기술을 배우는데 잘 따라와주신 여러분들께 너무 감사드립니다.

덕분에 처음 계획했던 부분까지의 내용을 제 때 잘 마무리 할 수 있었습니다.

그럼 지나온 내용들을 한 번 되돌아 보겠습니다.

## RECAP(복습)

### 1. javascript 데이터를 html template에 바인딩 하기

svelte는 자바스크립트 값을 html에 실시간으로 렌더링 할 수 있게 해줍니다.

- 태그 내부에 javascript 변수 바인딩 하기

```html
<p>{name}</p>
```

- attribute에 javascript 변수 바인딩 하기

```html
<a href="{homepage}">홈페이지 바로가기</a>
```

- class 바인딩 하기

```html
<div class:selected="{current === '김치'}">김치</div>
```

- value 바인딩 하기

```html
<input type="text" bind:value="{text}" />s
```

### 2. event handler 적용하기

```html
<button on:click="{handlerFunc}">클릭</button>
```

### 3. reactivity declaration (반응형 선언)

```javascript
let count = 0;
$: double = count * 2;
```

### 4. scss (css 전처리기)

```scss
.info {
  .name {
    color: $my-red-color;

    &:hover {
      background-color: #fafafa;
    }
  }
  .data {
    @include custom-flex(center, center);
  }
}
```

### 4. svelte forif

- for (each)

```
{#each foods as food}
    <p>{food}</p>
{/each}
```

- if/else

```
{#if food === '김치'}
    <div class="food red">{food}</div>
{:else if food === '블루레몬에이드'}
    <div class="food blue">{food}</div>
{:else}
    <div class="food">{food}</div>
{/if}
```

### 5. svelte store

- import store

```javascript
// store.js
import { writable } from "svelte/store";
```

- declare store

```javascript
// store.js
export const countStore = writable(0);
```

- subscribe

```javascript
import { countStore } from "./store";

let count;

countStore.subscribe((v) => {
  count = v;
});
```

- set

```javascript
import { countStore } from "./store";

const reset = () => {
  countStore.set(0);
};
```

- update

```javascript
import { countStore } from "./store";

const add = () => {
  countStore.update((v) => v + 1);
};

const sub = () => {
  countStore.update((v) => v - 1);
};
```

- store binding

```html
<script>
  import { countStore } from "./store";
</script>

<p>{$countStore}</p>
<input type="text" bind:value="{$countStore}" />
```

### 6. routing

- Router setting

```html
<script>
  import { Router, Route } from "svelte-routing";
</script>
<Router>
  <!-- "Route"를 통해 어떤 링크가 어떤 컴포넌트를 가리키는지 설정 가능  -->
  <Route path="/second" component="{Second}" />
  <Route path="/third" component="{Third}" />
</Router>
```

- Router Link

```html
<script>
  import { Link } from "svelte-routing";
</script>

<Link to="/home">홈으로 가기</Link>
```

- Router navigate

```html
<script>
  import { navigate } from "svelte-routing";

  navigate("/home");
</script>
```

### 7. Life cycle

```html
<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("로드 완료");
  });
</script>
```

### 8. async-await & API call

```html
<script>
  import axios from "axios";
  import { onMount } from "svelte";

  onMount(async () => {
    const res = await axios.get("http://endpoint.com");
  });
</script>
```

# 최종 목표

- 위의 내용들을 어느정도 숙지하고 상황에 맞게 사용할 수 있다.
- 혼자의 힘으로 (구글링, 강의자료 참고 가능) svelte TODO-LIST 를 만들어낼 수 있다.
- 혼자의 힘으로 (구글링, 강의자료 참고 가능) svelte Blog 를 만들어낼 수 있다.

위의 내용에 해당하지 않는 것이 있다면 해커톤 전까지 직접 다시 복습해보셔야 합니다.

그렇지 않으면 해커톤 참여할 때 할 수 있는 것들이 상당히 제한될 수 있어요.

# 해커톤 주제

해커톤은 1월 중 진행될 것으로 예상됩니다. 그 때 가서 정확한 주제가 정해지기는 하겠지만, 미리 한 번 아이디어를 생각해보면서 이런거 하면 어떨까? 같은 생각을 자주 해보시길 바랍니다.

> 한 학기 동안 수고 많으셨고, 이번 학기 마저 잘 마무리 하신 뒤에 해커톤 때 다시 봅시다!
