# 🛒 Calvão de Cria - E-commerce

Uma plataforma completa de e-commerce desenvolvida com Next.js 15, React 19 e TypeScript, oferecendo uma experiência moderna e fluida para compras online.

## 📋 Sobre o Projeto

**Calvão de Cria** é uma loja online completa que permite aos usuários:

- 🔍 Navegar e buscar produtos
- 🛍️ Adicionar produtos ao carrinho de compras
- 👤 Criar e gerenciar conta de usuário
- 📦 Realizar pedidos com fluxo completo de checkout
- 📍 Gerenciar endereços de entrega
- 💳 Processar pagamentos (incluindo PIX)
- 📊 Acompanhar histórico de pedidos
- ⚙️ Personalizar configurações do perfil

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Phosphor Icons](https://phosphoricons.com/)** - Biblioteca de ícones
- **[React IMask](https://imask.js.org/guide.html)** - Máscaras de input

## 📁 Estrutura do Projeto

```
shopping/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── (auth)/            # Rotas de autenticação
│   │   ├── (index)/           # Rotas principais
│   │   └── checkout/          # Fluxo de checkout
│   ├── components/            # Componentes reutilizáveis
│   ├── libs/
│   │   ├── contexts/          # Context API (Auth, Cart, Checkout)
│   │   ├── hooks/             # Hooks customizados
│   │   ├── services/          # Serviços de API
│   │   └── utils/             # Funções utilitárias
│   └── types/                 # Definições TypeScript
└── public/                    # Arquivos estáticos
```

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 20.x ou superior
- **npm**, **yarn**, **pnpm** ou **bun** como gerenciador de pacotes

## 🎯 Como Iniciar

### 1. Clone o repositório

```bash
git clone https://github.com/refdudu/calvao-de-cria.git
cd calvao-de-cria/shopping
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto (se necessário) com as configurações da API:

```env
NEXT_PUBLIC_API_URL=sua_url_da_api
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção

## 🎨 Funcionalidades Principais

### Autenticação
- Login e registro de usuários
- Recuperação de senha
- Autenticação por token

### Catálogo de Produtos
- Listagem de produtos com filtros
- Visualização detalhada de produtos
- Sistema de busca
- Paginação

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Persistência do carrinho
- Drawer lateral para visualização rápida

### Checkout
- Seleção/cadastro de endereços
- Validação de CEP
- Confirmação de pedido
- Integração com pagamento PIX

### Perfil do Usuário
- Gerenciamento de dados pessoais
- Histórico de pedidos
- Gerenciamento de endereços

## 🔒 Contextos Globais

O projeto utiliza Context API para gerenciar estados globais:

- **AuthContext** - Autenticação e dados do usuário
- **CartContext** - Carrinho de compras
- **CheckoutContext** - Fluxo de checkout
- **ProfileContext** - Dados do perfil

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é privado e proprietário.

## 👥 Autor

Desenvolvido por [refdudu](https://github.com/refdudu)

---

**Calvão de Cria** - Sua loja online completa 🛍️
