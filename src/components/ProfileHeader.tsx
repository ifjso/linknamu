import Image from "next/image";
import type { Profile } from "@/types";

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-md dark:border-zinc-800"
      />
      <h1 className="mt-4 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
