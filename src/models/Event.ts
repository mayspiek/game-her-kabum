export interface Event {
    id: string;
    name: string;
    description: string;
    date: Date;
    location: string;
    image: string;
    price?: number;
    categoryId: number;
    updatedAt: Date;
}

export interface EventCreate {
    id: string;
    type: string;
    title: string;
    game: string;
    cashPrize: number;
    hour: string;
    description: string;
    number: string;
    price: number;
    date: Date;
    cpf: string;
    cardType: CardType;
    verificationCode: string;
    expirationCode: string;
}

export enum PublicType {
    GENERAL = "Público Geral",
    FEMALE = "Público Feminino"
}

export enum CardType {
    DEBITO = "DEBITO",
    CREDITO = "CREDITO"
}