import Image from "next/image";
import type { Profile } from "@/types";

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 반투명 링 + 따뜻한 그림자로 살짝 떠 있는 입체감 */}
      <div className="rounded-full bg-white/50 p-[0.45rem] shadow-[0_22px_48px_-18px_rgba(170,90,45,0.55)] ring-1 ring-white/70 backdrop-blur-sm dark:bg-white/10 dark:ring-white/15 dark:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.7)]">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="h-[8.375rem] w-[8.375rem] rounded-full object-cover md:h-[9.625rem] md:w-[9.625rem]"
        />
      </div>
      <h1 className="mt-7 text-[1.95rem] font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2.5 text-[1.125rem] leading-relaxed text-muted">{profile.bio}</p>
    </header>
  );
}
