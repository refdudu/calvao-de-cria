import type { Product, CartItem, Address } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Haskell Máscara Líquida Lamelar Feat. Alan Vivian - 200ml",
    price: 37.40,
    oldPrice: 93.50,
    discount: 60,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Máscara líquida desenvolvida especialmente para cabelos danificados e ressecados. Fórmula inovadora com tecnologia lamelar que proporciona hidratação profunda e reconstrução capilar instantânea.",
    features: [
      "Hidratação profunda",
      "Reconstrução capilar",
      "Tecnologia lamelar",
      "Sem sulfato",
      "Testado dermatologicamente"
    ],
    category: "Cuidados Capilares",
    brand: "Haskell",
    images: [
      "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
      "https://cataas.com/cat/CadqOVVQzGpArZS3?position=center",
      "https://cataas.com/cat/CadqOVVQzGpArZS4?position=center"
    ]
  },
  {
    id: 2,
    name: "Produto Premium de Beleza - 150ml",
    price: 85.90,
    oldPrice: 120.00,
    discount: 28,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Produto premium desenvolvido com ingredientes naturais para cuidados especiais da pele.",
    features: [
      "Ingredientes naturais",
      "Fórmula premium",
      "Dermatologicamente testado"
    ],
    category: "Cuidados com a Pele",
    brand: "Premium Beauty"
  },
  {
    id: 3,
    name: "Shampoo Natural Orgânico - 250ml",
    price: 45.50,
    oldPrice: 65.00,
    discount: 30,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Shampoo formulado com ingredientes 100% naturais e orgânicos.",
    features: [
      "100% natural",
      "Orgânico certificado",
      "Livre de parabenos"
    ],
    category: "Cuidados Capilares",
    brand: "Natural Care"
  },
  {
    id: 4,
    name: "Condicionador Hidratante - 300ml",
    price: 52.30,
    oldPrice: 75.90,
    discount: 31,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Condicionador com fórmula hidratante para cabelos secos e danificados.",
    features: [
      "Hidratação intensa",
      "Repara danos",
      "Fácil aplicação"
    ],
    category: "Cuidados Capilares",
    brand: "Hair Care"
  },
  {
    id: 5,
    name: "Creme Anti-idade Premium - 50ml",
    price: 156.80,
    oldPrice: 220.00,
    discount: 29,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Creme facial anti-idade com tecnologia avançada para combater os sinais do tempo.",
    features: [
      "Combate rugas",
      "Firmeza da pele",
      "Hidratação 24h"
    ],
    category: "Anti-idade",
    brand: "Premium Skincare"
  },
  {
    id: 6,
    name: "Sérum Facial Vitamina C - 30ml",
    price: 89.90,
    oldPrice: 130.00,
    discount: 31,
    image: "https://cataas.com/cat/CadqOVVQzGpArZS2?position=center",
    description: "Sérum facial concentrado em Vitamina C para iluminar e revitalizar a pele.",
    features: [
      "Rico em Vitamina C",
      "Ilumina a pele",
      "Antioxidante"
    ],
    category: "Tratamento Facial",
    brand: "Vitamin Care"
  }
];

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
