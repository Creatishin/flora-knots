import { CategoryInterface } from './categoryType';

interface FeaturedItem {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CategorySection {
  id: string;
  name: string;
  slug: string;
  featured: FeaturedItem[];
  sections: CategoryInterface[]; // Assuming categoryList follows CategoryInterface
}

interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationConst {
  pages: NavigationItem[];
  categories: CategorySection[];
}

export const navTitleConst: string = 'Get free delivery on orders over ₹1000';
