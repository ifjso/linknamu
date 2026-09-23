import type { LinkItem, Profile } from "@/types";

export const profile: Profile = {
  name: "백억",
  bio: "트레이더 | 요즘에는 돈에 관심이 많아요",
  // DiceBear avataaars 캐리커처 (seed=baekeok-a1, 뜬 눈·다문 미소·아치형 눈썹·빨간 옷·금색 배경, 눈썹만 불투명 검정으로 보정)
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "깃허브",
    url: "https://github.com/ifjso",
    emoji: "🐙",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.naver.com/ojsboy",
    emoji: "✍️",
  },
  {
    id: "email",
    title: "이메일",
    // TODO: 실제 이메일 주소로 직접 교체
    url: "mailto:you@example.com",
    emoji: "📬",
  },
];

export function findLink(id: string): LinkItem | undefined {
  return links.find((link) => link.id === id);
}
