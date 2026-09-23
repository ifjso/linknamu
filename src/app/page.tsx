import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청마다 최신 값을 보여 준다.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const clickCounts = await getClickCounts();

  return (
    <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col items-center px-6 pt-16 pb-14 md:justify-center md:py-20">
      {/* 모바일·데스크톱 모두 프로필 위, 링크 아래 세로 배치 (데스크톱은 화면 정중앙) */}
      <ProfileHeader profile={profile} />

      <section className="mt-11 w-full" aria-label="링크 목록">
        <LinkList links={links} clickCounts={clickCounts} />
      </section>
    </main>
  );
}
