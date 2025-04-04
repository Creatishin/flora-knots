import { CategoryInterface } from '../types/categoryType';

const categoryList: CategoryInterface[] = [
  {
    id: '1',
    name: 'Bouquets',
    slug: 'bouquets',
    image: 'https://i.etsystatic.com/24994290/r/il/1ec2f0/4759958348/il_570xN.4759958348_kk9g.jpg',
    description: 'Beautiful handcrafted bouquets made with love.',
    seo: {
      meta_title: 'Handcrafted Bouquets - Unique Floral Arrangements',
      meta_description:
        'Explore our exquisite range of handmade bouquets, perfect for every occasion.',
      keywords: ['bouquets', 'handmade flowers', 'floral gifts']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '2',
    name: 'Pots',
    slug: 'pots',
    image: 'https://www.sewrella.com/wp-content/uploads/2018/09/flower-pot-1-crop.jpg',
    description: 'Elegant handcrafted pots for plants and home decor.',
    seo: {
      meta_title: 'Handmade Pots - Elegant Home Decor',
      meta_description: 'Discover our range of unique handmade pots to add charm to your space.',
      keywords: ['pots', 'handmade decor', 'planters']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '3',
    name: 'Plushies',
    slug: 'plushies',
    image:
      'https://www.thefriendlyredfox.com/wp-content/uploads/2023/07/Crochet-Turtle-in-one-hour-768x1024.jpg',
    description: 'Soft and adorable handmade plushies for all ages.',
    seo: {
      meta_title: 'Handmade Plushies - Cute & Cuddly Toys',
      meta_description: 'Shop our adorable handmade plushies, perfect for gifts and collectors.',
      keywords: ['plushies', 'handmade toys', 'cute gifts']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '4',
    name: 'Single Flower',
    slug: 'single-flower',
    image:
      'https://i.etsystatic.com/28843201/r/il/1eb2b4/4954771287/il_fullxfull.4954771287_9zyw.jpg',
    description: 'Handcrafted single flowers for minimalistic beauty.',
    seo: {
      meta_title: 'Single Handmade Flowers - Simple & Elegant',
      meta_description: 'Find beautifully handcrafted single flowers for minimalistic decor.',
      keywords: ['single flowers', 'handmade flowers', 'minimalist floral decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '5',
    name: 'Clothing',
    slug: 'clothing',
    image:
      'https://i.etsystatic.com/35050393/r/il/935476/5735420598/il_fullxfull.5735420598_dny4.jpg',
    description: 'Unique handcrafted clothing made with passion.',
    seo: {
      meta_title: 'Handmade Clothing - Unique Fashion Pieces',
      meta_description:
        'Browse our collection of stylish handmade clothing that reflects individuality.',
      keywords: ['handmade clothing', 'unique fashion', 'handcrafted wear']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '6',
    name: 'Bags',
    slug: 'bags',
    image: 'https://i.etsystatic.com/31590469/r/il/74ca3c/3653532721/il_1080xN.3653532721_rfpl.jpg',
    description: 'Stylish handmade bags with a unique touch.',
    seo: {
      meta_title: 'Handmade Bags - Stylish & Unique',
      meta_description: 'Shop our exclusive handmade bags, crafted with quality and care.',
      keywords: ['handmade bags', 'fashion bags', 'unique handbags']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '7',
    name: 'Keychains',
    slug: 'keychains',
    image:
      'https://treehut.in/media/_pics/crochet-ideas-for-keychain-crochet-stashbusting-05-2821.jpg',
    description: 'Cute and stylish handmade keychains.',
    seo: {
      meta_title: 'Handmade Keychains - Unique & Trendy',
      meta_description: 'Explore our collection of handmade keychains, perfect for everyday use.',
      keywords: ['keychains', 'handmade accessories', 'trendy keychains']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '8',
    name: 'Home Decor',
    slug: 'home-decor',
    image: 'https://theloopholefox.com/wp-content/uploads/2024/08/crochet-basket-pattern.jpg',
    description: 'Handmade home decor items to beautify your space.',
    seo: {
      meta_title: 'Handmade Home Decor - Unique & Stylish',
      meta_description: 'Discover handmade home decor items to add charm to your living space.',
      keywords: ['home decor', 'handmade decor', 'unique home items']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '9',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://i.etsystatic.com/13690231/r/il/167581/5537126998/il_1080xN.5537126998_qgk7.jpg',
    description: 'Stylish handmade accessories for everyday use.',
    seo: {
      meta_title: 'Handmade Accessories - Trendy & Unique',
      meta_description:
        'Shop our collection of handmade accessories, perfect for adding a personal touch.',
      keywords: ['accessories', 'handmade jewelry', 'trendy accessories']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '10',
    name: 'Seasonal',
    slug: 'seasonal',
    image:
      'https://blackstone-designs.com/wp-content/uploads/2024/11/Jingle-Juice-Wine-Bottle-Bag-Crochet-Pattern-1.jpg',
    description: 'Handmade seasonal items for special occasions.',
    seo: {
      meta_title: 'Handmade Seasonal Items - Festive & Unique',
      meta_description: 'Explore our collection of handmade seasonal items for every occasion.',
      keywords: ['seasonal', 'festive decor', 'holiday gifts']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  }
];

export default categoryList;
