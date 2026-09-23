"use client";

import type { LinkItem } from "@/types";

interface LinkCardProps {
  link: LinkItem;
  clickCount: number;
  /** 클릭 직후 화면의 클릭 수를 즉시 올리기 위한 콜백 */
  onClick: () => void;
}

export default function LinkCard({ link, clickCount, onClick }: LinkCardProps) {
  const handleClick = () => {
    onClick();
    // 페이지 이탈 중에도 요청이 유실되지 않도록 keepalive 로 전송한다.
    fetch(`/api/links/${link.id}/click`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  };

  // mailto: 등 웹 주소가 아닌 링크는 새 탭을 열지 않는다 (빈 탭이 남는 문제 방지).
  const isWebLink = /^https?:\/\//.test(link.url);

  return (
    <a
      href={link.url}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      // 글래스모피즘 카드. 호버는 살짝 밝아지고 1px 떠오르는 정도로만.
      className="relative block h-full rounded-[1.375rem] border border-white/70 bg-white/45 px-14 py-[1.35rem] text-center shadow-[0_10px_30px_-18px_rgba(150,80,40,0.45)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_14px_34px_-18px_rgba(150,80,40,0.5)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3a07c] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] dark:hover:bg-white/10"
    >
      <p className="truncate text-[1.17rem] font-semibold">
        {link.emoji && (
          <span className="mr-1.5" aria-hidden="true">
            {link.emoji}
          </span>
        )}
        {link.title}
      </p>
      {link.description && (
        <p className="mt-0.5 truncate text-[1.05rem] text-muted">
          {link.description}
        </p>
      )}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/60 px-2.5 py-1 text-[0.825rem] font-medium text-muted tabular-nums dark:bg-white/10">
        {clickCount.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
