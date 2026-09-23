import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/types";

interface LinkListProps {
  links: LinkItem[];
  clickCounts: Record<string, number>;
}

export default function LinkList({ links, clickCounts }: LinkListProps) {
  return (
    <ul className="grid grid-cols-1 gap-3 md:gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} clickCount={clickCounts[link.id]} />
        </li>
      ))}
    </ul>
  );
}
