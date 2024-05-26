import { EventCreate } from "../../models/Event";
import { HttpResponse, IHttpClient } from "../IHttpClient";

export interface IEventCreateRepository {
    eventCreate(eventCreate: EventCreate): Promise<HttpResponse<EventCreate>>;
}

export class EventCreateRepository implements IEventCreateRepository {
    constructor(private httpClient: IHttpClient) { }

    async eventCreate(eventCreate: EventCreate): Promise<HttpResponse<EventCreate>> {
        const response = await this.httpClient.post<EventCreate>({ url: "/event/create/c7bd1cd9-4587-4f41-9ce4-27c606ad853e", body: eventCreate });
        return response;
    }
}