export interface CategoryInterface {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
  created_at: string;
  updated_at: string;
}
