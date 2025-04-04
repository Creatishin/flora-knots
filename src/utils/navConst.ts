import categoryList from '../services/Category';
import { NavigationConst } from '../types/navTypes';

export const navigationConst: NavigationConst = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact' }
  ],
  categories: [
    {
      id: 'Category',
      name: 'Category',
      slug: 'category',
      featured: [
        {
          name: 'New Arrivals',
          href: '/subcategory/new_arrival',
          imageSrc:
            'https://rareyou.com/cdn/shop/files/1D25B729-27AE-44FB-A085-33FE9226C46E_1024x1024.heic?v=1704437121',
          imageAlt: 'Forever Sunflower Basket.'
        },
        {
          name: 'Featured',
          href: '/subcategory/featured',
          imageSrc:
            'https://www.themaevastore.com/cdn/shop/articles/Gold_Pinecone_Wreath_aa5c1cab-fac8-4082-b898-072ae42827f2.jpg?v=1737695548&width=1000',
          imageAlt: 'Designing a Home Décor Infused Living Room for Every Style.'
        }
      ],
      sections: categoryList
    }
  ]
};

export const navTitleConst = 'Get free delivery on orders over ₹1000';
