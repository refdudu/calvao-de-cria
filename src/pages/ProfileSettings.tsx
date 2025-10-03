import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormInput, PhoneInput } from "../components";
import { useProfile } from "../contexts/ProfileContext";
import { removePhoneMask, isValidPhone } from "../utils/maskUtils";
import type { UpdateUserData } from "../types";

interface ProfileFormData {
  name: string;
  phone: string;
}

export const ProfileSettingsPage = () => {
  const { user, isLoadingUser, userError, updateUserProfile } = useProfile();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>();

  const phoneValue = watch("phone");

  // Registrar campo de telefone customizado
  useEffect(() => {
    register("phone", {
      required: "Telefone é obrigatório",
      validate: (value) => {
        const cleanPhone = removePhoneMask(value);
        return isValidPhone(cleanPhone) || "Telefone deve ter 10 ou 11 dígitos";
      }
    });
  }, [register]);

  // Preencher formulário quando dados do usuário carregarem
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      setIsUpdating(true);
      setUpdateSuccess(false);
      
      const updateData: UpdateUserData = {
        name: data.name,
        phone: removePhoneMask(data.phone),
      };

      const success = await updateUserProfile(updateData);
      
      if (success) {
        setUpdateSuccess(true);
        setTimeout(() => setUpdateSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoadingUser) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Carregando dados do perfil...</p>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="text-center text-red-500">
        <p>{userError}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-text-primary border-b pb-4">
        Meus dados
      </h2>
      
      {updateSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Dados atualizados com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name", { 
            required: "Nome é obrigatório",
            minLength: {
              value: 2,
              message: "Nome deve ter pelo menos 2 caracteres"
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]+$/,
              message: "Nome deve conter apenas letras e espaços"
            }
          })}
        />
        
        <FormInput
          placeholder="Email"
          type="email"
          value={user?.email || ""}
          disabled
          className="bg-gray-100 cursor-not-allowed"
        />
        
        <FormInput
          placeholder="CPF"
          value={user?.cpf || ""}
          disabled
          className="bg-gray-100 cursor-not-allowed"
        />
        
        <FormInput
          placeholder="Data de Nascimento"
          type="date"
          value={user?.birthDate || ""}
          disabled
          className="bg-gray-100 cursor-not-allowed"
        />
        
        <PhoneInput
          placeholder="Número de Telefone"
          error={errors.phone?.message}
          value={phoneValue || ""}
          onChange={(value: string) => setValue("phone", value)}
        />

        <div className="mt-4 flex justify-end">
          <div className="w-full md:w-auto md:max-w-xs">
            <Button 
              type="submit"
              disabled={isUpdating || !isDirty}
            >
              {isUpdating ? "Salvando..." : "Salvar dados"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

