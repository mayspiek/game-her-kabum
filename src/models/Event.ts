export interface Event {
    id: number;
    name: string;
    description: string;
    date: Date;
    location: string;
    image: string;
    price?: number;
    categoryId: number;
    updatedAt: Date;
}