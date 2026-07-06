# 2026 여름방학 동서대 멘토링 계획

## 개요
- 대상: Python 기초 가능, HTML/JS 미경험자
- 주제: 프론트엔드 구축 + 백엔드 구축 + 웹 통신
- 기간: 8주 (주 1회, 회당 2~3시간 가정)
- 목표: 8주 끝에 프론트(HTML/CSS/JS) + 백엔드(Python, FastAPI or Flask) + DB 연동한 미니 풀스택 프로젝트 완성 및 배포

## 스택 선택
- 백엔드: Python + FastAPI (Python 기초자 대상이라 익숙한 언어 유지, 자동 문서화(Swagger)로 웹 통신 이해에 유리)
- DB: SQLite (설치 부담 없음)
- 프론트: 순수 HTML/CSS/JS (프레임워크 없이 기본기 다지기 우선)
- 배포: Render 또는 PythonAnywhere (무료 티어)

---

## Week 1 — 웹 동작 원리 + HTML 기초
- 목표: 브라우저-서버 통신 큰 그림 이해, HTML로 정적 페이지 작성
- 내용:
  - 웹 동작 원리: 클라이언트/서버, 요청-응답, URL 구조
  - HTML 기본 태그: div, span, h1~h6, p, a, img, ul/li, form, input, button
  - 시맨틱 태그 소개 (header, nav, main, footer)
- 실습: 자기소개 페이지 정적 HTML로 제작
- 과제: 이력서/포트폴리오 형태 HTML 페이지 완성

## Week 2 — CSS 기초 + 레이아웃
- 목표: 스타일링과 레이아웃 기본기
- 내용:
  - 선택자, box model, display(block/inline/flex)
  - Flexbox로 레이아웃 잡기
  - 반응형 기초 (media query 맛보기)
- 실습: Week1 페이지에 CSS 적용, 카드형 레이아웃 만들기
- 과제: flexbox로 3단 카드 레이아웃 구현

## Week 3 — JS 기초 + DOM 조작
- 목표: JS 문법과 DOM 조작으로 페이지에 동적 요소 추가
- 내용:
  - 변수, 함수, 조건문, 반복문 (Python과 비교하며 설명)
  - DOM 선택 (querySelector), 이벤트 리스너 (click, input)
  - 요소 생성/삭제, textContent/innerHTML
- 실습: 버튼 클릭 시 리스트 추가/삭제되는 To-Do 페이지 (프론트만, 서버 없음)
- 과제: To-Do 앱에 완료 체크, 삭제 기능 추가

## Week 4 — 웹 통신 기초 (HTTP, JSON, fetch)
- 목표: 프론트-백엔드 통신 원리 이해
- 내용:
  - HTTP 메서드 (GET/POST/PUT/DELETE), 상태 코드
  - JSON 구조와 Python dict 비교
  - fetch API로 비동기 요청 (then/async-await)
  - 공개 API(예: JSONPlaceholder)로 GET 요청 실습
- 실습: 공개 API 데이터를 fetch로 받아와 화면에 렌더링
- 과제: 검색창 만들어 API 결과 필터링해서 표시

## Week 5 — 백엔드 기초 (FastAPI)
- 목표: Python으로 API 서버 구축
- 내용:
  - FastAPI 설치, 기본 라우팅 (GET/POST)
  - Pydantic으로 요청/응답 모델 정의
  - Swagger UI로 API 테스트
  - CORS 개념과 설정 (프론트-백 다른 origin 통신 문제 해결)
- 실습: To-Do 항목 CRUD API 서버 구현 (메모리 저장)
- 과제: Week3 To-Do 프론트를 이 API와 fetch로 연동

## Week 6 — DB 연동
- 목표: 데이터 영속화
- 내용:
  - SQLite 기본, SQL 기초 (SELECT/INSERT/UPDATE/DELETE)
  - SQLAlchemy ORM으로 모델 정의, FastAPI와 연결
  - 실제 CRUD를 DB 기반으로 전환
- 실습: To-Do API를 메모리 → SQLite로 전환
- 과제: 데이터 모델에 필드 추가 (마감일, 우선순위 등) 하고 API 확장

## Week 7 — 풀스택 통합 프로젝트 (제작 시작)
- 목표: 지금까지 배운 것 통합해 자기 프로젝트 시작
- 내용:
  - 프로젝트 주제 정하기 (예: 가계부, 습관 트래커, 게시판 등 개인화)
  - 프론트 화면 설계, API 명세 설계 (라우트/요청/응답 구조)
  - 프론트-백 연동 작업 진행
- 실습: 각자 프로젝트 뼈대 구현 (최소 1개 CRUD 기능 동작)
- 과제: 남은 기능 구현 + 에러 처리 (try/except, 프론트 유효성 검사)

## Week 8 — 프로젝트 완성 + 배포 + 발표
- 목표: 프로젝트 마무리, 배포까지 경험, 발표로 정리
- 내용:
  - 배포 (Render 무료 플랜에 FastAPI 배포, 정적 프론트는 같이 서빙 or GitHub Pages)
  - 환경 변수, 기본 보안 유의사항 (input validation, CORS 재점검)
  - 최종 점검 및 버그 픽스
- 실습: 배포 완료, 실제 URL로 접속 테스트
- 과제/마무리: 각자 프로젝트 발표 (5분), 배운 점/어려웠던 점 공유

---

## 진행 팁
- 매주 시작 전 지난주 과제 5~10분 리뷰 후 진행
- Python 아는 대상이므로 JS 설명 시 Python과 1:1 비교로 진입장벽 낮추기
- Week4 전까지는 프론트만, Week5부터 백엔드 등장 — "왜 서버가 필요한가" 체감하게 순서 설계
- 실습 코드는 매주 깃 저장소나 폴더로 버전 관리 권장
