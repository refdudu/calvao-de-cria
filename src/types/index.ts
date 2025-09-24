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

// Auth Types
export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  phone: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  status: string;
  data: {
    user: User;
    tokens: AuthTokens;
  };
}

export interface RegisterData {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  passwordConfirm: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  forgotPassword: (data: ForgotPasswordData) => Promise<void>;
  resetPassword: (data: ResetPasswordData) => Promise<void>;
}

export interface ItemsSummaryProps {
  items: CartItem[];
  showHeader?: boolean;
}

