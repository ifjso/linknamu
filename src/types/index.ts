export interface Profile {
  name: string;
  bio: string;
  avatarUrl: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  /** 제목 앞에 표시할 이모지 */
  emoji?: string;
  description?: string;
}
