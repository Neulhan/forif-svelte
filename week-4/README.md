# 4주차 내용 및 과제

## 1. Life Cycle

프론트엔드 프레임워크라면 꼭 가지고 있어야 할 것들 중 하나.
각각의 컴포넌트는 생성, 소멸에 이르기 까지 각각의 단계들을 지나는데 이 cycle 을 컴포넌트 라이프사이클 이라고 부른다.

Svelte 는 다른 프론트엔드 프레임워크에 비해 이 라이프 사이클이 간소화 되어있는 편이다.

<table>
    <tr>
        <td>beforeUpdate -></td>
        <td>onMount -></td>
        <td>afterUpdate -></td>
        <td>onDestroy</td>
    </tr>
</table>

```html
`
<script>
  import { beforeUpdate, onMount, afterUpdate, onDestroy } from "svelte";

  let count = 0;

  const addCount = () => {
    count++;
  };

  beforeUpdate(() => {
    console.log("[FIRST] BEFORE UPDATE");
  });

  onMount(() => {
    console.log("[FIRST] ON MOUNT");
  });

  afterUpdate(() => {
    console.log("[FIRST] AFTER UPDATE");
  });

  onDestroy(() => {
    console.log("[FIRST] ON DESTROY");
  });
</script>

<h1>Life Cycle</h1>
<button on:click="{addCount}">{count}</button>
```

## 2. async & await

프로그래밍에서는 흔히 동기와 비동기 처리가 존재한다.
이 개념을 간단하게 이해하기 위해 맥도날드를 예시로 들겠다.

### 1번 상황

주문대 | 동현, 우진, 효진, 강민

---

앞에 서있는 사람이 종업원에게 메뉴를 주문한다.  
그러면 종업원은 그 메뉴가 나올 때까지 기다렸다가 메뉴를 손님에게 넘긴다.  
앞에 사람이 메뉴를 받고나면 다음 사람이 주문을 시작한다.

### 2번 상황

주문대 | 강민, 효진, 우진, 동현

---

앞에 서있는 사람이 종업원에게 메뉴를 주문한다.
그러면 종업원은 그 메뉴를 준비하라고 지시한 후, 다음 사람에게서 메뉴를 주문받는다.  
각 메뉴는 처리가 완료되는 대로 손님에게 넘겨진다.

### 정리

1번 상황이 바로 동기적 처리, 2번 상황이 비동기적 처리이다.
비동기적 처리는 앞에서 보았듯이, 특정한 것을 요청하고, 그에 대한 응답이 즉각적이지 않은 경우에 매우 유용하다.

그래서 일반적으로 CPU bound 작업을 처리할 때는 동기적인 프로그래밍이 유리하고, I/O bound 작업을 처리할 때는 비동기적인 프로그래밍이 유리하다.  
(물론 현대 컴퓨터의 빠른 발달로, 다중 쓰레드를 쓰는 경우 CPU bound 작업에도 비동기적인 처리를 하기도 한다.)

현재 스터디에서 쓰고 있는 javascript는 "비동기 위에서 태어난 프로그래밍 언어" 라는 말이 있을 정도로 비동기와 연관이 깊은 프로그래밍 언어이다.

코드를 통한 예시는 5장에서 설명하겠다.

## 3. SSR vs CSR

SSR 은 서버 사이드 렌더링의 약자이고 CSR은 클라이언트 사이드 렌더링의 약자이다.  
정말 정직하게 단어의 뜻 그대로 SSR은 서버에서 렌더링을 마친 후, 클라이언트로 보내주는 방식이고, CSR은 서버에서 받은 값을 통해 클라이언트에서 렌더링을 하는 방식이다.

```python
# Django
def homepage(request):
    return render(request, "home.html")
```

서버측에서 구동하는 django 어플리케이션 예시. render 함수를 사용한다.

```javascript
// React
ReactDOM.render(<App />, document.getElementById("root"));
```

클라이언트 측에서 구동하는 React 어플리케이션. 마찬가지로 render 메서드를 통해 웹을 그려낸다.

```javascript
// Svelte
const app = new App({
  target: document.body,
});

export default app;
```

다른 예시처럼 render 라는 이름이 직접 쓰이지는 않았지만 비슷한 역할을 하는 svelte 코드이다.

---

좀더 이해하기 쉽게 풀어보자.  
렌더링이라는 단어는 웹 측면에서 꽤 폭넓게(다양한 의미로) 쓰이는 단어 중 하나이지만 그들을 관통하는 핵심 의미는 `그리기`이다.

간단하게 이야기해서, 서버에서 다 그린다음에 클라이언트로 넘겨주는 방식이 SSR, 서버에서 `데이터만 들고와서` 클라이언트에서 그리는 방식이 CSR이라고 볼 수 있다.

## 4. API Call

위에서 코드한 줄 안쓰고 두 장을 넘어온 이유는 바로 이번 장 때문이다.

API(Application Programming Interface)란 한마디로 `운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만들어둔 인터페이스` 이다.

인터페이스가 들어간 다른 단어를 한 번 살펴보면 이해가 빨라질 것이다.  
UI(User Interface) 는 사용자(User)가 컴퓨터, 시스템, 도구 등에서 일어나는 상호작용(interaction)을 매개해주는 것이다.

User Interface 를 통해서 사용자는 컴퓨터와 간접적으로 상호작용을 할 수 있게 된다.

`사용자 <-> 프로그램 => UI(User Interface)`

`프로그램 <-> 프로그램 => API (Application Programming Interface)`

그렇다. API 는 다시 말해 프로그램과 프로그램이 매개되는 방식이다.

그러한 API 방식 중에서 이번에 다뤄볼 친구는 바로 REST API 이다.
REST API 는 웹(HTTP) 프로토콜에서 동작하는 API 구조이다.
더 설명하면 오히려 헷갈릴 수 있으니 예시를 직접 다뤄보자.

일단 블로그 프로그램 다운로드  
[https://github.com/Neulhan/blog-program](https://github.com/Neulhan/blog-program)

axios 는 서버에 요청을 보낼 수 있게 도와주는 라이브러리이다.

```
npm install axios
```

```javascript
import axios from "axios";

const res = axios.get("http://127.0.0.1:8080/posts/");
```

## 5. Routing

3주차에 포함

## 실습 : BLOG 만들기

블로그를 만들어봅시다.

- CRUD 중 CREATE, READ 를 해봅시다.
- 블로그의 글 리스트 페이지(READ)
- 블로그의 글 상세 페이지(READ)
- 블로그에 글 쓰기 페이지(CREATE)

매우 EASY 하지만 프론트엔드 개발자의 길을 걷고 있는데 이쁘지 않게 만들 수는 없겠죠?
SNS에 올려서 자랑할 수 있을 정도로 만들어보는게 목표입니다.
