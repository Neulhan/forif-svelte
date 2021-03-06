# 1주차 스터디

## 1.1 Variable (변수)

```html
<script>
  let firstVariable = "신한결";
</script>

<style></style>

<div class="container">
  <section>
    <h1>#1 variable</h1>
    <p>{firstVariable + '님, 안녕하세요'}</p>
    <p>{firstVariable}님, 안녕하세요</p>
  </section>
</div>
```

`{}`로 감싸진 내부는 javascript 문법과 선언된 변수들 사용 가능

## 1.2 Attribute (속성)

```html
<script>
  const googleURL = "https://www.google.com";
  const href = "https://www.naver.com";
</script>

<div class="container">
  <section>
    <h1>#2 attribute</h1>
    <a href="{googleURL}">구글 링크</a>
    <a {href}>네이버 링크</a>
  </section>
</div>
```

첫 번째 예시처럼 사용할 때 `" "`는 선택사항  
변수명과 attribute 이름이 같다면 2번째 예시처럼 생략 가능

## 1.3 Class & Style

```html
<script>
  let color = "red";

  let yellow = true;
</script>

<style>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .yellow {
    color: yellow;
  }
  :global(.yellow) {
    color: hotpink;
  }
</style>

<div class="container">
  <section>
    <h1>#3 class</h1>
    <div class={color}>파란색</div>
    <div class:blue={color === 'red'}>파란색</div>
    <div class:yellow>파란색</div>
  </section>
</div>

```

세 번째 예시처럼 주고 싶은 class 이름과 변수명이 같으면 생략가능

## 1.4 Component

```html
<script>
  import First from "./1.Variable.svelte";
  import Second from "./2.Attribute.svelte";
  import Third from "./3.ClassnStyle.svelte";
</script>

<First />
<Second />
<Third />
```

`import` 해온 컴포넌트의 이름은 대문자로 시작해야함

## 1.5 HTML

```html
<script>
  const aTag = "<a href='https://github.com/'>깃허브</a>";
</script>

<div class="container">
  <section>
    <h1>#5 HTML</h1>
    <div>{aTag}</div>
    <div>{@html aTag}</div>
  </section>
</div>
```

## 1.6 InputBinding

```html
<script>
  let text = "";
  let number = 0;
</script>

<div class="container">
  <section>
    <h1>#6 InputBinding</h1>

    <input type="text" bind:value="{text}" />
    <h1>{text}</h1>

    <input type="number" bind:value="{number}" />
    <h1>{number === undefined ? 0 : number}px</h1>
  </section>
</div>
```

# 1주차 스터디 과제

```
구글 폰트 사이트 클로닝 해오기
```

[https://fonts.google.com/](https://fonts.google.com/)
![](../image/스크린샷%202020-08-31%20오전%201.00.41.png)

### 필수 사항

- input 값을 각기 다른 폰트로 보여주는 기능 (실시간)
- 각기 다른 본인이 고른 8개의 예쁜 폰트 사용
- 웹 폰트 기능 사용

### 선택사항 (어렵다면 못해와도 되지만 해오면 굿)

- 폰트 크기 조절 기능 (우측 상단)
- 예쁜 css cloning (구글폰트 사이트와 동일하게)
