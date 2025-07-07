export interface PostDetailData {
  title: string;
  date: Date;
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
}
