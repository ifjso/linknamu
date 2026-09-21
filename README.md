# 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 기술 스택

- Next.js 16 (App Router) / TypeScript
- Tailwind CSS v4
- MongoDB Atlas (링크 클릭 수 저장)
- Vercel (배포)

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.
`MONGODB_URI` 를 비워 두면 클릭 수 집계 없이 페이지만 동작합니다.

## 프로필·링크 수정

`src/data/profile.ts` 에서 이름, 한 줄 소개, 프로필 사진, 링크 목록을 수정합니다.
프로필 사진은 `public/` 아래에 두고 경로를 지정하세요.

## 구조

```
src/
├── app/
│   ├── api/links/[id]/click/route.ts   # 클릭 수 증가 API (POST)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ProfileHeader.tsx   # 프로필 사진·이름·소개
│   ├── LinkList.tsx        # 링크 카드 목록
│   └── LinkCard.tsx        # 링크 카드 (클릭 시 집계 요청)
├── data/profile.ts         # 프로필·링크 데이터
├── lib/
│   ├── mongodb.ts          # MongoDB 커넥션
│   └── clicks.ts           # 클릭 수 조회·증가
└── types/index.ts
```
