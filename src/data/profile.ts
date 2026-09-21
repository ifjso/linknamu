import type { LinkItem, Profile } from "@/types";

// TODO: 보여 주기용 더미 값. 실제 내용으로 교체 예정.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar.svg",
};

// TODO: 보여 주기용 더미 링크. 실제 URL 로 교체 예정.
export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com",
    description: "오픈소스 프로젝트와 코드",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    description: "경력과 프로필",
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://velog.io",
    description: "개발 기록과 회고",
  },
];

export function findLink(id: string): LinkItem | undefined {
  return links.find((link) => link.id === id);
}
