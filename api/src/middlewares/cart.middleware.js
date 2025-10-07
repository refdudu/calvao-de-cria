const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
require('dotenv').config();

/**
 * Middleware "híbrido" que identifica o carrinho a ser usado.
 * Versão Refatorada: Se um token for fornecido, ele DEVE ser válido.
 * Se for inválido, um erro 401 é retornado.
 * A lógica de convidado só é acionada se NENHUM token for enviado.
 */
const cartIdentifierMiddleware = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // --- LÓGICA REFINADA ---

  // Cenário 1: Um token FOI fornecido.
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.cartIdentifier = { userId: decoded.userId };
      req.user = { id: decoded.userId, role: decoded.role };
      return next(); // Prossegue como usuário logado
    } catch (err) {
      // Se o token existe mas é inválido (expirado, malformado, etc), retorna erro.
      if (err.name === 'TokenExpiredError') {
        return next(new AppError('Sua sessão expirou. Por favor, faça login novamente.', 401));
      }
      return next(new AppError('Token inválido ou corrompido. Acesso negado.', 401));
    }
  }

  // Cenário 2: NENHUM token foi fornecido. Age como convidado.
  const guestCartId = req.headers['x-guest-cart-id'];
  if (guestCartId) {
    req.cartIdentifier = { guestCartId };
  } else {
    // Se não há token nem guestCartId, o serviço criará um novo carrinho de convidado.
    req.cartIdentifier = {};
  }

  next();
};

module.exports = { cartIdentifierMiddleware };