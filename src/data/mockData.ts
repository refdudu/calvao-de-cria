import type { Product, CartItem, Address } from '../types';

export const mockProducts: Product[] = [];

export const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Haskell Máscara Líquida Lamelar",
    price: 37.40,
    quantity: 2,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center"
  },
  {
    id: 2,
    name: "Produto Premium de Beleza",
    price: 85.90,
    quantity: 1,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center"
  }
];

export const mockAddresses: Address[] = [
  {
    id: 1,
    name: "Casa",
    recipient: "Renan Fischer",
    address: "Rua dos cafundo - Santa Rosa - 98910-000",
    selected: true
  },
  {
    id: 2,
    name: "Casa",
    recipient: "Renan Fischer",
    address: "Rua dos cafundo - Santa Rosa - 98910-000",
    selected: false
  },
  {
    id: 3,
    name: "Casa",
    recipient: "Renan Fischer",
    address: "Rua dos cafundo - Santa Rosa - 98910-000",
    selected: false
  },
  {
    id: 4,
    name: "Casa",
    recipient: "Renan Fischer",
    address: "Rua dos cafundo - Santa Rosa - 98910-000",
    selected: false
  }
];
