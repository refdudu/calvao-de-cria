// Função para aplicar máscara de CEP (00000-000)
export const applyCepMask = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const cleanValue = value.replace(/\D/g, '');
  
  // Aplica a máscara 00000-000
  if (cleanValue.length <= 5) {
    return cleanValue;
  } else {
    return cleanValue.slice(0, 5) + '-' + cleanValue.slice(5, 8);
  }
};

// Função para aplicar máscara de telefone (00) 00000-0000 ou (00) 0000-0000
export const applyPhoneMask = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const cleanValue = value.replace(/\D/g, '');
  
  // Aplica a máscara baseada no tamanho
  if (cleanValue.length <= 2) {
    return cleanValue;
  } else if (cleanValue.length <= 6) {
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
  } else if (cleanValue.length <= 10) {
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6)}`;
  } else {
    // Para celular com 11 dígitos: (00) 00000-0000
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`;
  }
};

// Função para remover máscara do CEP
export const removeCepMask = (value: string): string => {
  return value.replace(/\D/g, '');
};

// Função para remover máscara do telefone
export const removePhoneMask = (value: string): string => {
  return value.replace(/\D/g, '');
};

// Função para validar CEP completo
export const isValidCep = (cep: string): boolean => {
  const cleanCep = removeCepMask(cep);
  return cleanCep.length === 8;
};

// Função para validar telefone
export const isValidPhone = (phone: string): boolean => {
  const cleanPhone = removePhoneMask(phone);
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};