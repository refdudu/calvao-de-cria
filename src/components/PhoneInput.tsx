import React, { useState, useEffect, forwardRef } from 'react';
import { FormInput } from './FormInput';
import { applyPhoneMask, removePhoneMask } from '../utils/maskUtils';

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  [key: string]: any;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = '', onChange, error, placeholder = "Telefone", ...props }, ref) => {
    const [maskedValue, setMaskedValue] = useState(applyPhoneMask(value));

    // Atualiza o valor mascarado quando o valor externo muda
    useEffect(() => {
      setMaskedValue(applyPhoneMask(value));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const masked = applyPhoneMask(inputValue);
      const unmasked = removePhoneMask(inputValue);
      
      setMaskedValue(masked);
      
      // Chama onChange com o valor não mascarado
      if (onChange) {
        onChange(unmasked);
      }
    };

    return (
      <FormInput
        {...props}
        ref={ref}
        value={maskedValue}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
      />
    );
  }
);