export type Category = 'All' | 'Cold Press' | 'Fresh Juice' | 'Smoothies' | 'Coffee' | 'Food';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description: string; // Taste -> Benefit -> Mood
  price: string;
  image: string;
  tags: string[]; // e.g., "Best Seller", "Vitamin C"
  badge?: string;
}

export interface StoreInfo {
  address: string;
  googleMapsUrl: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  phone: string;
  whatsappUrl: string;
}

export interface Review {
  id: number;
  user: string;
  text: string;
  rating: number;
}