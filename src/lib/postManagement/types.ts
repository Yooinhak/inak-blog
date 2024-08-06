export interface PostDetailData {
  title: string;
  createdDate: Date;
  thumbnailImage: string;
}

export interface PostDetail extends PostDetailData {
  content: string;
  formattedCreatedDate: string;
}

export interface PostAbstract {
  url: string;
  category: string;
  slug: string;
}
