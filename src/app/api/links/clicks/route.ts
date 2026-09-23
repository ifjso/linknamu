import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";

/** 모든 링크의 클릭 수를 { linkId: count } 형태로 한 번에 반환한다. */
export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts);
}
