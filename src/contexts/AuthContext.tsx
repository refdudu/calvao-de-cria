import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthContextType, LoginData, RegisterData, ForgotPasswordData, ResetPasswordData } from '../types';
import { authService, setAuthToken } from '../services/authService';

// Contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Props do provider
interface AuthProviderProps {
  children: ReactNode;
}

// Chaves do localStorage
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user'
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para salvar tokens no localStorage
  const saveTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    setAuthToken(accessToken);
  };

  // Função para remover tokens do localStorage
  const clearTokens = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setAuthToken(null);
  };

  // Função para salvar usuário no localStorage
  const saveUser = (userData: User) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    setUser(userData);
  };

  // Função de login
  const login = async (data: LoginData): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.login(data);
      
      const { user: userData, tokens } = response.data;
      
      saveTokens(tokens.accessToken, tokens.refreshToken);
      saveUser(userData);
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Função de registro
  const register = async (data: RegisterData): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.register(data);
      
      const { user: userData, tokens } = response.data;
      
      saveTokens(tokens.accessToken, tokens.refreshToken);
      saveUser(userData);
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Função de logout
  const logout = async () => {
    try {
      if (user) {
        await authService.logout(user.id);
      }
    } catch (error) {
      console.error('Erro no logout:', error);
    } finally {
      clearTokens();
      setUser(null);
    }
  };

  // Função para esqueci minha senha
  const forgotPassword = async (data: ForgotPasswordData): Promise<void> => {
    try {
      await authService.forgotPassword(data);
    } catch (error) {
      console.error('Erro ao solicitar redefinição de senha:', error);
      throw error;
    }
  };

  // Função para redefinir senha
  const resetPassword = async (data: ResetPasswordData): Promise<void> => {
    try {
      await authService.resetPassword(data);
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      throw error;
    }
  };

  // Função para atualizar token
  const refreshToken = async (): Promise<boolean> => {
    try {
      const storedRefreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
      
      if (!storedRefreshToken) {
        return false;
      }

      const response = await authService.refreshToken(storedRefreshToken);
      const newAccessToken = response.accessToken;
      
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, newAccessToken);
      setAuthToken(newAccessToken);
      
      return true;
    } catch (error) {
      console.error('Erro ao atualizar token:', error);
      clearTokens();
      setUser(null);
      return false;
    }
  };

  // Função para carregar usuário do localStorage
  const loadUserFromStorage = async () => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
      const storedAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

      if (storedUser && storedAccessToken) {
        setAuthToken(storedAccessToken);
        setUser(JSON.parse(storedUser));
        
        // Opcional: verificar se o token ainda é válido fazendo uma requisição
        try {
          const currentUser = await authService.getCurrentUser();
          saveUser(currentUser);
        } catch (error) {
          // Token inválido, tentar refresh
          const refreshed = await refreshToken();
          if (!refreshed) {
            clearTokens();
            setUser(null);
          }
        }
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar usuário quando o componente monta
  useEffect(() => {
    loadUserFromStorage();
  }, []);

  // Interceptador para refresh automático de token (pode ser implementado futuramente)
  useEffect(() => {
    // Aqui você pode adicionar um interceptador do axios para refresh automático
    // quando receber 401 Unauthorized
    
    return () => {
      // Cleanup se necessário
    };
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};