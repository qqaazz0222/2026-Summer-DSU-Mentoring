---
marp: true
theme: dongseo-theme
paginate: true
---

<!-- _class: title -->

# Week 0
## 멘토링 시작 전 사전 준비

2026 여름방학 동서대학교 소프트웨어전공 멘토링
프론트엔드 · 백엔드 · 웹 통신 8주 과정

---

# Week 0
## 목표

<div class="box">

- 개발 환경(Python, VSCode, 브라우저, Git) 세팅 완료
- 터미널 기본 명령어 익숙해지기
- Python 기초 자가진단으로 실력 확인

</div>

Week1부터는 이 세팅이 **다 되어있다는 전제**로 진행합니다.

---

# 8주 로드맵 미리보기
## 전체 커리큘럼 개요

- **주제**: 프론트엔드 + 백엔드 + 웹 통신
- **기간**: 8주 (주 1회, 회당 2~3시간)
- **목표**: 프론트(HTML/CSS/JS) + 백엔드(FastAPI) + DB 연동 미니 풀스택 프로젝트 완성 & 배포

**스택**: Python/FastAPI · SQLite · 순수 HTML/CSS/JS · GitHub Pages

---

# 8주 로드맵 미리보기
## 주차별 흐름

| 주차 | 내용 |
|---|---|
| W1~2 | HTML 기초, CSS/레이아웃 |
| W3 | JS 기초 + DOM 조작 (To-Do 프론트) |
| W4 | 웹 통신 (HTTP/JSON/fetch) |
| W5~6 | FastAPI 백엔드, DB 연동 |
| W7~8 | 풀스택 통합 프로젝트 + 배포 + 발표 |

---

# 1. 개발 환경 설치
## 설치 목록

| 항목 | 확인 방법 |
|---|---|
| Python 3.9+ | `python3 --version` |
| Node.js 18+ | `node --version` |
| VSCode + 확장(Python, Live Server) | 실행 확인 |
| 브라우저 (Chrome 최신) | 개발자도구(F12) 확인 |
| Git | `git --version` |
| GitHub 계정 | 로그인 가능 여부 |

---

# 1. 개발 환경 설치
## 환경 점검 스크립트

설치가 끝나면 점검 스크립트를 돌려서 확인합니다.

```bash
python3 SOURCE/env_check.py
```

`Week0/SOURCE/env_check.py` 실행 결과로 Python/Node/Git 등이
제대로 잡혀 있는지 한 번에 확인할 수 있습니다.

---

# 2. 터미널 기본 명령어
## 자주 쓸 명령어

| 명령어 | 의미 |
|---|---|
| `pwd` | 현재 위치 확인 |
| `ls` (Windows: `dir`) | 현재 폴더 파일 목록 |
| `cd 폴더명` | 폴더 이동 |
| `cd ..` | 상위 폴더로 이동 |
| `mkdir 이름` | 폴더 생성 |
| `python3 파일명.py` | 파이썬 파일 실행 |

앞으로 서버 실행, 폴더 이동에 계속 사용하니 눈에 익혀두세요.

---

# 3. Git / GitHub 기초 흐름
## 지금은 흐름만 이해하고 오기

```bash
git clone <주소>      # 원격 저장소 내려받기
git add .             # 변경사항 스테이징
git commit -m "메시지" # 커밋(저장 지점 생성)
git push              # 원격 저장소에 반영
```

Week8 배포 때 실제로 사용합니다. 지금 전부 못 다뤄도 괜찮습니다.

---

# 4. Python 기초 자가진단
## python_selfcheck.py

`SOURCE/python_selfcheck.py` 파일을 열어 TODO를 채우고 실행합니다.

```bash
python3 SOURCE/python_selfcheck.py
```

**다루는 개념**
변수/자료형 · 조건문 · 반복문 · 함수 · 리스트 순회 · 문자열 split · 클래스 기초

`모두 통과! Week1 준비 완료.` 문구가 뜨면 완료.
막히면 멘토링 시작 전 미리 질문하세요.

---

# 5. JS 맛보기 자가진단
## js_selfcheck.js

JS는 Week3부터 본격적으로 배우고, 지금은 **문법 느낌**만 잡습니다.

```bash
node SOURCE/js_selfcheck.js
```

**Python 대비 다루는 개념**
`let/const` · `===` vs `==` · 템플릿 리터럴 · 배열 순회 · `.split()` · `else if` · `this`/`constructor`

안 풀려도 괜찮음 — Week3에서 처음부터 다시 다룹니다.

---

# 참고: 앞으로 계속 나올 개념
## 웹 개발 큰 그림

```
[브라우저]  ←→  [프론트엔드: HTML/CSS/JS]
      │  (HTTP 요청/응답, JSON)
      ▼
[백엔드: FastAPI]  ←→  [DB: SQLite]
```

- 프론트엔드: 사용자가 보고 클릭하는 화면
- 백엔드: 화면 뒤 데이터 처리 서버 (Python/FastAPI)
- DB: 데이터 저장소, 서버가 읽고 씀

---

# 참고: 앞으로 계속 나올 개념
## 클라이언트-서버 & HTTP

| 용어 | 뜻 |
|---|---|
| 클라이언트 | 요청하는 쪽 (보통 브라우저) |
| 서버 | 요청받고 응답 주는 쪽 |
| HTTP | 요청/응답을 주고받는 규칙 |
| GET/POST/PUT/DELETE | 조회/생성/수정/삭제 |
| 200 / 400 / 404 / 500 | 성공 / 잘못된요청 / 없음 / 서버에러 |

Week4~5에서 실습하며 다시 다룹니다.

---

# 참고: 앞으로 계속 나올 개념
## JSON = Python dict

```json
{
  "id": 1,
  "title": "장보기",
  "done": false,
  "tags": ["집안일", "긴급"]
}
```

차이점: JSON은 `true`/`false`/`null`, Python은 `True`/`False`/`None`

---

# 사전 준비 체크리스트
## 이거 다 됐으면 준비 완료

<div class="box">

- [ ] Python 3.9 이상 설치, `env_check.py` 통과
- [ ] Node.js 설치, `node --version` 확인
- [ ] VSCode + Python/Live Server 확장 설치
- [ ] Git 설치, GitHub 계정 보유
- [ ] 터미널에서 폴더 이동/파일 실행 가능
- [ ] `python_selfcheck.py` 전체 통과
- [ ] `js_selfcheck.js` 전체 통과 (안 되면 표시만 해두고 넘어가도 OK)

</div>

---

# 사전 준비 체크리스트
## 자주 발생하는 설치 에러

| 증상 | 해결 |
|---|---|
| `python3: command not found` | Windows는 `python`으로 시도, 설치 시 "Add to PATH" 확인 |
| `pip: command not found` | `python3 -m ensurepip` |
| `node: command not found` | nodejs.org LTS 재설치 후 터미널 재시작 |
| Git 인식 안 됨 | 터미널 재시작, 그래도 안 되면 재부팅 |

---

<!-- _class: title -->

# 준비 완료!
## 다음 주 Week1에서 만나요

웹 동작 원리 + HTML 기초부터 시작합니다.
질문은 언제든 멘토링 채널로.
