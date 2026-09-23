import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col items-center px-6 pt-16 pb-14 md:justify-center md:py-20">
      {/* 모바일·데스크톱 모두 프로필 위, 링크 아래 세로 배치 (데스크톱은 화면 정중앙) */}
      <ProfileHeader profile={profile} />

      <section className="mt-11 w-full" aria-label="링크 목록">
        <LinkList links={links} />
      </section>
    </main>
  );
}
