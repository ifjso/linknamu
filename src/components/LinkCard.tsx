"use client";

import type { LinkItem } from "@/types";

interface LinkCardProps {
  link: LinkItem;
  clickCount?: number;
}

export default function LinkCard({ link, clickCount }: LinkCardProps) {
  const handleClick = () => {
    // 페이지 이탈 중에도 요청이 유실되지 않도록 keepalive 로 전송한다.
    fetch(`/api/links/${link.id}/click`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative block h-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] dark:border-zinc-700 dark:bg-zinc-900"
    >
      <p className="truncate font-semibold">{link.title}</p>
      {link.description && (
        <p className="mt-0.5 truncate text-sm text-zinc-500 dark:text-zinc-400">
          {link.description}
        </p>
      )}
      {typeof clickCount === "number" && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          클릭 {clickCount.toLocaleString("ko-KR")}
        </span>
      )}
    </a>
  );
}
