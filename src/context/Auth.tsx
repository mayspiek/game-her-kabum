import React, { ReactNode, createContext, useState, useEffect } from "react";
import { UserLoginService } from "../api/services/UserLoginService";
import { AxiosHttpClient } from "../api/AxiosHttpClient";
import { UserLoginRepository } from "../api/repositories/UserLoginRepository";
import { UserLogin } from "../models/User";
import { HttpResponse } from "../api/IHttpClient";

type AuthContextType = {
    user: UserLogin | null;
    Login: ({ email, password }: UserLogin) => Promise<HttpResponse<UserLogin> | string>;
    Logout: () => void;
    isLogged: boolean;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  Login: async () => { throw new Error("Login function not implemented"); },
  Logout: () => { throw new Error("Logout function not implemented"); },
  isLogged: false
};

export const AuthContext = createContext<AuthContextType | undefined>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserLogin | null>(null);
  const [timeout, setTimeoutState] = useState<Date | null>(null);
  const isLogged = user !== null && timeout !== null;

  useEffect(() => {
    const storedUser = localStorage.getItem("@auth:user");
    const storedTimeout = localStorage.getItem("@auth:timeout");

    if (storedUser && storedTimeout) {
      setUser(JSON.parse(storedUser));
      setTimeoutState(new Date(storedTimeout));
    }
  }, [isLogged]);

  const Login = async ({ email, password }: UserLogin): Promise<HttpResponse<UserLogin> | string> => {
    const loginService = new UserLoginService(new UserLoginRepository(new AxiosHttpClient()));

    const response = await loginService.login({ email, password });

    if (response.statusCode === 200 && response.body) {
      setUser(response.body);
      const timeoutDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
      setTimeoutState(timeoutDate);

      localStorage.setItem("@auth:user", JSON.stringify(response.body));
      localStorage.setItem("@auth:timeout", JSON.stringify(timeoutDate));

      return response; 

    } else {
      return "Usuário ou senha inválidos!";
    }
  };

  const Logout = () => {
    setUser(null);
    setTimeoutState(null);
    localStorage.removeItem("@auth:user");
    localStorage.removeItem("@auth:timeout");
    alert("Deslogado com sucesso!");
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

