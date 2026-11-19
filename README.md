# 찾는다 모집 안내 사이트

`찾는다` 창립 멤버 모집과 프로젝트 활동을 소개하는 단일 페이지 웹사이트입니다. 공개 자료를 바탕으로 사건을 살펴보는 시민 프로젝트의 활동 방식, 운영 원칙, 한 달 활동 계획, 지원 안내를 제공합니다.

## 기술 스택

- Next.js 16 App Router와 React 19
- TypeScript
- Tailwind CSS 4 및 전역 CSS
- Framer Motion 애니메이션
- Lucide React 아이콘
- pnpm 12.3.4 (`package.json`의 `packageManager` 기준)

## 코드 구성 방식

- `app/page.tsx`에서 메뉴, 히어로, 소개, 활동 방식, 원칙, 일정, 모집 대상, 지원 안내를 하나의 페이지로 구성합니다.
- 페이지는 모바일 메뉴 상태와 Framer Motion 효과를 사용하므로 Client Component(`'use client'`)로 동작합니다.
- 메뉴, 모집 자격, 활동 방식 카드는 파일 상단의 배열로 관리하고 `map`으로 렌더링합니다. 지원서와 문의 링크는 `APPLY_FORM_URL`, `KAKAO_URL` 상수에서 관리합니다.
- `app/globals.css`에서 디자인 토큰, 타이포그래피, 카드와 섹션 스타일, 반응형 레이아웃을 관리합니다.
- `app/layout.tsx`에서 한국어 문서 언어, 페이지 메타데이터, 뷰포트 설정, 전역 CSS, 프로덕션 Analytics를 적용합니다.

## 폴더 구조

```text
.
├── app/
│   ├── globals.css       # 전역 디자인 토큰, 컴포넌트 스타일, 반응형 규칙
│   ├── layout.tsx        # 루트 레이아웃, 메타데이터, 뷰포트 설정
│   └── page.tsx          # 모집 사이트 페이지와 콘텐츠
├── components/
│   └── ui/
│       └── button.tsx    # 재사용 가능한 버튼 UI 컴포넌트
├── lib/
│   └── utils.ts          # className 병합 유틸리티(cn)
├── public/               # 히어로·아카이브 이미지와 아이콘 등 정적 파일
├── components.json       # shadcn/ui 설정
├── next.config.mjs       # Next.js 설정
├── package.json          # 의존성, 스크립트, pnpm 버전
├── pnpm-lock.yaml        # 의존성 잠금 파일
├── pnpm-workspace.yaml   # pnpm workspace 설정
├── postcss.config.mjs    # PostCSS 설정
└── tsconfig.json         # TypeScript 설정과 경로 별칭
```

## 로컬 개발 서버 실행

Node.js와 pnpm을 준비한 뒤 저장소 루트에서 패키지를 설치합니다.

```bash
pnpm install
```

개발 서버를 실행합니다.

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. 파일을 수정하면 개발 서버가 변경 사항을 반영합니다.

## 프로덕션 빌드 및 실행

```bash
pnpm build
pnpm start
```

`pnpm start`는 먼저 생성된 프로덕션 빌드를 실행합니다.

## 사용 가능한 스크립트

| 명령 | 설명 |
| --- | --- |
| `pnpm dev` | 로컬 개발 서버 실행 |
| `pnpm build` | 프로덕션 빌드 생성 |
| `pnpm start` | 프로덕션 서버 실행 |

현재 `package.json`에는 lint 또는 test 스크립트가 정의되어 있지 않습니다.
