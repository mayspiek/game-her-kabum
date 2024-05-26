export enum Role {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
    ROLE_ORGANIZADOR = "ROLE_ORGANIZADOR"
  }
  
  export enum Gender {
    MASCULINO = "masculino",
    FEMININO = "feminino",
  }

export interface UserLogin {
    email: string;
    password: string;
}

export interface User {
    id?: string,
    name: String,
    username: String,
    password: String,
    gender: Gender,
    email: String,
    card?: String,
    cpf?: String,
    role?: Role
}
