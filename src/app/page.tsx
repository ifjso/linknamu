import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청마다 최신 값을 보여 준다.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const clickCounts = await getClickCounts();

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-10 md:max-w-2xl md:justify-center md:px-10 md:py-20">
      {/* 모바일·데스크톱 모두 프로필 위, 링크 아래 세로 배치 (데스크톱은 폭만 넓게, 화면 정중앙) */}
      <ProfileHeader profile={profile} />

      <section className="mt-10 w-full" aria-label="링크 목록">
        <LinkList links={links} clickCounts={clickCounts} />
      </section>
    </main>
  );
}
