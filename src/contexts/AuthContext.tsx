import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type {
  User,
  AuthContextType,
  LoginData,
  RegisterData,
  ForgotPasswordData,
  ResetPasswordData,
  AuthResponse,
} from "../types";
import { authService, setAuthToken } from "../services/authService";
import { api } from "@/utils/api";
import { cookieUtils, AUTH_COOKIE_KEYS, COOKIE_EXPIRY } from "../utils/cookieUtils";

// Contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

// Props do provider
interface AuthProviderProps {
  children: ReactNode;
}



export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para salvar tokens nos cookies
  const saveTokens = (accessToken: string, refreshToken: string) => {
    cookieUtils.set(AUTH_COOKIE_KEYS.ACCESS_TOKEN, accessToken, COOKIE_EXPIRY.ACCESS_TOKEN);
    cookieUtils.set(AUTH_COOKIE_KEYS.REFRESH_TOKEN, refreshToken, COOKIE_EXPIRY.REFRESH_TOKEN);
    setAuthToken(accessToken);
  };

  // Função para remover tokens dos cookies
  const clearTokens = () => {
    cookieUtils.removeMultiple([
      AUTH_COOKIE_KEYS.ACCESS_TOKEN,
      AUTH_COOKIE_KEYS.REFRESH_TOKEN,
      AUTH_COOKIE_KEYS.USER
    ]);
    setAuthToken(null);
  };

  // Função para salvar usuário nos cookies
  const saveUser = (userData: User) => {
    cookieUtils.set(AUTH_COOKIE_KEYS.USER, JSON.stringify(userData), COOKIE_EXPIRY.USER);
    setUser(userData);
  };

  // Função de login
  const login = async (data: LoginData): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await authService.login(data);
      console.log("🚀 ~ login ~ response:", response.data);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.tokens.accessToken}`;
      const { tokens } = response.data;

      saveTokens(tokens.accessToken, tokens.refreshToken);
      const user = await authService.getCurrentUser();
      saveUser(user);
    } catch (error) {
      console.error("Erro no login:", error);
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

      const { tokens } = response.data;

      saveTokens(tokens.accessToken, tokens.refreshToken);
      //   saveUser(userData);
    } catch (error) {
      console.error("Erro no registro:", error);
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
      console.error("Erro no logout:", error);
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
      console.error("Erro ao solicitar redefinição de senha:", error);
      throw error;
    }
  };

  // Função para redefinir senha
  const resetPassword = async (data: ResetPasswordData): Promise<void> => {
    try {
      await authService.resetPassword(data);
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      throw error;
    }
  };

  // Função para atualizar token
  const refreshToken = async (): Promise<boolean> => {
    try {
      const storedRefreshToken = cookieUtils.get(AUTH_COOKIE_KEYS.REFRESH_TOKEN);

      if (!storedRefreshToken) {
        return false;
      }

      const response = await authService.refreshToken(storedRefreshToken);
      const newAccessToken = response.accessToken;

      cookieUtils.set(AUTH_COOKIE_KEYS.ACCESS_TOKEN, newAccessToken, COOKIE_EXPIRY.ACCESS_TOKEN);
      setAuthToken(newAccessToken);

      return true;
    } catch (error) {
      console.error("Erro ao atualizar token:", error);
      clearTokens();
      setUser(null);
      return false;
    }
  };

  // Função para carregar usuário dos cookies
  const loadUserFromCookies = async () => {
    try {
      const storedUser = cookieUtils.get(AUTH_COOKIE_KEYS.USER);
      const storedAccessToken = cookieUtils.get(AUTH_COOKIE_KEYS.ACCESS_TOKEN);

      if (storedUser && storedAccessToken) {
        try {
          // Tentar fazer parse do usuário armazenado
          const parsedUser = JSON.parse(storedUser);
          setAuthToken(storedAccessToken);
          setUser(parsedUser);

          // Verificar se o token ainda é válido fazendo uma requisição
          try {
            const currentUser = await authService.getCurrentUser();
            saveUser(currentUser);
          } catch (error) {
            console.warn("Token inválido, tentando refresh...");
            // Token inválido, tentar refresh
            const refreshed = await refreshToken();
            if (!refreshed) {
              console.warn("Refresh token também inválido, fazendo logout...");
              clearTokens();
              setUser(null);
            }
          }
        } catch (parseError) {
          console.error("Erro ao fazer parse dos dados do usuário:", parseError);
          clearTokens();
          setUser(null);
        }
      } else {
        console.log("Nenhum usuário ou token encontrado nos cookies");
      }
    } catch (error) {
      console.error("Erro ao carregar usuário dos cookies:", error);
      clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar usuário quando o componente monta
  useEffect(() => {
    loadUserFromCookies();
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
