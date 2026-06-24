/**
 * REPLACE your existing src/lib/postManagement/types.ts with this.
 * Adds the fields the new design uses: excerpt, tags, readingTime, (optional) views/likes.
 * Only `title` + `date` were required before — the rest are optional so old
 * posts keep working, but add them to frontmatter to light up the new UI.
 */
export interface PostDetailData {
  title: string;
  date: Date;
  excerpt?: string;
  tags?: string[];
  readingTime?: number; // minutes
  featured?: boolean;
  views?: number;
  likes?: number;
}

export interface PostDetail extends PostDetailData {
  content: string;
  formattedCreatedDate: string;
}

export interface PostAbstract {
  id: string;
  category: string;
  title: string;
  url: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
  views?: number;
  likes?: number;
}
