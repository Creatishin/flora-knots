export interface ProductInterface {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  description: string;
  price: number;
  currency: string;
  discount: number;
  final_price: number;
  images: string[];
  inStock: boolean;
  isArchived: boolean;
  tags: string[];
  rating: number;
  reviews: number;
  bestseller: boolean;
  featured: boolean;
  new_arrival: boolean;
  attributes: {
    color?: string;
    size?: string;
    material?: string;
    weight?: string;
    [key: string]: string | undefined; // Allows additional dynamic attributes
  };
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
  created_at: string;
  updated_at: string;
}
