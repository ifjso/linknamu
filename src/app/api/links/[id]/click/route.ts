import { NextResponse, type NextRequest } from "next/server";
import { findLink } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function POST(
  _request: NextRequest,
  ctx: RouteContext<"/api/links/[id]/click">,
) {
  const { id } = await ctx.params;

  if (!findLink(id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClick(id);
    return NextResponse.json({ id, count });
  } catch (error) {
    console.error("[clicks] 클릭 수 증가 실패", error);
    return NextResponse.json({ error: "클릭 수 저장에 실패했습니다." }, { status: 500 });
  }
}
