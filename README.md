# 찾는다

시민이 공개 자료를 바탕으로 사건을 살펴보는 프로젝트의 모집 안내 웹사이트입니다. 모집 정보와 활동 방식, 운영 원칙을 소개합니다.

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## 시작하기

필요한 패키지를 설치합니다.

```bash
pnpm install
```

개발 서버를 실행합니다.

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 빌드 및 실행

프로덕션 빌드를 생성합니다.

```bash
pnpm build
```

빌드된 사이트를 실행합니다.

```bash
pnpm start
```

## 프로젝트 구조

- `app/page.tsx`: 모집 사이트 페이지와 콘텐츠
- `app/globals.css`: 전역 스타일과 반응형 레이아웃
- `app/layout.tsx`: 앱 레이아웃과 페이지 메타데이터
