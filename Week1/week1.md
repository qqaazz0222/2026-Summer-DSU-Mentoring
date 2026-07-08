---
marp: true
theme: dongseo-theme
paginate: true
---

<!-- _class: title -->

# Week 1
## 웹 동작 원리 + HTML 기초

2026 여름방학 동서대학교 소프트웨어전공 멘토링

---

# Week 1
## 목표

<div class="box">

- 브라우저-서버 통신 큰 그림 이해
- HTML로 정적 페이지 구조 작성 가능

</div>

---

# 1. 웹은 어떻게 동작하나
## 요청 / 응답

```
[브라우저(클라이언트)]  --- 요청(Request) --->  [서버]
[브라우저(클라이언트)]  <--- 응답(Response) ---  [서버]
```

- 주소창에 URL 입력 → 브라우저가 서버에 "이 페이지 주세요" 요청
- 서버가 HTML(+CSS/JS/이미지)을 응답으로 전송
- 브라우저가 HTML을 해석해 화면에 그림 (렌더링)

> Week1~2는 서버 없이 로컬 HTML 파일을 브라우저로 직접 열어 확인. 서버는 Week4~5에서.

---

# 1. 웹은 어떻게 동작하나
## URL 구조

```
https://example.com/products?id=3
   │        │           │      │
프로토콜   도메인       경로   쿼리(파라미터)
```

---

# 2. HTML 문서 기본 구조
## 기본 뼈대

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>페이지 제목</title>
  </head>
  <body>
    <!-- 화면에 보이는 내용은 전부 여기 -->
  </body>
</html>
```

---

# 2. HTML 문서 기본 구조
## 태그별 역할

| 태그 | 역할 |
|---|---|
| `<!DOCTYPE html>` | HTML5 문서 선언, 항상 맨 위 1줄 |
| `<html>` | 문서 전체를 감싸는 최상위 태그 |
| `<head>` | 화면에 안 보이는 메타정보 (제목, 인코딩) |
| `<body>` | 실제 화면에 보이는 내용 |

---

# 3. 기본 태그 정리
## 자주 쓰는 태그

| 태그 | 용도 |
|---|---|
| `<h1>` ~ `<h6>` | 제목 (숫자 작을수록 큼, h1은 보통 1번) |
| `<p>` | 문단 |
| `<a href="...">` | 링크 |
| `<img src alt>` | 이미지 (alt = 접근성/SEO 필수) |
| `<ul>`/`<ol>` + `<li>` | 순서 없는/있는 목록 |
| `<div>` / `<span>` | 의미 없는 블록/인라인 구획 (레이아웃용) |
| `<form>` / `<input>` / `<button>` | 입력 양식, 입력창, 버튼 |

`div`/`span`은 레이아웃용 빈 상자 — Week2 CSS에서 본격 활용.
실습: `SOURCE/01_basic_tags.html`

---

# 4. 시맨틱 태그
## 의미 있는 구역 나누기

`div`만 쓰면 코드가 뭘 뜻하는지 알기 어려움 → 의미 있는 태그로 가독성/접근성 향상

| 태그 | 의미 |
|---|---|
| `<header>` | 페이지/섹션 상단 (로고, 제목) |
| `<nav>` | 내비게이션(메뉴) 영역 |
| `<main>` | 페이지 핵심 콘텐츠 (문서당 1번) |
| `<section>` | 주제별 구획 |
| `<article>` | 독립적으로 의미 있는 콘텐츠 (게시글 등) |
| `<footer>` | 페이지/섹션 하단 (저작권, 연락처) |

실습: `SOURCE/02_semantic_layout.html`

---

# 5. 실습 & 과제
## 실습 순서

1. `SOURCE/01_basic_tags.html` 브라우저로 열어 태그별 결과 확인 (Live Server 추천)
2. `SOURCE/02_semantic_layout.html` 로 시맨틱 구조 확인
3. `SOURCE/03_self_intro_example.html` 참고해서 본인 자기소개 페이지 작성

---

# 5. 실습 & 과제
## 과제: 자기소개/이력서 페이지

<div class="box">

- [ ] `h1`으로 이름/제목
- [ ] `img`로 사진 또는 아이콘 (alt 텍스트 필수)
- [ ] `p`로 소개 문단 2개 이상
- [ ] `ul`/`li`로 기술 스택 또는 관심사 목록
- [ ] `a`로 GitHub/이메일 등 링크
- [ ] `header`/`main`/`footer` 로 구조 나누기
- [ ] `form`으로 간단한 연락처 입력창 (동작 안 해도 됨, 마크업만)

</div>

CSS는 아직 안 해도 됨 — Week2에서 스타일링. 이번 주는 구조/마크업 집중.

---

<!-- _class: title -->

# 수고했습니다
## 다음 주 Week2에서 만나요

CSS 기초 + 레이아웃 (Flexbox)로 이어집니다.
