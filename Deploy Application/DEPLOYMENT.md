# 배포 가이드 (Deployment Guide)

이 문서는 산그린 펜션 웹사이트를 실제 운영 환경에 배포하는 방법을 안내합니다.

## 목차

1. [배포 전 체크리스트](#배포-전-체크리스트)
2. [Netlify 배포](#netlify-배포)
3. [Vercel 배포](#vercel-배포)
4. [GitHub Pages 배포](#github-pages-배포)
5. [커스텀 도메인 설정](#커스텀-도메인-설정)
6. [문제 해결](#문제-해결)

## 배포 전 체크리스트

배포하기 전에 다음 사항들을 확인하세요:

- [ ] 모든 이미지가 올바르게 로드되는지 확인
- [ ] 예약 모달이 정상 작동하는지 확인
- [ ] 이미지 슬라이더가 자동으로 넘어가는지 확인
- [ ] 모바일/태블릿에서 레이아웃이 올바른지 확인
- [ ] 연락처 정보가 정확한지 확인
- [ ] 로딩 화면이 표시되는지 확인

### 로컬 빌드 테스트

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 결과물 미리보기 (선택사항)
npx serve dist
```

## Netlify 배포

가장 간단하고 추천하는 배포 방법입니다.

### 방법 1: Git을 통한 배포 (추천)

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Netlify에 배포**
   - [Netlify](https://app.netlify.com) 접속 및 로그인
   - "Add new site" → "Import an existing project" 클릭
   - GitHub 저장소 선택
   - 빌드 설정은 자동으로 감지됩니다 (netlify.toml 파일 사용)
   - "Deploy site" 클릭

3. **배포 완료**
   - 몇 분 내로 사이트가 배포됩니다
   - 자동으로 HTTPS가 적용됩니다
   - 고유 URL이 생성됩니다 (예: `random-name-123.netlify.app`)

### 방법 2: 드래그 앤 드롭 배포

1. 로컬에서 빌드
   ```bash
   npm run build
   ```

2. [Netlify Drop](https://app.netlify.com/drop) 접속

3. `dist` 폴더를 드래그 앤 드롭

## Vercel 배포

빠르고 안정적인 또 다른 배포 옵션입니다.

### Git을 통한 배포

1. **GitHub 저장소 푸시** (위의 Netlify 섹션 참조)

2. **Vercel에 배포**
   - [Vercel](https://vercel.com) 접속 및 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - 빌드 설정이 자동 감지됩니다
   - "Deploy" 클릭

3. **배포 완료**
   - 자동으로 HTTPS 적용
   - 고유 URL 생성 (예: `project-name.vercel.app`)

## GitHub Pages 배포

무료로 GitHub에서 호스팅할 수 있습니다.

### 설정

1. **package.json에 스크립트 추가**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && npx gh-pages -d dist"
     }
   }
   ```

2. **gh-pages 패키지 설치**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **배포 실행**
   ```bash
   npm run deploy
   ```

4. **GitHub 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: gh-pages branch 선택
   - Save 클릭

5. **사이트 접속**
   - `https://your-username.github.io/repository-name`

## 커스텀 도메인 설정

### Netlify에서 커스텀 도메인 설정

1. Netlify 대시보드 → Site settings → Domain management
2. "Add custom domain" 클릭
3. 도메인 입력 (예: `sangreen.com`)
4. DNS 설정을 안내에 따라 변경:
   ```
   A Record: @ → 75.2.60.5
   CNAME: www → your-site.netlify.app
   ```
5. SSL/TLS 인증서 자동 발급 (Let's Encrypt)

### Vercel에서 커스텀 도메인 설정

1. Vercel 프로젝트 → Settings → Domains
2. 도메인 입력
3. DNS 레코드 설정:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```
4. SSL 자동 적용

## 환경 변수 설정 (선택사항)

배포 플랫폼에서 환경 변수를 설정하려면:

### Netlify
- Site settings → Environment variables
- `.env.example` 파일 참조하여 변수 추가

### Vercel
- Project Settings → Environment Variables
- `.env.example` 파일 참조하여 변수 추가

## 성능 최적화

배포 후 성능을 개선하려면:

1. **이미지 최적화**
   - 이미지를 WebP 형식으로 변환
   - 적절한 크기로 리사이징

2. **CDN 활용**
   - Netlify와 Vercel은 자동으로 CDN 제공
   - 추가 설정 불필요

3. **캐싱 설정**
   - `netlify.toml` 또는 `vercel.json`에 이미 설정됨
   - 정적 자산은 1년간 캐싱

## 모니터링 및 분석

### Google Analytics 추가 (선택사항)

`index.html`에 Google Analytics 코드 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 문제 해결

### 이미지가 로드되지 않는 경우

- Figma 에셋이 올바르게 임포트되었는지 확인
- 빌드 로그에서 에러 메시지 확인
- 이미지 경로가 정확한지 확인

### 404 에러 발생

- SPA 라우팅 설정 확인
- `netlify.toml` 또는 `vercel.json`의 redirect 설정 확인

### 빌드 실패

```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 로그 확인
# 의존성 문제일 경우
npm install

# 캐시 제거 후 재빌드
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### 폰트가 로드되지 않는 경우

- Google Fonts CDN 연결 확인
- `fonts.css` 파일이 올바르게 임포트되었는지 확인
- 브라우저 콘솔에서 네트워크 에러 확인

## 유지보수

### 정기 업데이트

```bash
# 의존성 업데이트 확인
npm outdated

# 업데이트 (주의: 메이저 버전 변경 전 테스트 필수)
npm update

# 보안 취약점 확인
npm audit

# 자동 수정
npm audit fix
```

### 백업

- Git 저장소를 정기적으로 백업
- 중요한 변경 전에는 새 브랜치 생성
- 프로덕션 배포 전에 스테이징 환경에서 테스트

## 지원

문제가 발생하면:

1. [GitHub Issues](https://github.com/your-repo/issues) 확인
2. [Netlify 문서](https://docs.netlify.com)
3. [Vercel 문서](https://vercel.com/docs)
4. 개발자에게 문의: sidezzz@naver.com

---

**배포 성공을 기원합니다! 🚀**
