# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Calvão de Cria

Uma aplicação React moderna com TypeScript, Tailwind CSS, React Router DOM e React Drawer.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Ferramenta de build e desenvolvimento
- **Tailwind CSS** - Framework de CSS utilitário
- **React Router DOM** - Roteamento para aplicações React
- **React Drawer** - Componente de drawer/menu lateral
- **Yarn** - Gerenciador de pacotes

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#11B687` | Cor principal da aplicação |
| Background | `#EFEFEF` | Fundo da aplicação |
| Secondary | `#C69879` | Cor secundária |
| Items Background | `#FFFFFF` | Fundo de itens/cards |
| Text 1 | `#1D1D1B` | Texto principal |
| Text Special | `#FFCC00` | Texto de destaque |
| Text Secondary | `#888888` | Texto secundário |

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta do projeto
cd calvao-de-cria

# Instale as dependências
yarn install

# Execute o projeto
yarn dev
```

## 🗂️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Layout.tsx     # Layout principal com header e drawer
│   └── ColorPalette.tsx # Demonstração da paleta de cores
├── pages/             # Páginas da aplicação
│   ├── Home.tsx       # Página inicial
│   └── About.tsx      # Página sobre
├── types/             # Definições de tipos TypeScript
│   └── react-drawer.d.ts # Tipos para react-drawer
├── assets/            # Recursos estáticos
├── App.tsx            # Componente principal com roteamento
├── App.css            # Estilos customizados
├── index.css          # Estilos globais e Tailwind
└── main.tsx           # Ponto de entrada da aplicação
```

## 🎯 Funcionalidades

- ✅ Roteamento com React Router DOM
- ✅ Menu lateral responsivo com React Drawer
- ✅ Design responsivo com Tailwind CSS
- ✅ Paleta de cores personalizada
- ✅ TypeScript configurado
- ✅ Layout com header e navegação
- ✅ Páginas de exemplo (Home e About)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview da build
yarn preview

# Lint do código
yarn lint
```

## 🌐 Navegação

A aplicação possui as seguintes rotas:

- `/` - Página inicial
- `/about` - Página sobre

O menu pode ser acessado através do botão hambúrguer no header ou através da navegação desktop.

## 🎨 Customização

As cores podem ser facilmente customizadas no arquivo `tailwind.config.js`. Todas as cores estão definidas na seção `extend.colors` e podem ser usadas como classes Tailwind (ex: `bg-primary`, `text-secondary`, etc.).

## 📱 Responsividade

A aplicação é totalmente responsiva:
- Menu lateral em dispositivos móveis
- Navegação horizontal em desktop
- Grid responsivo para conteúdo
- Design adaptável para diferentes tamanhos de tela

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
