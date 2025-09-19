// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   oldPrice: number;
//   discount: number;
//   image: string;
//   description?: string;
//   features?: string[];
//   category?: string;
//   brand?: string;
//   images?: string[];
// }
export interface Product {
  id: string;
  name: string;
  price: number;
  promotionalPrice: number;
  isPromotionActive: boolean;
  discountPercentage: number;
  mainImage: string;
  rating: number;
  stockQuantity: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Address {
  id: number;
  name: string;
  recipient: string;
  address: string;
  selected: boolean;
}

export interface PriceRange {
  label: string;
  value: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface ItemsSummaryProps {
  items: CartItem[];
  showHeader?: boolean;
}

export interface AuthPageWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  subtitleLink?: string;
  onSubtitleClick?: () => void;
}
