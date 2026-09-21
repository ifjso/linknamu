import { getDb } from "@/lib/mongodb";

const COLLECTION = "clicks";

interface ClickDoc {
  linkId: string;
  count: number;
  updatedAt: Date;
}

/** 모든 링크의 클릭 수를 { linkId: count } 형태로 반환한다. DB 미설정 시 빈 객체. */
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const db = await getDb();
    if (!db) return {};
    const docs = await db.collection<ClickDoc>(COLLECTION).find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
  } catch (error) {
    console.error("[clicks] 클릭 수 조회 실패", error);
    return {};
  }
}

/** 링크 클릭 수를 1 증가시키고 증가 후 값을 반환한다. DB 미설정 시 null. */
export async function incrementClick(linkId: string): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;
  const result = await db.collection<ClickDoc>(COLLECTION).findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" },
  );
  return result?.count ?? null;
}
