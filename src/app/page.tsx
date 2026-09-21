import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청마다 최신 값을 보여 준다.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const clickCounts = await getClickCounts();

  return (
    <main className="flex flex-1 items-start justify-center px-4 py-8 sm:py-16">
      {/* 와이어프레임의 모바일 프레임: 상단 프로필, 하단 링크 카드 세로 배치 */}
      <div className="flex w-full max-w-sm flex-col items-center rounded-[2rem] border border-zinc-200 bg-white px-6 pb-14 pt-14 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileHeader profile={profile} />

        <section className="mt-12 w-full" aria-label="링크 목록">
          <LinkList links={links} clickCounts={clickCounts} />
        </section>
      </div>
    </main>
  );
}
