"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/types";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  // 서버에서 받은 값과 이 화면에서 누른 증가분을 따로 두고, 표시할 때 더한다.
  // (데이터를 받기 전에는 서버 값이 비어 있으므로 0회로 표시된다)
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  const [localClicks, setLocalClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/links/clicks", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : {}))
      .then(setServerCounts)
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) => {
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="grid grid-cols-1 gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            clickCount={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
