# Shannon

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Zustand
- TanStack Query
- Bun

## 프로젝트 구조

```text
shannon/
├─ client/                 # Next.js 프론트엔드
│  ├─ app/                 # App Router 라우트
│  ├─ components/          # UI 컴포넌트
│  ├─ store/               # Zustand 상태
│  ├─ styles/              # 토큰/테마/글로벌 스타일
│  ├─ mock/                # 목 데이터
│  └─ package.json
├─ raw/                    # 리서치 원천 자료 저장소(articles/notes/papers)
├─ wiki/                   # 개념/엔티티/합성 지식 저장소
└─ .github/workflows/      # PR 리뷰 자동화 워크플로우
```

## 빠른 시작

### 1) 요구사항

- Bun `>= 1.3.11`

### 2) 설치

```bash
cd client
bun install
```

### 3) 개발 서버 실행

```bash
bun run dev
```

## 환경 변수

`client/.env.local` 파일에 아래 값을 설정하세요.

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

- `NEXT_PUBLIC_API_URL`은 `client/api/index.ts`에서 사용됩니다.

## 스크립트

`client` 디렉터리 기준:

- `bun run dev`: 개발 서버 실행
- `bun run build`: 프로덕션 빌드
- `bun run start`: 빌드 결과 실행
- `bun run lint`: ESLint 검사
