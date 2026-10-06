# 박미현 프론트엔드 포트폴리오

바닐라 HTML, CSS, JavaScript로 작성된 단일 페이지 포트폴리오.

- 배포 주소: https://bangmim.github.io/my-frontend-portfolio/
- 소스: `index.html` (스타일과 스크립트 모두 인라인)

## 구조

```
.
├── index.html                  단일 페이지
├── img/                        스크린샷 이미지
├── .nojekyll                   GitHub Pages의 Jekyll 처리 비활성화
└── .github/workflows/deploy.yml  main 푸시 시 gh-pages 자동 배포
```

## 로컬에서 미리보기

빌드 과정이 없으므로 아무 정적 서버로 띄우면 됩니다.

```bash
# 예: npx 간이 서버
npx serve .
# 또는
python3 -m http.server 8000
```

## 색 수정

`index.html` 상단 `:root`에서 CSS 변수 한 곳만 바꾸면 전역 반영됩니다.

```css
:root{
  --blue:#2338ff;    /* 포인트 색 */
  --yellow:#ffe100;  /* 형광펜 강조색 */
  --ink:#0e1330;     /* 본문 색 */
  ...
}
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 `gh-pages` 브랜치로 자동 배포합니다.

## 백업

이전 CRA(Create React App) 기반 구현은 `backup/cra-site` 브랜치에 보존되어 있습니다.
