export interface Event {
    id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
    price?: number;
    categoryId: number;
    updatedAt: Date;
}

export interface CreateEvent {
    id: string;
    title: string;
    game: string;
    cashPrize: number;
    hour: string;
    description: string;
    number: string;
    date: Date;
    cpf: string;
    cardType: CardType;
    verificationCode: number;
    expirationCode: string;
}

export enum CardType {
    DEBITO = "DEBITO",
    CREDITO = "CREDITO"
}