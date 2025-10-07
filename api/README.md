# API Calvão de Cria 🛒

API RESTful desenvolvida em **Node.js + Express**, simulando um sistema de e-commerce com funcionalidades de autenticação, carrinho, checkout, cupons de desconto, produtos e gestão de usuários.

---

## 🚀 Funcionalidades

-   Autenticação de usuários (login e registro)
-   CRUD de produtos
-   Gerenciamento de carrinho de compras
-   Checkout e pedidos
-   Aplicação de cupons de desconto
-   Administração de usuários, pedidos, produtos e métodos de pagamento

---

## 📦 Tecnologias utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   MongoDB/Mongoose
-   Middlewares de autenticação e tratamento de erros

---

## ⚙️ Como rodar a aplicação

1.  **Clone este repositório**:
    ```bash
    git clone [https://github.com/seu-usuario/api_calvao_de_cria.git](https://github.com/seu-usuario/api_calvao_de_cria.git)
    cd api_calvao_de_cria
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente**:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    PORT=3001
    ACCESS_TOKEN_SECRET=segredo-do-access-token-super-secreto-mude-depois
    REFRESH_TOKEN_SECRET=segredo-do-refresh-token-ainda-mais-secreto-mude-depois
    DATABASE_USER=adminCalvo
    DATABASE_PASSWORD=pzcwnbc6Tn6n%hBRWvj62zSCk%JbhRufJ8t
    MONGO_URI=mongodb+srv://adminCalvo:pzcwnbc6Tn6n%25hBRWvj62zSCk%25JbhRufJ8t@cluster0.ifwhfbw.mongodb.net/calvao-de-cria
    CLOUDINARY_CLOUD_NAME=da8t2uqtc
    CLOUDINARY_API_KEY=158578586485752
    CLOUDINARY_API_SECRET=yEW9HPOhzHE4Qm59CFSQTtqYRBY
    NODE_ENV=development
    ```

4.  **Inicie a aplicação**:
    ```bash
    npm start
    ```

A API estará disponível em: `http://localhost:3001`

---

## 📂 Estrutura do projeto

```bash
src/
 ├── config/       # Configuração do banco de dados
 ├── controllers/  # Lógica das rotas
 ├── middlewares/  # Middlewares (auth, erros, etc)
 ├── models/       # Modelos do banco de dados
 ├── repositories/ # Regras de acesso aos dados
 ├── routes/       # Definição de rotas
 └── server.js     # Inicialização do servidor
```
---
## 🛠️ Scripts disponíveis
npm start: Inicia o servidor em modo de produção.

npm run dev: Inicia o servidor em modo de desenvolvimento (requer configuração com nodemon ou similar).
