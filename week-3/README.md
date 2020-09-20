# svelte-scss template

## how to start

```
npx degit neulhan/svelte-scss my-project-name

cd my-project-name

npm i

npm run dev
```

## SCSS 란?

CSS Preprocessor (CSS 전처리기)
전처리기(SCSS)로 작성하고 CSS로 컴파일해서 동작시키는 거죠.

SCSS의 문법이나 자세한 내용은 https://medium.com/@jinminkim_50502/css-preprocessor-sass-scss-25dc8329f867

neulhan/svelte-scss를 템플릿으로 생성하면 기본적인 세팅이 완료되어있다.

## npm dependencies

- svelte
- svelte-preprocess
- node-sass

## svelte 프로젝트에서 사용

```scss
<style lang="scss">
  @import "../scss/_definition.scss";
  .container {
    width: 100%;
    min-height: 100%;
    @include custom-flex(center, center);
    p {
      font-size: 124px;
      font-weight: 900;
    }
  }
</style>
```

## 용도

- svelte 내부 style에서 scss 를 사용할 수 있는 것이 주 용도이다.
- 그 밖에 몇가지 세팅을 추가
  - Noto Sans KR 웹폰트
  - 커스텀 css 초기화 코드
  - scss mixin 및 변수들
  - 깔끔한 첫 페이지
  - 커스텀 favicon 🔨(망치?)

# study

## 3.1

```


```
