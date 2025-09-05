import type { Product, CartItem, Address } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Haskell Máscara Líquida Lamelar Feat. Alan Vivian - 200ml",
    price: 37.40,
    oldPrice: 93.50,
    discount: 60,
    image: "https://cataas.com/cat/300/200?random=1"
  },
  {
    id: 2,
    name: "Produto Premium de Beleza - 150ml",
    price: 85.90,
    oldPrice: 120.00,
    discount: 28,
    image: "https://cataas.com/cat/300/200?random=2"
  },
  {
    id: 3,
    name: "Shampoo Natural Orgânico - 250ml",
    price: 45.50,
    oldPrice: 65.00,
    discount: 30,
    image: "https://cataas.com/cat/300/200?random=3"
  },
  {
    id: 4,
    name: "Condicionador Hidratante - 300ml",
    price: 52.30,
    oldPrice: 75.90,
    discount: 31,
    image: "https://cataas.com/cat/300/200?random=4"
  },
  {
    id: 5,
    name: "Creme Anti-idade Premium - 50ml",
    price: 156.80,
    oldPrice: 220.00,
    discount: 29,
    image: "https://cataas.com/cat/300/200?random=5"
  },
  {
    id: 6,
    name: "Sérum Facial Vitamina C - 30ml",
    price: 89.90,
    oldPrice: 130.00,
    discount: 31,
    image: "https://cataas.com/cat/300/200?random=6"
  }
];

export const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Haskell Máscara Líquida Lamelar",
    price: 37.40,
    quantity: 2,
    image: "https://cataas.com/cat/300/200?random=1"
  },
  {
    id: 2,
    name: "Produto Premium de Beleza",
    price: 85.90,
    quantity: 1,
    image: "https://cataas.com/cat/300/200?random=2"
  }
];

export const mockAddresses: Address[] = [
  {
    id: 1,
    name: "Casa",
    recipient: "João Silva",
    address: "Rua das Flores, 123 - Centro - 01234-567",
    selected: true
  },
  {
    id: 2,
    name: "Trabalho",
    recipient: "João Silva",
    address: "Av. Paulista, 1000 - Bela Vista - 01310-100",
    selected: false
  }
];
