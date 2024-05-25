import { UUID } from "crypto";

export interface User {
    id: UUID;
    cnpj: number;
    name: string;
    email: string;
    password: string;
}