# Week 0 — 멘토링 시작 전 사전 준비

멘토링 시작 전, 각자 아래 내용을 미리 준비/점검합니다. Week1부터는 이것이 다 됐다는 전제로 진행합니다.

## 0. 목표
- 개발 환경(Python, VSCode, 브라우저, Git) 세팅 완료
- 터미널 기본 명령어 익숙해지기
- Python 기초 자가진단으로 실력 확인

---

## 1. 개발 환경 설치

| 항목 | 확인 방법 | 비고 |
|---|---|---|
| Python 3.9+ | 터미널에 `python3 --version` | [python.org](https://python.org) 에서 설치 |
| Node.js 18+ | 터미널에 `node --version` | [nodejs.org](https://nodejs.org) LTS 버전 설치 (JS 실행용) |
| VSCode | 실행 확인 | [code.visualstudio.com](https://code.visualstudio.com) |
| VSCode 확장 | Python, Live Server | 확장 탭에서 검색 후 설치 |
| 브라우저 | Chrome 최신 버전 | 개발자도구(F12) 열리는지 확인 |
| Git | 터미널에 `git --version` | [git-scm.com](https://git-scm.com) |
| GitHub 계정 | 로그인 가능 여부 | 없으면 [github.com](https://github.com) 가입 |

설치 후 `SOURCE/env_check.py`를 실행해서 환경을 점검하세요.

```bash
python3 SOURCE/env_check.py
```

---

## 2. 터미널 기본 명령어

앞으로 서버 실행, 폴더 이동 등에 계속 사용합니다. 아래 명령어를 눈에 익혀두세요.

| 명령어 | 의미 |
|---|---|
| `pwd` | 현재 위치 확인 |
| `ls` (Windows: `dir`) | 현재 폴더 파일 목록 |
| `cd 폴더명` | 폴더 이동 |
| `cd ..` | 상위 폴더로 이동 |
| `mkdir 이름` | 폴더 생성 |
| `python3 파일명.py` | 파이썬 파일 실행 |

---

## 3. Git / GitHub 기초 개념

지금 당장 다 사용하지 못해도 됩니다. 아래 흐름만 이해하고 오세요.

1. `git clone <주소>` — 원격 저장소 내려받기
2. `git add .` — 변경사항 스테이징
3. `git commit -m "메시지"` — 커밋(저장 지점 생성)
4. `git push` — 원격 저장소에 반영

Week8에 배포할 때 실제로 사용합니다.

---

## 4. Python 기초 자가진단

`SOURCE/python_selfcheck.py` 파일 열어서 TODO 부분 채우고 실행.

```bash
python3 SOURCE/python_selfcheck.py
```

`모두 통과! Week1 준비 완료.` 문구가 뜨면 완료입니다. 막히는 부분이 있으면 멘토링 시작 전 미리 질문하세요.

다루는 개념:
- 변수와 자료형 (str, int, bool)
- 조건문 (if/elif/else)
- 반복문 (for)
- 함수 정의와 반환값
- 리스트 순회
- 문자열 다루기 (split)
- 클래스 기초 (`__init__`, 메서드, 속성)

---

## 5. JS 맛보기 자가진단

JS는 Week3부터 본격적으로 배웁니다. Week0에서는 딱 문법 느낌만 미리 잡는 용도입니다.
`SOURCE/js_selfcheck.js` 열어서 TODO 채우고 실행.

```bash
node SOURCE/js_selfcheck.js
```

`모두 통과! JS 감 잡기 완료.` 뜨면 완료입니다. 파일 안 주석에 Python이랑 어떻게 다른지 한 줄씩 비교해 써놨으니 그것을 보면서 채우면 됩니다. 안 풀려도 괜찮습니다 — Week3에서 처음부터 다시 다룹니다. 그냥 사전 노출용입니다.

다루는 개념 (Python 대비):
- 변수 선언 (`let`/`const` vs 그냥 대입)
- 비교 연산자 (`===` vs `==`)
- 템플릿 리터럴 (`` `${name}` `` vs f-string)
- 배열 순회 (`for (;;)` + `.length` vs `for ... in` + `len()`)
- 문자열 분리 (`.split()`은 Python과 거의 동일)
- 조건문 (`else if` vs `elif`)
- 클래스 (`this` vs `self`, `constructor()` vs `__init__`)

---

## 6. 사전 준비 체크리스트

- [ ] Python 3.9 이상 설치, `env_check.py` 통과
- [ ] Node.js 설치, `node --version` 확인
- [ ] VSCode + Python/Live Server 확장 설치
- [ ] Git 설치, GitHub 계정 보유
- [ ] 터미널에서 폴더 이동/파일 실행 가능
- [ ] `python_selfcheck.py` 전체 통과
- [ ] `js_selfcheck.js` 전체 통과 (안 되면 표시만 해두고 넘어가도 됩니다)

---

## 7. 자주 발생하는 설치 에러

- `python3: command not found` → Windows는 `python` 명령어로 시도, 설치 시 "Add to PATH" 체크 여부 확인
- `pip: command not found` → Python 재설치 시 pip 포함 옵션 확인, 또는 `python3 -m ensurepip`
- `node: command not found` → nodejs.org에서 LTS 버전 재설치, 터미널 재시작
- Git 설치 후 터미널 재시작해도 인식 안 되면 재부팅
