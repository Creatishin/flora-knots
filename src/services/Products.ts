import { ProductInterface } from '../types/productType';

export const productList: ProductInterface[] = [
  {
    id: '1',
    name: 'Trio Forever Flower',
    slug: 'trio-forever-flower',
    category_id: '1', // Bouquets
    description: 'A trio of everlasting flowers symbolizing eternal love.',
    price: 1200,
    currency: 'INR',
    discount: 10,
    final_price: 1080,
    images: [
      'https://static.wixstatic.com/media/2f5491_525108b5aa2d41518ceee4be487ffab9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
      'https://static.wixstatic.com/media/2f5491_2011e8980c6e4a039d674f324dbdbbb4~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2f5491_2011e8980c6e4a039d674f324dbdbbb4~mv2.jpg',
      'https://static.wixstatic.com/media/2f5491_c7666827dc844c2187995c0dc025cdb9~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2f5491_c7666827dc844c2187995c0dc025cdb9~mv2.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'forever', 'love'],
    rating: 4.5,
    reviews: 12,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red, Yellow, White',
      material: 'Silk',
      weight: '500g'
    },
    seo: {
      meta_title: 'Trio Forever Flower - Eternal Love Bouquet',
      meta_description:
        'A trio of everlasting flowers symbolizing eternal love, perfect for special occasions.',
      keywords: ['forever flowers', 'trio bouquet', 'eternal love']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '2',
    name: 'Sunflower Table Mats',
    slug: 'sunflower-table-mats',
    category_id: '8', // Home Decor
    description: 'Handmade sunflower-themed table mats for a vibrant dining experience.',
    price: 800,
    currency: 'INR',
    discount: 5,
    final_price: 760,
    images: [
      'https://i.ytimg.com/vi/knGYc73xoyI/sddefault.jpg',
      'https://i.etsystatic.com/6554278/r/il/6d8d8e/2338054551/il_570xN.2338054551_rq1l.jpg',
      'https://94ff6bf8.delivery.rocketcdn.me/wp-content/uploads/2021/08/Sunflower-Placemat-1-1-1024x807.jpg',
      'https://94ff6bf8.delivery.rocketcdn.me/wp-content/uploads/2021/04/Sunflower-Placemat-2-1024x683.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['home decor', 'sunflower', 'table mats'],
    rating: 4.2,
    reviews: 8,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow',
      material: 'Cotton',
      size: '30cm x 45cm'
    },
    seo: {
      meta_title: 'Sunflower Table Mats - Vibrant Home Decor',
      meta_description:
        'Brighten your dining table with these handmade sunflower-themed table mats.',
      keywords: ['sunflower mats', 'home decor', 'table mats']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '3',
    name: 'Crochet Bunnies for Decor',
    slug: 'crochet-bunnies-decor',
    category_id: '3', // Plushies
    description: 'Adorable crochet bunnies perfect for home decor or gifting.',
    price: 600,
    currency: 'INR',
    discount: 0,
    final_price: 600,
    images: [
      'https://i.etsystatic.com/13118724/r/il/4438f0/2217606036/il_570xN.2217606036_fj35.jpg',
      'https://d1kgixvf687els.cloudfront.net/images/amigurumi-206Easter-Table-Decoration:-bunnies4.jpeg',
      'https://i.pinimg.com/474x/db/03/73/db037368e223106cd93e28c32b317b02.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'crochet', 'bunnies'],
    rating: 4.7,
    reviews: 15,
    bestseller: true,
    featured: false,
    new_arrival: false,
    attributes: {
      color: 'White, Pink',
      material: 'Yarn',
      weight: '200g'
    },
    seo: {
      meta_title: 'Crochet Bunnies - Adorable Home Decor',
      meta_description: 'Add charm to your home with these handmade crochet bunnies.',
      keywords: ['crochet bunnies', 'home decor', 'plushies']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '4',
    name: 'Sunflower Desk Partner',
    slug: 'sunflower-desk-partner',
    category_id: '8', // Home Decor
    description: 'A beautiful sunflower-themed desk accessory to brighten your workspace.',
    price: 500,
    currency: 'INR',
    discount: 0,
    final_price: 500,
    images: ['https://m.media-amazon.com/images/I/61GNKACbUAL._AC_UF894,1000_QL80_.jpg'],
    inStock: true,
    isArchived: false,
    tags: ['home decor', 'sunflower', 'desk accessory'],
    rating: 4.3,
    reviews: 10,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow',
      material: 'Resin',
      weight: '300g'
    },
    seo: {
      meta_title: 'Sunflower Desk Partner - Brighten Your Workspace',
      meta_description:
        'Add a touch of sunshine to your desk with this sunflower-themed accessory.',
      keywords: ['sunflower desk', 'home decor', 'workspace']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '5',
    name: 'Crochet Lilies',
    slug: 'crochet-lilies',
    category_id: '4', // Single Flower
    description: 'Handmade crochet lilies for a touch of elegance.',
    price: 300,
    currency: 'INR',
    discount: 0,
    final_price: 300,
    images: [
      'https://m.media-amazon.com/images/I/71DI0v7WVvL.jpg',
      'https://m.media-amazon.com/images/I/714Yw8S0mCL.jpg',
      'https://pasticheak.in/cdn/shop/products/crochetflowerlily3_2048x.jpg?v=1694078056'
    ],
    inStock: true,
    isArchived: false,
    tags: ['single flower', 'crochet', 'lilies'],
    rating: 4.6,
    reviews: 7,
    bestseller: false,
    featured: false,
    new_arrival: true,
    attributes: {
      color: 'White, Pink',
      material: 'Yarn',
      weight: '100g'
    },
    seo: {
      meta_title: 'Crochet Lilies - Elegant Handmade Flowers',
      meta_description: 'Add elegance to your space with these handmade crochet lilies.',
      keywords: ['crochet lilies', 'single flower', 'handmade decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '6',
    name: 'Little Flower Pots',
    slug: 'little-flower-pots',
    category_id: '2', // Pots
    description: 'Cute little flower pots for small plants or succulents.',
    price: 400,
    currency: 'INR',
    discount: 0,
    final_price: 400,
    images: [
      'https://i.etsystatic.com/37108183/r/il/158c6d/4616376418/il_1080xN.4616376418_l9uy.jpg',
      'https://m.media-amazon.com/images/I/61uK6AlfPWL._AC_UF350,350_QL80_.jpg',
      'https://ladywithcraft.com/cdn/shop/products/4C141182-2B0C-4ABB-BAA3-121F4436FEF5.jpg?v=1677305613'
    ],
    inStock: true,
    isArchived: false,
    tags: ['pots', 'flower pots', 'succulents'],
    rating: 4.4,
    reviews: 9,
    bestseller: false,
    featured: false,
    new_arrival: true,
    attributes: {
      color: 'Green, Blue',
      material: 'Ceramic',
      weight: '250g'
    },
    seo: {
      meta_title: 'Little Flower Pots - Perfect for Small Plants',
      meta_description: 'Decorate your space with these cute little flower pots.',
      keywords: ['flower pots', 'small pots', 'succulents']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '7',
    name: 'Beautiful Cardigans Sweater',
    slug: 'beautiful-cardigans-sweater',
    category_id: '5', // Clothing
    description: 'Handmade cardigans for a cozy and stylish look.',
    price: 1500,
    currency: 'INR',
    discount: 15,
    final_price: 1275,
    images: [
      'https://i.pinimg.com/736x/ac/84/a0/ac84a03812fde3c0438bb0eb9a0c69c5.jpg',
      'https://assets.ajio.com/medias/sys_master/root/20240929/eu1g/66f8f13af9b8ef490b7e6abb/-473Wx593H-700509114-pink-MODEL.jpg',
      'https://i.pinimg.com/736x/a1/f8/75/a1f875ad06f0055881e556c8fd4f7e69.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['clothing', 'cardigans', 'sweater'],
    rating: 4.8,
    reviews: 20,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Beige, Grey',
      material: 'Wool',
      size: 'S, M, L'
    },
    seo: {
      meta_title: 'Beautiful Cardigans - Cozy & Stylish',
      meta_description: 'Stay cozy and stylish with these handmade cardigans.',
      keywords: ['cardigans', 'sweater', 'handmade clothing']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '8',
    name: 'Crochet Clips to Style Your Hair',
    slug: 'crochet-clips-hair',
    category_id: '9', // Accessories
    description: 'Stylish crochet hair clips for a unique look.',
    price: 200,
    currency: 'INR',
    discount: 0,
    final_price: 200,
    images: [
      'https://m.media-amazon.com/images/I/41pRTFnqnmL._AC_UF1000,1000_QL80_.jpg',
      'https://i.etsystatic.com/32135637/r/il/26d35c/4123157260/il_fullxfull.4123157260_cj65.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm9CX5LBHT3fY6pupxmrYXC5luGOjVDoQwQ&s',
      'https://m.media-amazon.com/images/I/61MC2mxdGLL.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['accessories', 'hair clips', 'crochet'],
    rating: 4.5,
    reviews: 14,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Pink, Blue',
      material: 'Yarn',
      weight: '50g'
    },
    seo: {
      meta_title: 'Crochet Hair Clips - Unique & Stylish',
      meta_description: 'Add a unique touch to your hairstyle with these crochet hair clips.',
      keywords: ['hair clips', 'crochet', 'accessories']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '9',
    name: 'Form of Flowers',
    slug: 'form-of-flowers',
    category_id: '4', // Single Flower
    description: 'Artistic handmade flowers in unique forms.',
    price: 450,
    currency: 'INR',
    discount: 0,
    final_price: 450,
    images: [
      'https://hookok.com/wp-content/uploads/2023/06/star-and-mushrooms-and-hearts-28-scaled.webp',
      'https://hookok.com/wp-content/uploads/2023/12/112crochetflowers-138-768x1152.jpg',
      'https://i.ebayimg.com/images/g/eGIAAOSwYP1mBNfB/s-l400.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sTP5ga4m_dqJ5bvAC4YGRFLFpEzNULvucA&s'
    ],
    inStock: true,
    isArchived: false,
    tags: ['single flower', 'artistic', 'handmade'],
    rating: 4.3,
    reviews: 6,
    bestseller: false,
    featured: false,
    new_arrival: true,
    attributes: {
      color: 'Multicolor',
      material: 'Paper',
      weight: '150g'
    },
    seo: {
      meta_title: 'Form of Flowers - Artistic Handmade Decor',
      meta_description: 'Add artistic flair to your space with these unique handmade flowers.',
      keywords: ['artistic flowers', 'handmade decor', 'unique forms']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '10',
    name: 'Petals of These Roses',
    slug: 'petals-of-roses',
    category_id: '1', // Bouquets
    description: 'A bouquet of roses with delicate petals.',
    price: 1000,
    currency: 'INR',
    discount: 10,
    final_price: 900,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yHgqDmLLSa8I8HQnbGRaHpVeFMyFyddJLg&s',
      'https://hookok.com/wp-content/uploads/2023/12/112crochetflowers-138.jpg',
      'https://attic24.typepad.com/.a/6a00e551101c5488340168eb1eb8a6970c-500wi',
      'https://www.artsty.com/cdn/shop/files/AB96479A-87D5-4DBB-B5C0-85DEB5516A23.jpg?v=1740486200&width=1445',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4E9OMwwakhGW-XvrsS_qMSsIpBIt-Kr0TQ&s'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'roses', 'petals'],
    rating: 4.7,
    reviews: 18,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red, Pink',
      material: 'Silk',
      weight: '600g'
    },
    seo: {
      meta_title: 'Petals of Roses - Delicate Bouquet',
      meta_description: 'A bouquet of roses with delicate petals, perfect for romantic occasions.',
      keywords: ['roses bouquet', 'petals', 'romantic gifts']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '11',
    name: 'Bouquets and Bunny',
    slug: 'bouquets-and-bunny',
    category_id: '1', // Bouquets
    description: 'A charming combination of bouquets and a plush bunny.',
    price: 1500,
    currency: 'INR',
    discount: 15,
    final_price: 1275,
    images: [
      'https://i.etsystatic.com/28227145/r/il/85bc08/4344800501/il_570xN.4344800501_jhh4.jpg',
      'https://worldcrochetflowers.com/cdn/shop/products/01_1.jpg?v=1663561449',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIA58P0wNoraDLxJD3Xi04ojz8GU_8-iPhQ&s',
      'https://i.etsystatic.com/41761855/r/il/5588da/5819323002/il_570xN.5819323002_hhi5.jpg',
      'https://media.karousell.com/media/photos/products/2023/11/27/crochet_flower_bouquet_large_v_1701091430_75be7cab_progressive.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'plushie', 'bunny'],
    rating: 4.6,
    reviews: 12,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Silk, Yarn',
      weight: '800g'
    },
    seo: {
      meta_title: 'Bouquets and Bunny - Charming Gift Set',
      meta_description: 'A delightful combination of bouquets and a plush bunny for gifting.',
      keywords: ['bouquet set', 'plush bunny', 'gift combo']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '12',
    name: 'Daffodils and Cherry Blossoms',
    slug: 'daffodils-cherry-blossoms',
    category_id: '1', // Bouquets
    description: 'A spring-inspired bouquet of daffodils and cherry blossoms.',
    price: 1300,
    currency: 'INR',
    discount: 0,
    final_price: 1300,
    images: [
      'https://www.repeatcrafterme.com/wp-content/uploads/adthrive/2023/05/Daffodil10-480x536.jpg',
      'https://moaracrochet.com/wp-content/uploads/2020/05/Daffodil-Crochet-Pattern-Moara-Crochet.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'daffodils', 'cherry blossoms'],
    rating: 4.4,
    reviews: 9,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow, Pink',
      material: 'Silk',
      weight: '700g'
    },
    seo: {
      meta_title: 'Daffodils and Cherry Blossoms - Spring Bouquet',
      meta_description:
        'Celebrate spring with this beautiful bouquet of daffodils and cherry blossoms.',
      keywords: ['spring bouquet', 'daffodils', 'cherry blossoms']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '13',
    name: 'Flowers Made with Love',
    slug: 'flowers-made-with-love',
    category_id: '1', // Bouquets
    description: 'Handmade flowers crafted with love and care.',
    price: 900,
    currency: 'INR',
    discount: 0,
    final_price: 900,
    images: [
      'https://i.etsystatic.com/28843201/r/il/efb3e2/6082106746/il_570xN.6082106746_nlfr.jpg',
      'https://m.media-amazon.com/images/I/71oTcDuSjAL._AC_UF1000,1000_QL80_.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'handmade', 'love'],
    rating: 4.8,
    reviews: 20,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Fabric',
      weight: '500g'
    },
    seo: {
      meta_title: 'Flowers Made with Love - Handcrafted Bouquet',
      meta_description: 'A bouquet of handmade flowers crafted with love and care.',
      keywords: ['handmade flowers', 'love bouquet', 'unique gifts']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '14',
    name: 'Doggy Keyrings',
    slug: 'doggy-keyrings',
    category_id: '7', // Keychains
    description: 'Cute dog-shaped keyrings for everyday use.',
    price: 250,
    currency: 'INR',
    discount: 0,
    final_price: 250,
    images: [
      'https://i.etsystatic.com/9987465/r/il/1eb9ca/5507613115/il_570xN.5507613115_tqes.jpg',
      'https://amigurum.com/wp-content/uploads/2017/12/dog-bag-keychain-charm-amigurumi.jpg',
      'http://mariskavos.nl/wp-content/uploads/2023/03/dog-keychain-crochet-pattern-1024x1024.webp'
    ],
    inStock: true,
    isArchived: false,
    tags: ['keychains', 'dog', 'cute'],
    rating: 4.5,
    reviews: 15,
    bestseller: true,
    featured: false,
    new_arrival: false,
    attributes: {
      color: 'Brown, White',
      material: 'Resin',
      weight: '50g'
    },
    seo: {
      meta_title: 'Doggy Keyrings - Cute & Functional',
      meta_description: 'Add a touch of cuteness to your keys with these dog-shaped keyrings.',
      keywords: ['dog keyrings', 'keychains', 'cute accessories']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '15',
    name: 'Botany Any Flowers',
    slug: 'botany-any-flowers',
    category_id: '4', // Single Flower
    description: 'A collection of handmade flowers inspired by botany.',
    price: 700,
    currency: 'INR',
    discount: 0,
    final_price: 700,
    images: [
      'https://i.etsystatic.com/37270866/r/il/f1d215/4177456800/il_570xN.4177456800_mp09.jpg',
      'https://i.etsystatic.com/14642491/r/il/ab5a95/5229098608/il_570xN.5229098608_cdk6.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['single flower', 'botany', 'handmade'],
    rating: 4.2,
    reviews: 8,
    bestseller: false,
    featured: false,
    new_arrival: true,
    attributes: {
      color: 'Green, Yellow',
      material: 'Fabric',
      weight: '300g'
    },
    seo: {
      meta_title: 'Botany Any Flowers - Inspired by Nature',
      meta_description: 'A collection of handmade flowers inspired by the beauty of botany.',
      keywords: ['botany flowers', 'handmade decor', 'nature-inspired']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '16',
    name: 'All Shades of Roses',
    slug: 'all-shades-of-roses',
    category_id: '1', // Bouquets
    description: 'A bouquet featuring roses in all shades.',
    price: 1400,
    currency: 'INR',
    discount: 10,
    final_price: 1260,
    images: [
      'https://hookok.com/wp-content/uploads/2023/12/112crochetflowers-138.jpg',
      'https://storage.googleapis.com/ribblr-disk/pics/52292/cover-ksc9j0clyn.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'roses', 'multicolor'],
    rating: 4.7,
    reviews: 16,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red, Pink, Yellow, White',
      material: 'Silk',
      weight: '800g'
    },
    seo: {
      meta_title: 'All Shades of Roses - Multicolor Bouquet',
      meta_description: 'A stunning bouquet featuring roses in all shades for every occasion.',
      keywords: ['multicolor roses', 'bouquet', 'handmade flowers']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '17',
    name: 'Mouse, Honeybees, Heart and More',
    slug: 'mouse-honeybees-heart',
    category_id: '3', // Plushies
    description: 'A collection of adorable plushies including a mouse, honeybees, and a heart.',
    price: 1200,
    currency: 'INR',
    discount: 0,
    final_price: 1200,
    images: [
      'https://www.hoookedyarn.com/media/catalog/product/_/i/_i_m_img_2068_1_2.jpg',
      'https://www.crochetforyoublog.com/wp-content/uploads/2024/02/Crochet-Heart-Bees-Amigurumi-2.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'mouse', 'honeybees', 'heart'],
    rating: 4.6,
    reviews: 14,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Gray, Yellow, Red',
      material: 'Yarn',
      weight: '400g'
    },
    seo: {
      meta_title: 'Mouse, Honeybees, Heart - Adorable Plushies',
      meta_description: 'A collection of adorable plushies perfect for gifting or decor.',
      keywords: ['plushies', 'mouse', 'honeybees', 'heart']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '18',
    name: 'Valentine’s Rose',
    slug: 'valentines-rose',
    category_id: '1', // Bouquets
    description: 'A single red rose symbolizing love, perfect for Valentine’s Day.',
    price: 500,
    currency: 'INR',
    discount: 0,
    final_price: 500,
    images: [
      'https://i.ytimg.com/vi/cRbP2ZeV8kE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqxUq3of-kWZ_8aC0FIJWSixz1hQ',
      'https://i.etsystatic.com/13007949/r/il/09ca4c/5800565395/il_570xN.5800565395_35bu.jpg',
      'https://www.petalstopicots.com/wp-content/uploads/2013/01/heart-flower-wreath-1-1.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['single flower', 'rose', 'valentine'],
    rating: 4.8,
    reviews: 22,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red',
      material: 'Silk',
      weight: '200g'
    },
    seo: {
      meta_title: 'Valentine’s Rose - Symbol of Love',
      meta_description: 'A single red rose, perfect for expressing your love on Valentine’s Day.',
      keywords: ['valentine rose', 'single flower', 'romantic gift']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '19',
    name: 'Desk Partner Sunflower',
    slug: 'desk-partner-sunflower',
    category_id: '8', // Home Decor
    description: 'A cheerful sunflower-themed desk accessory to brighten your workspace.',
    price: 600,
    currency: 'INR',
    discount: 0,
    final_price: 600,
    images: [
      'https://m.media-amazon.com/images/I/41a2JwpswTL._AC_.jpg',
      'https://m.media-amazon.com/images/I/4156l5xFdnL._AC_.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['home decor', 'sunflower', 'desk accessory'],
    rating: 4.4,
    reviews: 10,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow',
      material: 'Resin',
      weight: '300g'
    },
    seo: {
      meta_title: 'Desk Partner Sunflower - Brighten Your Workspace',
      meta_description:
        'Add a touch of sunshine to your desk with this sunflower-themed accessory.',
      keywords: ['sunflower desk', 'home decor', 'workspace']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '20',
    name: 'Rose Desk Partner',
    slug: 'rose-desk-partner',
    category_id: '8', // Home Decor
    description: 'A romantic rose-themed desk accessory for a touch of elegance.',
    price: 700,
    currency: 'INR',
    discount: 0,
    final_price: 700,
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis7KrBYiKbLYYg6_CbME72v3BqvuvaYu-2QAQx5SUkhnD2_tdyZU_AKvqXmevdNIt4deeU8OIdwLKv2X9_7MqDxfi0C-V3MeMZT1cTLKXzcmixbja8uMt15d_WG5aX9JYsadtxKw-3pApSZXju712jQ3PzTiVgIpmZ7VFBTFrGGarr_8UpOGJYLzBZnFNe/s1080/30.jpg',
      'https://i.etsystatic.com/18424646/r/il/575f93/4185718033/il_570xN.4185718033_o0y6.jpg',
      'https://i.etsystatic.com/43685162/r/il/067c6d/5788615355/il_570xN.5788615355_jzf0.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['home decor', 'rose', 'desk accessory'],
    rating: 4.5,
    reviews: 12,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Red',
      material: 'Resin',
      weight: '350g'
    },
    seo: {
      meta_title: 'Rose Desk Partner - Elegant Workspace Decor',
      meta_description: 'Add elegance to your workspace with this rose-themed desk accessory.',
      keywords: ['rose desk', 'home decor', 'workspace']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '21',
    name: 'Beautiful Tulips for Beautiful Spring',
    slug: 'beautiful-tulips-spring',
    category_id: '1', // Bouquets
    description: 'A vibrant bouquet of tulips to celebrate the beauty of spring.',
    price: 1100,
    currency: 'INR',
    discount: 0,
    final_price: 1100,
    images: [
      'https://natagorfinlayson.com/wp-content/uploads/2022/06/Crochet-Tulip-Pattern-Product-Image-1.jpg.webp'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'tulips', 'spring'],
    rating: 4.6,
    reviews: 15,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Pink, Yellow, Purple',
      material: 'Silk',
      weight: '600g'
    },
    seo: {
      meta_title: 'Beautiful Tulips - Celebrate Spring',
      meta_description: 'A vibrant bouquet of tulips to celebrate the beauty of spring.',
      keywords: ['tulips bouquet', 'spring flowers', 'handmade decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '22',
    name: 'Yarns and Petals Bouquet',
    slug: 'yarns-petals-bouquet',
    category_id: '1', // Bouquets
    description: 'A unique bouquet made with yarn and petals for a rustic look.',
    price: 900,
    currency: 'INR',
    discount: 0,
    final_price: 900,
    images: [
      'https://5.imimg.com/data5/ANDROID/Default/2023/3/EI/UT/WY/142355317/product-jpeg-500x500.jpg',
      'https://www.repeatcrafterme.com/wp-content/uploads/2014/04/CrochetBouquet1.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'yarn', 'petals'],
    rating: 4.3,
    reviews: 8,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Multicolor',
      material: 'Yarn, Fabric',
      weight: '500g'
    },
    seo: {
      meta_title: 'Yarns and Petals Bouquet - Rustic Floral Decor',
      meta_description: 'A unique bouquet made with yarn and petals for a rustic look.',
      keywords: ['yarn bouquet', 'petals', 'rustic decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '23',
    name: 'Cute Animals',
    slug: 'cute-animals',
    category_id: '3', // Plushies
    description: 'A collection of adorable handmade animal plushies.',
    price: 800,
    currency: 'INR',
    discount: 0,
    final_price: 800,
    images: [
      'https://i.etsystatic.com/11571927/r/il/598976/5189445735/il_1080xN.5189445735_psit.jpg',
      'https://www.boredpanda.com/blog/wp-content/uploads/2018/02/fb_image_5a8e8bdc978ce__700.jpg',
      'https://sarahmaker.com/wp-content/uploads/2022/04/IMG_8792.jpg.webp'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'animals', 'cute'],
    rating: 4.7,
    reviews: 18,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Yarn',
      weight: '300g'
    },
    seo: {
      meta_title: 'Cute Animals - Adorable Plushies',
      meta_description: 'A collection of adorable handmade animal plushies for all ages.',
      keywords: ['animal plushies', 'cute toys', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '24',
    name: 'Leaves Sticks, Double Layered White Sunflowers',
    slug: 'leaves-sticks-sunflowers',
    category_id: '1', // Bouquets
    description:
      'A unique bouquet featuring double-layered white sunflowers with leaves and sticks.',
    price: 1300,
    currency: 'INR',
    discount: 0,
    final_price: 1300,
    images: [
      'https://m.media-amazon.com/images/I/71JutsrzfnL.jpg',
      'https://i.etsystatic.com/36188266/r/il/54eda8/5314494954/il_1080xN.5314494954_6kud.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'sunflowers', 'leaves'],
    rating: 4.5,
    reviews: 11,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'White, Green',
      material: 'Silk',
      weight: '700g'
    },
    seo: {
      meta_title: 'Leaves Sticks, Double Layered White Sunflowers - Unique Bouquet',
      meta_description:
        'A unique bouquet featuring double-layered white sunflowers with leaves and sticks.',
      keywords: ['sunflowers bouquet', 'leaves', 'unique decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '25',
    name: 'Heart Pot',
    slug: 'heart-pot',
    category_id: '2', // Pots
    description: 'A heart-shaped pot perfect for small plants or succulents.',
    price: 450,
    currency: 'INR',
    discount: 0,
    final_price: 450,
    images: [
      'https://i.etsystatic.com/17876367/r/il/67e0e9/3627845596/il_fullxfull.3627845596_6q55.jpg',
      'https://crochetbyprachi.com/cdn/shop/files/A439249F-9A79-4946-95FE-A2A3FA009E8C.jpg?v=1718033711&width=1920'
    ],
    inStock: true,
    isArchived: false,
    tags: ['pots', 'heart', 'succulents'],
    rating: 4.4,
    reviews: 9,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Pink, Red',
      material: 'Ceramic',
      weight: '300g'
    },
    seo: {
      meta_title: 'Heart Pot - Adorable Planters',
      meta_description: 'A heart-shaped pot perfect for small plants or succulents.',
      keywords: ['heart pot', 'planters', 'succulents']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '26',
    name: 'Lighting Flower Bouquet',
    slug: 'lighting-flower-bouquet',
    category_id: '1', // Bouquets
    description: 'A bouquet of flowers with built-in lighting for a magical touch.',
    price: 1800,
    currency: 'INR',
    discount: 10,
    final_price: 1620,
    images: [
      'https://m.media-amazon.com/images/I/71h82MB0U-L._AC_UF894,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61YHN2x9AIL.jpg',
      'https://m.media-amazon.com/images/I/611gCuuoCqL.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'lighting', 'magical'],
    rating: 4.8,
    reviews: 20,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Silk, LED',
      weight: '900g'
    },
    seo: {
      meta_title: 'Lighting Flower Bouquet - Magical Floral Decor',
      meta_description: 'A bouquet of flowers with built-in lighting for a magical touch.',
      keywords: ['lighting bouquet', 'magical flowers', 'floral decor']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '27',
    name: 'Special Character Batman',
    slug: 'special-character-batman',
    category_id: '3', // Plushies
    description: 'A handmade Batman plushie for superhero fans.',
    price: 1000,
    currency: 'INR',
    discount: 0,
    final_price: 1000,
    images: [
      'https://i.pinimg.com/736x/72/70/31/727031a2a79d54a1a7a6a92ed400b7f7.jpg',
      'https://m.media-amazon.com/images/I/81CFaem2WxL._AC_UF1000,1000_QL80_.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'batman', 'superhero'],
    rating: 4.7,
    reviews: 15,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Black, Yellow',
      material: 'Yarn',
      weight: '400g'
    },
    seo: {
      meta_title: 'Special Character Batman - Superhero Plushie',
      meta_description: 'A handmade Batman plushie for superhero fans.',
      keywords: ['batman plushie', 'superhero', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '28',
    name: 'Monkey',
    slug: 'monkey',
    category_id: '3', // Plushies
    description: 'A cute handmade monkey plushie for animal lovers.',
    price: 700,
    currency: 'INR',
    discount: 0,
    final_price: 700,
    images: [
      'https://www.allaboutami.com/wp-content/uploads/2016/02/tumblr_inline_o1y1wwTim51qfosqa_540-1.jpg',
      'https://www.sewrella.com/wp-content/uploads/2019/10/IMG_5282.jpg',
      'https://i.etsystatic.com/10982694/r/il/28ee3b/1006982304/il_fullxfull.1006982304_qap2.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'monkey', 'cute'],
    rating: 4.5,
    reviews: 12,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Brown',
      material: 'Yarn',
      weight: '300g'
    },
    seo: {
      meta_title: 'Monkey - Cute Handmade Plushie',
      meta_description: 'A cute handmade monkey plushie for animal lovers.',
      keywords: ['monkey plushie', 'cute toys', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '29',
    name: 'Anime',
    slug: 'anime',
    category_id: '3', // Plushies
    description: 'A collection of handmade anime-themed plushies.',
    price: 1200,
    currency: 'INR',
    discount: 0,
    final_price: 1200,
    images: [
      'https://i.pinimg.com/736x/c7/da/ec/c7daec961230f07d5c7a3f789db8f0bf.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjeNEGHm_2WtkYHjgKpY0zze_6uq3L-fHGhTHkWlx_UVnO2Dnx_uMmR50Hq75v8xef2gfbSI88DRf948CMZgFiNfBKp9bTsMHLW8znX3Kg0lpJjEssw4zCPcZPiVhOaEHLgFz-U0G8mKEIoZLzsoFEjpzwuLm4mrHfLt7LC2D2TVwTdlz37XrECQFzKQ/w665-rw/sailormoon-amigurumi-5.jpg',
      'https://i.pinimg.com/736x/d6/1d/6b/d61d6b6855a49afc8cc575741ddc42a6.jpg',
      'https://cdn.ballwool.com/products/l/0_395da06aeb7b3b0835877348fb43a5d523471a3b69f7aef1eae303966a010a42683b49a85420c5c44e25ba34c4a741318fb954c73a59a4b3cd8b57ee0527ed72.webp'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'anime', 'cute'],
    rating: 4.6,
    reviews: 14,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Yarn',
      weight: '500g'
    },
    seo: {
      meta_title: 'Anime - Handmade Anime Plushies',
      meta_description: 'A collection of handmade anime-themed plushies for fans.',
      keywords: ['anime plushies', 'handmade', 'cute toys']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '30',
    name: 'Baby Rapunzel',
    slug: 'baby-rapunzel',
    category_id: '3', // Plushies
    description: 'A handmade Baby Rapunzel plushie for Disney fans.',
    price: 900,
    currency: 'INR',
    discount: 0,
    final_price: 900,
    images: [
      'https://i.etsystatic.com/34608788/r/il/dfc4ad/5953952088/il_570xN.5953952088_hs71.jpg',
      'https://i.pinimg.com/736x/68/ff/8f/68ff8fb9cb72c0520b0972f124aa0fb7.jpg',
      'https://i.pinimg.com/736x/88/28/37/882837cde817043da42a1adf8ba41154.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'rapunzel', 'disney'],
    rating: 4.7,
    reviews: 16,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Purple, Yellow',
      material: 'Yarn',
      weight: '350g'
    },
    seo: {
      meta_title: 'Baby Rapunzel - Handmade Disney Plushie',
      meta_description: 'A handmade Baby Rapunzel plushie for Disney fans.',
      keywords: ['rapunzel plushie', 'disney', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '31',
    name: 'Smiley Tote Bag',
    slug: 'smiley-tote-bag',
    category_id: '6', // Bags
    description: 'A stylish tote bag with a smiley design for everyday use.',
    price: 800,
    currency: 'INR',
    discount: 0,
    final_price: 800,
    images: [
      'https://i.pinimg.com/736x/6c/1c/f9/6c1cf90bfdf963e2dbb4e9fea62e44cd.jpg',
      'https://static.wixstatic.com/media/86bc9b_124a7950aa154fe58a721d5b09b89504~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/86bc9b_124a7950aa154fe58a721d5b09b89504~mv2.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bags', 'tote', 'smiley'],
    rating: 4.5,
    reviews: 10,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow',
      material: 'Cotton',
      size: '40cm x 35cm'
    },
    seo: {
      meta_title: 'Smiley Tote Bag - Stylish & Functional',
      meta_description: 'A stylish tote bag with a smiley design for everyday use.',
      keywords: ['tote bag', 'smiley', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '32',
    name: 'Forever Bouquets for Your Forever Love',
    slug: 'forever-bouquets',
    category_id: '1', // Bouquets
    description: 'A timeless bouquet symbolizing eternal love.',
    price: 1500,
    currency: 'INR',
    discount: 10,
    final_price: 1350,
    images: [
      'https://i.etsystatic.com/28843201/r/il/670b2d/5099506636/il_570xN.5099506636_eg5e.jpg',
      'https://media.karousell.com/media/photos/products/2023/12/25/mixed_flower_bouquet_crochet_1703509310_e1adc981',
      'https://diybaazar.com/publicuploads/seller/products/forever-yours-propose-with-our-handcrafted-crochet-flower-bouquet-2-2_1712056631.png'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'forever', 'love'],
    rating: 4.8,
    reviews: 18,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red, White',
      material: 'Silk',
      weight: '700g'
    },
    seo: {
      meta_title: 'Forever Bouquets - Eternal Love',
      meta_description: 'A timeless bouquet symbolizing eternal love.',
      keywords: ['forever bouquet', 'eternal love', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '33',
    name: 'Blossom Like These Flowers',
    slug: 'blossom-like-flowers',
    category_id: '1', // Bouquets
    description: 'A vibrant bouquet to inspire growth and beauty.',
    price: 1400,
    currency: 'INR',
    discount: 0,
    final_price: 1400,
    images: ['https://attic24.typepad.com/.a/6a00e551101c54883401b7c75dc9cf970b-500wi'],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'blossom', 'vibrant'],
    rating: 4.6,
    reviews: 12,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Pink, Yellow, Purple',
      material: 'Silk',
      weight: '600g'
    },
    seo: {
      meta_title: 'Blossom Like These Flowers - Vibrant Bouquet',
      meta_description: 'A vibrant bouquet to inspire growth and beauty.',
      keywords: ['blossom bouquet', 'vibrant flowers', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '34',
    name: 'When Luffy Met Rapunzel',
    slug: 'luffy-rapunzel',
    category_id: '3', // Plushies
    description: 'A unique plushie set featuring Luffy and Rapunzel.',
    price: 1600,
    currency: 'INR',
    discount: 0,
    final_price: 1600,
    images: [
      'https://i.etsystatic.com/29193291/r/il/1cf9b6/5536538534/il_fullxfull.5536538534_b0n4.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'luffy', 'rapunzel'],
    rating: 4.7,
    reviews: 15,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Yarn',
      weight: '500g'
    },
    seo: {
      meta_title: 'When Luffy Met Rapunzel - Unique Plushie Set',
      meta_description: 'A unique plushie set featuring Luffy and Rapunzel.',
      keywords: ['luffy plushie', 'rapunzel plushie', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '35',
    name: 'Doll Crochet',
    slug: 'doll-crochet',
    category_id: '3', // Plushies
    description: 'A handmade crochet doll for collectors and kids.',
    price: 900,
    currency: 'INR',
    discount: 0,
    final_price: 900,
    images: [
      'https://www.artsty.com/cdn/shop/files/rn-image_picker_lib_temp_2639c574-2494-4b34-9f0d-85f5b7062662.jpg?v=1713701957',
      'https://i.etsystatic.com/23719337/r/il/3bdf81/3572603071/il_fullxfull.3572603071_9mv3.jpg',
      'https://down-ph.img.susercontent.com/file/07fbab0d5864cc0da3fe9c80d4789d4b'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'doll', 'crochet'],
    rating: 4.5,
    reviews: 10,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Multicolor',
      material: 'Yarn',
      weight: '300g'
    },
    seo: {
      meta_title: 'Doll Crochet - Handmade Collectible',
      meta_description: 'A handmade crochet doll for collectors and kids.',
      keywords: ['crochet doll', 'handmade', 'collectible']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '36',
    name: 'Busket of Love',
    slug: 'busket-of-love',
    category_id: '1', // Bouquets
    description: 'A basket filled with flowers symbolizing love and care.',
    price: 1700,
    currency: 'INR',
    discount: 10,
    final_price: 1530,
    images: [
      'https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw0b8ea5fb/images/Ideas/knitcraft/main/ideas_main_how-to-crochet-a-love-heart-belly-basket.jpg?sw=680&q=85',
      'https://www.allaboutami.com/wp-content/uploads/2016/06/tumblr_inline_o91zj293Eg1qfosqa_540.jpg',
      'https://i.etsystatic.com/14453449/r/il/beb32e/1733589072/il_570xN.1733589072_n4p3.jpg',
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1x4qC3.img?w=768&h=512&m=6'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'basket', 'love'],
    rating: 4.8,
    reviews: 18,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Red, Pink, White',
      material: 'Silk, Wicker',
      weight: '800g'
    },
    seo: {
      meta_title: 'Busket of Love - Symbol of Love and Care',
      meta_description: 'A basket filled with flowers symbolizing love and care.',
      keywords: ['busket of love', 'flower basket', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '37',
    name: 'A Cute Bride and Groom Bouquet',
    slug: 'bride-groom-bouquet',
    category_id: '1', // Bouquets
    description: 'A special bouquet for weddings, featuring a bride and groom theme.',
    price: 2000,
    currency: 'INR',
    discount: 0,
    final_price: 2000,
    images: [
      'https://i.etsystatic.com/32630980/r/il/25a45c/4084539259/il_fullxfull.4084539259_1pnl.jpg',
      'https://i.etsystatic.com/32630980/r/il/6ed299/6653561495/il_fullxfull.6653561495_k7u8.jpg',
      'https://i.pinimg.com/736x/f9/3b/1c/f93b1ce5c4e01e6ce55195f9a95cb5a5.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'wedding', 'bride and groom'],
    rating: 4.9,
    reviews: 25,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'White, Gold',
      material: 'Silk',
      weight: '1kg'
    },
    seo: {
      meta_title: 'A Cute Bride and Groom Bouquet - Wedding Special',
      meta_description: 'A special bouquet for weddings, featuring a bride and groom theme.',
      keywords: ['wedding bouquet', 'bride and groom', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '38',
    name: 'Flowers + Cats',
    slug: 'flowers-cats',
    category_id: '1', // Bouquets
    description: 'A unique bouquet featuring flowers and cute cat figurines.',
    price: 1500,
    currency: 'INR',
    discount: 0,
    final_price: 1500,
    images: [
      'https://anniecarrawayart.com/cdn/shop/files/SpiritChevronShawl_41.png?v=1717378998&width=1445',
      'https://anniecarrawayart.com/cdn/shop/files/6_d62a6ea0-8a25-48ff-a738-bd2255c80483.png?v=1717379852&width=1946'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'flowers', 'cats'],
    rating: 4.7,
    reviews: 16,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Multicolor',
      material: 'Silk, Resin',
      weight: '700g'
    },
    seo: {
      meta_title: 'Flowers + Cats - Unique Bouquet',
      meta_description: 'A unique bouquet featuring flowers and cute cat figurines.',
      keywords: ['flowers and cats', 'unique bouquet', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '39',
    name: 'PINK Flora',
    slug: 'pink-flora',
    category_id: '1', // Bouquets
    description: 'A bouquet of pink flowers for a soft and elegant look.',
    price: 1200,
    currency: 'INR',
    discount: 0,
    final_price: 1200,
    images: [
      'https://d2tk9av7ph0ga6.cloudfront.net/image/catalog/2022/4/picsart-22-02-26-12-58-13-981-700xauto.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPb1-raTexkw9i_PAGJh4SvU9oDo41rAIpYoUUnKYGbPtEoK8GIM98RIAezl9ww_n1L2Pn_SZv5x3Gl92jbOJcKL4B6LztmccQRD9zVZ4iT44w_T2oSxJY_gXOXCuWpSq4k7cqALJ50WwqWHodrgNvfuJ1M7gAY-OnhBV2P3pg7RGXb2eE1Ka1CaCH9A/s3256/DSC02462.JPG'
    ],
    inStock: true,
    isArchived: false,
    tags: ['bouquet', 'pink', 'elegant'],
    rating: 4.6,
    reviews: 14,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Pink',
      material: 'Silk',
      weight: '600g'
    },
    seo: {
      meta_title: 'PINK Flora - Soft and Elegant Bouquet',
      meta_description: 'A bouquet of pink flowers for a soft and elegant look.',
      keywords: ['pink bouquet', 'flora', 'handmade']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '40',
    name: 'Sunflower Crochet',
    slug: 'sunflower-crochet',
    category_id: '4', // Single Flower
    description: 'A handmade crochet sunflower for minimalistic decor.',
    price: 400,
    currency: 'INR',
    discount: 0,
    final_price: 400,
    images: [
      'https://suspire.in/cdn/shop/files/whatsapp_image_2024-07-15_at_5.32.25_pm_1080x.jpg?v=1721109750',
      'https://rareyou.com/cdn/shop/files/WhatsAppImage2023-12-09at11.45.00PM_1024x1024.jpg?v=1702208806'
    ],
    inStock: true,
    isArchived: false,
    tags: ['single flower', 'sunflower', 'crochet'],
    rating: 4.5,
    reviews: 10,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Yellow',
      material: 'Yarn',
      weight: '150g'
    },
    seo: {
      meta_title: 'Sunflower Crochet - Minimalistic Decor',
      meta_description: 'A handmade crochet sunflower for minimalistic decor.',
      keywords: ['sunflower crochet', 'handmade', 'single flower']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '41',
    name: 'Beautiful Cardigans Sweater',
    slug: 'beautiful-cardigans-sweater',
    category_id: '5', // Clothing
    description: 'A cozy and stylish handmade cardigan sweater.',
    price: 1800,
    currency: 'INR',
    discount: 15,
    final_price: 1530,
    images: [
      'https://localnation.co.in/cdn/shop/files/pink-picnic-crochet-cardigan-425299_1800x1800_27e13b36-5139-4819-be33-b8b0a77db223.jpg?v=1737796869&width=1445',
      'https://assets.ajio.com/medias/sys_master/root/20240929/9P4L/66f8f6ed260f9c41e83f4848/-473Wx593H-700509151-cream-MODEL.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['clothing', 'cardigan', 'sweater'],
    rating: 4.8,
    reviews: 20,
    bestseller: true,
    featured: true,
    new_arrival: false,
    attributes: {
      color: 'Beige, Grey',
      material: 'Wool',
      size: 'S, M, L'
    },
    seo: {
      meta_title: 'Beautiful Cardigans Sweater - Cozy & Stylish',
      meta_description: 'A cozy and stylish handmade cardigan sweater.',
      keywords: ['cardigan sweater', 'handmade', 'clothing']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '42',
    name: 'Crochet Clips to Style Your Hair',
    slug: 'crochet-clips-hair',
    category_id: '9', // Accessories
    description: 'Stylish crochet hair clips for a unique look.',
    price: 200,
    currency: 'INR',
    discount: 0,
    final_price: 200,
    images: [
      'https://miniwhale.co.uk/cdn/shop/files/IMG_6913.jpg?v=1713183695&width=1946',
      'https://kreateworld.in/cdn/shop/products/b4a0f1a8-6b08-40ec-afcd-9fbbd5f6328e_1000x.png?v=1674204669',
      'https://theberryshop.in/cdn/shop/files/324396621_1218831608709622_5619323160250960077_n.jpg?v=1698302710',
      'https://www.violetdrizzle.com/wp-content/uploads/2021/03/IMG_4810-scaled.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['accessories', 'hair clips', 'crochet'],
    rating: 4.5,
    reviews: 14,
    bestseller: false,
    featured: true,
    new_arrival: true,
    attributes: {
      color: 'Pink, Blue',
      material: 'Yarn',
      weight: '50g'
    },
    seo: {
      meta_title: 'Crochet Hair Clips - Unique & Stylish',
      meta_description: 'Add a unique touch to your hairstyle with these crochet hair clips.',
      keywords: ['hair clips', 'crochet', 'accessories']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  },
  {
    id: '43',
    name: 'Crochet Bunnies for Decor',
    slug: 'crochet-bunnies-decor',
    category_id: '3', // Plushies
    description: 'Adorable crochet bunnies perfect for home decor or gifting.',
    price: 600,
    currency: 'INR',
    discount: 0,
    final_price: 600,
    images: [
      'https://i.etsystatic.com/13118724/r/il/4438f0/2217606036/il_570xN.2217606036_fj35.jpg',
      'https://i0.wp.com/www.jenhayescreations.com/wp-content/uploads/2022/04/EggAnimals_Blog_17.jpg?fit=800%2C533&ssl=1',
      'https://i.etsystatic.com/38790981/r/il/df558d/6213086173/il_fullxfull.6213086173_j314.jpg'
    ],
    inStock: true,
    isArchived: false,
    tags: ['plushies', 'crochet', 'bunnies'],
    rating: 4.7,
    reviews: 15,
    bestseller: true,
    featured: false,
    new_arrival: false,
    attributes: {
      color: 'White, Pink',
      material: 'Yarn',
      weight: '200g'
    },
    seo: {
      meta_title: 'Crochet Bunnies - Adorable Home Decor',
      meta_description: 'Add charm to your home with these handmade crochet bunnies.',
      keywords: ['crochet bunnies', 'home decor', 'plushies']
    },
    created_at: '2025-03-01T10:00:00Z',
    updated_at: '2025-03-01T10:00:00Z'
  }
];
