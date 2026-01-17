import { MenuItem, StoreInfo, Review } from './types';

export const BRAND = {
  name: "Hideout BPN",
  tagline: "Juice. Dessert. Coffee.",
  subtitle: "Ready to serve",
  hashtag: "#HideoutBPN"
};

export const STORE_INFO: StoreInfo = {
  address: "Jl. Marsma R. Iswahyudi, Gn. Bahagia, Kota Balikpapan",
  googleMapsUrl: "https://maps.google.com/?q=Hideout+BPN+Balikpapan",
  hours: {
    weekdays: "Mon–Thu 10.00–22.30",
    weekends: "Fri–Sun 10.00–23.00",
  },
  phone: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Hi%20Hideout,%20I'd%20like%20to%20order!",
};

export const CATEGORIES = ['All', 'Cold Press', 'Fresh Juice', 'Smoothies', 'Coffee', 'Food'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COLD PRESS
  {
    id: 'cp-1',
    name: 'Cimon',
    category: 'Cold Press',
    description: 'Apple, Lemon, Cinnamon. A warm hug in a cold bottle.',
    price: '35K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_1.jpg',
    tags: ['Detox', 'Immunity'],
    badge: 'Best Seller'
  },
  {
    id: 'cp-2',
    name: 'Green Mint',
    category: 'Cold Press',
    description: 'Cucumber, Apple, Mint. Instant refresh for hot days.',
    price: '35K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_2.jpg',
    tags: ['Hydration', 'Green'],
  },
  {
    id: 'cp-3',
    name: 'Pear Power',
    category: 'Cold Press',
    description: 'Pear, Pineapple. Sweet energy release.',
    price: '38K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_3.jpg',
    tags: ['Energy', 'Sweet'],
  },
  {
    id: 'cp-4',
    name: 'The Jungle',
    category: 'Cold Press',
    description: 'Spinach, Apple, Orange. Drink your greens, happily.',
    price: '38K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_4.jpg',
    tags: ['Health', 'Veggie'],
  },

  // FRESH JUICE
  {
    id: 'fj-1',
    name: 'Berry Oww',
    category: 'Fresh Juice',
    description: 'Strawberry, Orange. Sweet, tart, and totally awake.',
    price: '32K',
    image: '/DMR_MnBTCA6/2025-07-19_07-30-44_UTC_1.jpg',
    tags: ['Vitamin C'],
    badge: 'Signature'
  },
  {
    id: 'fj-2',
    name: 'Orange Go',
    category: 'Fresh Juice',
    description: '100% Squeezed Orange. Pure sunshine.',
    price: '30K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_5.jpg',
    tags: ['Classic', 'Vit C'],
  },
  {
    id: 'fj-3',
    name: 'Cooler Juice',
    category: 'Fresh Juice',
    description: 'Watermelon, Lime. The ultimate thirst quencher.',
    price: '28K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_6.jpg',
    tags: ['Hydration'],
  },
  {
    id: 'fj-4',
    name: 'Pulse Juice',
    category: 'Fresh Juice',
    description: 'Dragonfruit, Pineapple. Vibrant color, vibrant taste.',
    price: '32K',
    image: '/DQOa8tgk6tP/2025-10-25_08-21-51_UTC_1.jpg',
    tags: ['Antioxidant'],
  },
  {
    id: 'fj-5',
    name: 'Fresh Fuel',
    category: 'Fresh Juice',
    description: 'Carrot, Apple, Citrus. Eye-opening goodness.',
    price: '30K',
    image: '/DPxxHMikxT5/2025-10-14_05-17-33_UTC_7.jpg',
    tags: ['Wellness'],
  },
  {
    id: 'fj-6',
    name: 'Pineapple Fizz',
    category: 'Fresh Juice',
    description: 'Pineapple, Soda, Mint. Sparkling tropical vibes.',
    price: '28K',
    image: '/DMR_MnBTCA6/2025-07-19_07-30-44_UTC_3.jpg',
    tags: ['Sparkling', 'Fun'],
  },

  // SMOOTHIES
  {
    id: 'sm-1',
    name: 'Sweet Lover',
    category: 'Smoothies',
    description: 'Strawberry, Banana, Milk. Creamy pink dreams.',
    price: '38K',
    image: '/DM7V4lozp8W/2025-08-04_08-57-51_UTC_1.jpg',
    tags: ['Dairy', 'Filling'],
    badge: 'Kids Love It'
  },
  {
    id: 'sm-2',
    name: 'Promise Smoothie',
    category: 'Smoothies',
    description: 'Banana, Oats, Honey. Breakfast in a cup.',
    price: '35K',
    image: '/DM7V4lozp8W/2025-08-04_08-57-51_UTC_2.jpg',
    tags: ['Meal Replacer'],
  },
  {
    id: 'sm-3',
    name: 'Frassa',
    category: 'Smoothies',
    description: 'Mango, Yogurt, Ice. Thick, cold, and golden.',
    price: '38K',
    image: '/DMR_MnBTCA6/2025-07-19_07-30-44_UTC_5.jpg',
    tags: ['Tropical'],
  },

  // COFFEE
  {
    id: 'cf-1',
    name: 'Cimon Coffee',
    category: 'Coffee',
    description: 'Espresso with a hint of cinnamon. Spicy wake up.',
    price: '28K',
    image: '/DMCzVCWzTmC/2025-07-13_09-58-25_UTC_1.jpg',
    tags: ['Caffeine', 'Unique'],
  },
  {
    id: 'cf-2',
    name: 'Mont Blanc',
    category: 'Coffee',
    description: 'Cold brew with sweet cream cap. Smooth luxury.',
    price: '32K',
    image: '/DMR_MnBTCA6/2025-07-19_07-30-44_UTC_8.jpg',
    tags: ['Caffeine', 'Dairy'],
    badge: 'Staff Pick'
  },
  {
    id: 'cf-3',
    name: 'Retro Coffee',
    category: 'Coffee',
    description: 'Classic iced coffee with palm sugar. Local favorite.',
    price: '25K',
    image: '/DMCzVCWzTmC/2025-07-13_09-58-25_UTC_2.jpg',
    tags: ['Local', 'Sweet'],
  },
  {
    id: 'cf-4',
    name: 'Hot Latte',
    category: 'Coffee',
    description: 'Silky steamed milk over espresso.',
    price: '28K',
    image: '/DMCzVCWzTmC/2025-07-13_09-58-25_UTC_3.jpg',
    tags: ['Classic'],
  },

  // FOOD
  {
    id: 'fd-1',
    name: 'Pain au Chocolat',
    category: 'Food',
    description: 'Flaky pastry, dark chocolate center. Parisian vibes.',
    price: '25K',
    image: '/DQOa8tgk6tP/2025-10-25_08-21-51_UTC_2.jpg',
    tags: ['Sweet', 'Bakery'],
  },
  {
    id: 'fd-2',
    name: 'Banana Cake',
    category: 'Food',
    description: 'Moist, dense, homemade style. Perfect with coffee.',
    price: '20K',
    image: '/DQOa8tgk6tP/2025-10-25_08-21-51_UTC_3.jpg',
    tags: ['Sweet', 'Snack'],
  },
  {
    id: 'fd-3',
    name: 'Butter Croissant',
    category: 'Food',
    description: 'Gold, crispy, layered. Pure butter goodness.',
    price: '22K',
    image: '/DQOa8tgk6tP/2025-10-25_08-21-51_UTC_4.jpg',
    tags: ['Bakery'],
  },
  {
    id: 'fd-4',
    name: 'Fudgy Brownie',
    category: 'Food',
    description: 'Rich chocolate, walnuts, gooey center.',
    price: '25K',
    image: '/DQOa8tgk6tP/2025-10-25_08-21-51_UTC_5.jpg',
    tags: ['Sweet', 'Cheat Day'],
  },
  {
    id: 'fd-5',
    name: 'Savory Puff',
    category: 'Food',
    description: 'Chicken mushroom filling in puff pastry.',
    price: '28K',
    image: '/DM7V4lozp8W/2025-08-04_08-57-51_UTC_3.jpg',
    tags: ['Savory', 'Snack'],
  }
];

export const REVIEWS: Review[] = [
  { id: 1, user: "Dinda R.", text: "Best WFC spot in Balikpapan! Fast wifi and the Berry Oww keeps me going.", rating: 5 },
  { id: 2, user: "Budi S.", text: "Hidden gem. The outdoor area is super cozy.", rating: 5 },
  { id: 3, user: "Sarah K.", text: "Love the cold press bottles. Cimon is my daily fix.", rating: 5 },
  { id: 4, user: "Reza P.", text: "Finally a place with real fresh juice, not just syrup.", rating: 5 },
];