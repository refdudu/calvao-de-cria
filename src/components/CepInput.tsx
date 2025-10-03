import React, { useState, useEffect, forwardRef } from 'react';
import { FormInput } from './FormInput';
import { applyCepMask, removeCepMask, isValidCep } from '../utils/maskUtils';
import { cepService, type AddressData } from '../services/cepService';

interface CepInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onAddressFound?: (address: AddressData) => void;
  error?: string;
  placeholder?: string;
  [key: string]: any;
}

export const CepInput = forwardRef<HTMLInputElement, CepInputProps>(
  ({ value = '', onChange, onAddressFound, error, placeholder = "CEP", ...props }, ref) => {
    const [maskedValue, setMaskedValue] = useState(applyCepMask(value));
    const [isLoading, setIsLoading] = useState(false);
    const [cepError, setCepError] = useState<string | null>(null);

    // Atualiza o valor mascarado quando o valor externo muda
    useEffect(() => {
      setMaskedValue(applyCepMask(value));
    }, [value]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const masked = applyCepMask(inputValue);
      const unmasked = removeCepMask(inputValue);
      
      setMaskedValue(masked);
      setCepError(null);
      
      // Chama onChange com o valor não mascarado
      if (onChange) {
        onChange(unmasked);
      }

      // Se o CEP está completo, busca o endereço
      if (isValidCep(masked) && onAddressFound) {
        setIsLoading(true);
        try {
          const addressData = await cepService.fetchAddressByCep(unmasked);
          if (addressData) {
            onAddressFound(addressData);
          }
        } catch (err) {
          console.error('Erro ao buscar CEP:', err);
          setCepError(err instanceof Error ? err.message : 'Erro ao buscar CEP');
        } finally {
          setIsLoading(false);
        }
      }
    };

    return (
      <div className="relative">
        <FormInput
          {...props}
          ref={ref}
          value={maskedValue}
          onChange={handleChange}
          placeholder={placeholder}
          error={error || cepError || undefined}
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    );
  }
);