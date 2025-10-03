# Implementação de Máscaras e Busca Automática de CEP

## Resumo das Melhorias

Este documento descreve as melhorias implementadas no formulário de endereços, incluindo máscaras para CEP e telefone, além da busca automática de cidade/estado baseada no CEP.

## 1. Utilitários de Máscara

### Arquivo: `src/utils/maskUtils.ts`

**Funcionalidades implementadas:**
- Aplicação de máscara para CEP (00000-000)
- Aplicação de máscara para telefone ((00) 00000-0000 ou (00) 0000-0000)
- Remoção de máscaras
- Validação de CEP e telefone

**Principais funções:**
```typescript
// Máscaras
applyCepMask(value: string): string
applyPhoneMask(value: string): string

// Remoção de máscaras
removeCepMask(value: string): string
removePhoneMask(value: string): string

// Validações
isValidCep(cep: string): boolean
isValidPhone(phone: string): boolean
```

**Comportamento das máscaras:**
- **CEP**: Aplica formato 00000-000 automaticamente
- **Telefone**: Detecta se é celular (11 dígitos) ou fixo (10 dígitos) e aplica formato apropriado
  - Fixo: (00) 0000-0000
  - Celular: (00) 00000-0000

## 2. Serviço de Busca de CEP

### Arquivo: `src/services/cepService.ts`

**Integração com ViaCEP:**
- Busca automática de endereço baseada no CEP
- Tratamento de erros e validações
- Interface limpa para uso nos componentes

**Estrutura de dados:**
```typescript
interface AddressData {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}
```

**Funcionalidades:**
- Validação de CEP (8 dígitos)
- Consulta à API do ViaCEP
- Tratamento de CEPs inválidos
- Retorno de dados estruturados

## 3. Componente CepInput

### Arquivo: `src/components/CepInput.tsx`

**Características:**
- Aplica máscara automaticamente durante a digitação
- Busca endereço quando CEP está completo (8 dígitos)
- Indicador visual de carregamento
- Tratamento de erros da API
- Callback para receber dados do endereço encontrado

**Props principais:**
```typescript
interface CepInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onAddressFound?: (address: AddressData) => void;
  error?: string;
  placeholder?: string;
}
```

**Funcionalidades:**
- Máscara automática (00000-000)
- Busca automática quando CEP completo
- Estado de loading com spinner
- Propagação de erros da API
- Integração com react-hook-form

## 4. Componente PhoneInput

### Arquivo: `src/components/PhoneInput.tsx`

**Características:**
- Aplica máscara automaticamente durante a digitação
- Detecta automaticamente se é telefone fixo ou celular
- Formatação adequada para cada tipo

**Props principais:**
```typescript
interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
}
```

**Funcionalidades:**
- Máscara dinâmica baseada no número de dígitos
- Suporte a telefone fixo (10 dígitos) e celular (11 dígitos)
- Integração com react-hook-form

## 5. Atualização do Formulário de Endereço

### Arquivo: `src/pages/AddressForm.tsx`

**Principais mudanças:**
- Substituição dos inputs padrão pelos componentes com máscara
- Registro manual dos campos customizados no react-hook-form
- Preenchimento automático dos campos quando CEP é encontrado
- Remoção de máscaras antes do envio para API

**Fluxo de preenchimento automático:**
1. Usuario digita CEP
2. Quando CEP atinge 8 dígitos, busca é feita automaticamente
3. Se endereço encontrado, campos são preenchidos:
   - Rua
   - Bairro
   - Cidade
   - Estado
4. Usuario preenche os campos restantes

**Tratamento de dados:**
- Máscaras são removidas antes do envio para API
- Validações consideram valores não mascarados
- Campos são preenchidos automaticamente quando CEP é válido

## 6. Melhorias na UX

### Feedback Visual
- **Loading spinner** no campo CEP durante busca
- **Mensagens de erro** específicas para cada situação
- **Preenchimento automático** suave dos campos

### Validações Melhoradas
- CEP: Validação de 8 dígitos após remoção da máscara
- Telefone: Validação de 10-11 dígitos com suporte a fixo e celular
- Tratamento de erros da API do ViaCEP

### Máscaras Inteligentes
- **CEP**: Aplica hífen automaticamente no local correto
- **Telefone**: Detecta tipo e aplica formato apropriado
- **Entrada flexível**: Aceita valores com ou sem máscara

## 7. Integração com Sistema Existente

### Compatibilidade
- Mantém compatibilidade total com a API existente
- Não quebra funcionalidades existentes do formulário
- Integração suave com react-hook-form

### Exportação de Componentes
```typescript
// src/components/index.ts
export { CepInput } from './CepInput';
export { PhoneInput } from './PhoneInput';
```

### Reutilização
- Componentes podem ser reutilizados em outros formulários
- Lógica de máscara isolada em utilitários
- Serviço de CEP pode ser usado em outras partes do sistema

## 8. Benefícios Implementados

### Para o Usuário
- **Experiência melhorada**: Máscaras automáticas durante digitação
- **Menos trabalho**: Preenchimento automático de endereço
- **Feedback claro**: Indicadores visuais de carregamento e erro
- **Validação em tempo real**: Erros mostrados imediatamente

### Para o Desenvolvedor
- **Código limpo**: Componentes reutilizáveis e bem estruturados
- **Manutenibilidade**: Lógica isolada em utilitários e serviços
- **Extensibilidade**: Fácil adicionar novas máscaras ou validações
- **Testabilidade**: Funções puras para máscaras e validações

### Para a API
- **Dados limpos**: Máscaras removidas antes do envio
- **Validação prévia**: Dados validados no frontend
- **Menos erros**: Formato correto garantido pelas máscaras

## 9. Tecnologias Utilizadas

- **React**: Componentes funcionais com hooks
- **React Hook Form**: Gerenciamento de formulário
- **TypeScript**: Tipagem forte e interfaces bem definidas
- **ViaCEP API**: Busca automática de endereços
- **CSS/Tailwind**: Estilização e feedback visual

## 10. Pontos de Extensão Futuros

### Máscaras Adicionais
- CPF/CNPJ
- Cartão de crédito
- Data/hora
- Valores monetários

### Melhorias na Busca de CEP
- Cache de resultados
- Busca offline
- Suporte a outros provedores de CEP

### Validações Avançadas
- Validação de telefone por DDD
- Verificação de CEP existente
- Formatação automática de nomes