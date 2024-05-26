export enum Role {
    ROLE_ADMIN,
    ROLE_USER,
    ROLE_ORGANIZADOR
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
    gender: String,
    email: String,
    card?: String,
    cpf?: String,
    role?: Role
}
