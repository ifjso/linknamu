import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // 개발 모드 HMR 시 커넥션이 중복 생성되지 않도록 전역에 캐시한다.
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(connectionUri: string): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(connectionUri).connect();
    }
    return global._mongoClientPromise;
  }
  return new MongoClient(connectionUri).connect();
}

let clientPromise: Promise<MongoClient> | null = null;

/**
 * MongoDB Db 인스턴스를 반환한다.
 * MONGODB_URI 가 설정되지 않은 경우 null 을 반환하여 DB 없이도 페이지가 동작하도록 한다.
 */
export async function getDb(): Promise<Db | null> {
  if (!uri) return null;
  if (!clientPromise) {
    clientPromise = createClientPromise(uri);
  }
  const client = await clientPromise;
  // DB 이름은 MONGODB_URI 경로(/linknamu)에서 결정된다.
  return client.db();
}
