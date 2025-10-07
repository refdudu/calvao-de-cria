const mongoose = require('mongoose');

const GUEST_CART_LIFESPAN_SECONDS = 1 * 24 * 60 * 60; // 30 dias
// const GUEST_CART_LIFESPAN_SECONDS = 10

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: { type: String, required: true },
    mainImageUrl: { type: String },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    promotionalPrice: { type: Number },
    unitPrice: { type: Number, required: true },
    totalItemPrice: { type: Number, required: true },
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      unique: true,
      sparse: true,
    },
    guestCartId: {
      type: String,
      index: true,
      unique: true,
      sparse: true,
    },
    items: [cartItemSchema],
    subtotal: { type: Number, default: 0 },
    itemsDiscount: { type: Number, default: 0 },
    couponDiscount: { type: Number, default: 0 },
    totalDiscount: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    totalItems: { type: Number, default: 0 },
    activeCouponCode: { type: String, default: null, trim: true, uppercase: true },
    couponInfo: {
      code: String,
      description: String,
    },
    expireAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

cartSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

// Função auxiliar para arredondar para 2 casas decimais






const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

cartSchema.pre('save', function (next) {
  const cart = this;

  if (cart.guestCartId) {
    cart.expireAt = new Date(Date.now() + GUEST_CART_LIFESPAN_SECONDS * 1000);
  } else {
    cart.expireAt = undefined;
  }

  // --- LÓGICA DE CÁLCULO CORRIGIDA ---

  let grossValue = 0; // Valor bruto total (preço cheio)
  let subtotalAfterPromotions = 0; // Valor com descontos de itens, mas antes de cupons

  cart.totalItems = cart.items.reduce((sum, item) => {
    grossValue += item.price * item.quantity;
    subtotalAfterPromotions += item.totalItemPrice; // Usa o valor já calculado que considera a promoção
    return sum + item.quantity;
  }, 0);

  // 1. Calcula os descontos dos próprios itens
  const itemsDiscount = grossValue - subtotalAfterPromotions;
  
  // 2. Garante que o couponDiscount (que veio do serviço) seja um número e arredondado
  const couponDiscount = cart.couponDiscount || 0;

  // 3. Define os totais com base nos valores corretos
  cart.subtotal = roundToTwo(grossValue);
  cart.itemsDiscount = roundToTwo(itemsDiscount);
  cart.couponDiscount = roundToTwo(couponDiscount);
  cart.totalDiscount = roundToTwo(cart.itemsDiscount + cart.couponDiscount);
  cart.total = roundToTwo(cart.subtotal - cart.totalDiscount);





  if (!cart.activeCouponCode) {
    cart.couponInfo = null;
  }

  next();
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;