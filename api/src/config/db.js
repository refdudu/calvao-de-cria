const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Conectado com Sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error.message);
    // Encerra o processo da aplicação com status de falha
    process.exit(1);
  }
};

module.exports = connectDB;
