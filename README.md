# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 2️⃣ Git 설정

일관된 커밋 메시지 작성을 위해 템플릿을 설정합니다:

```bash
git config commit.template .gitmessage
```


### Git Flow

Git Flow는 **"개발(Develop)"**과 **"배포(Main/Master)"**를 철저히 분리하여 안정적인 소프트웨어 배포를 돕는 브랜치 전략.

#### 1. 두 개의 영구 브랜치 (Main & Develop)

이 두 브랜치는 프로젝트가 끝날 때까지 절대 삭제되지 않고 계속 유지.

  * **🔵 Main (Master):**
      * **"언제든 배포 가능한 상태"**.
      * 이곳의 코드는 실제 사용자가 사용 중인 버전과 100% 일치.
      * 직접 커밋하지 않고, Release나 Hotfix 브랜치를 통해서만 병합.
  * **🟡 Develop:**
      * **"다음 버전을 위한 개발 공간"**.
      * 모든 기능(Feature) 개발은 이곳에서 시작되어 이곳으로 돌아온다.
      * 어느 정도 기능이 모이면 배포(Release) 준비를 시작한다.

#### 2. 세 가지 임시 브랜치 (Feature, Release, Hotfix)

필요할 때 생성되고, 역할이 끝나면 **삭제**되는 브랜치.

##### ① 기능 개발 (Feature)

> **"새로운 기능을 만들자!"**

  * **흐름:** `develop`에서 생성 ➔ `develop`으로 병합
  * **사용법:**
    1.  `develop` 브랜치에서 `feature/로그인` 브랜치를 땁니다.
    2.  열심히 코드를 짜고 커밋합니다.
    3.  완성되면 `develop` 브랜치에 합치고(Merge), `feature` 브랜치는 삭제.
  * **명령어:**
    ```bash
    git flow feature start login
    git flow feature finish login
    ```

##### ② 배포 준비 (Release)

> **"기능 개발 끝! 이제 버전 1.0.0으로 내보낼 준비를 하자."**

  * **흐름:** `develop`에서 생성 ➔ `main`과 `develop` 양쪽으로 병합
  * **사용법:**
    1.  `develop`에 기능이 충분히 모이면 `release/v1.0.0` 브랜치를 땁니다.
    2.  여기서는 **새 기능 추가 절대 금지!** 오직 버그 수정이나 문서 작업, 버전 번호 변경만 합니다.
    3.  준비가 끝나면:
          * `main`으로 합치고 **v1.0.0 태그**를 붙입니다 (배포).
          * `develop`으로도 합칩니다 (수정 사항 반영).
  * **명령어:**
    ```bash
    git flow release start v1.0.0
    git flow release finish v1.0.0
    ```

##### ③ 긴급 수정 (Hotfix)

> **"으악! 운영 서버(Main)에 치명적인 버그가 터졌다!"**

  * **흐름:** `main`에서 생성 ➔ `main`과 `develop` 양쪽으로 병합
  * **특징:** `develop`을 거치지 않고 바로 배포판(`main`)에서 수정하는 유일한 브랜치.
  * **사용법:**
    1.  `main`에서 즉시 `hotfix/v1.0.1` 브랜치를 땁니다.
    2.  버그를 고칩니다.
    3.  `main`에 합쳐서 바로 배포하고(태그), `develop`에도 반영해 줍니다(다음 버전에 버그가 재발하지 않도록).
  * **명령어:**
    ```bash
    git flow hotfix start v1.0.1
    git flow hotfix finish v1.0.1
    ```
#### ⚡ 요약: Git Flow의 인생사

1.  **시작:** `develop`에서 개발 시작.
2.  **작업:** `feature` 만들어서 놀다가 `develop`으로 복귀.
3.  **배포 준비:** `develop`에서 `release` 만들어서 막바지 점검.
4.  **배포:** `release`를 `main`으로 보내고 태그 쾅\! (`develop`에도 반영)
5.  **사고 발생:** `main`에서 `hotfix` 만들어서 고치고 다시 `main`으로 복귀.

---