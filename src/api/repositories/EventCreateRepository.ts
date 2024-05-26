import { EventCreate } from "../../models/Event";
import { HttpResponse, IHttpClient } from "../IHttpClient";

export interface IEventCreateRepository {
    createEvent(eventCreate: EventCreate): Promise<HttpResponse<EventCreate>>;
}

export class EventCreateRepository implements IEventCreateRepository {
    constructor(private httpClient: IHttpClient) { }

    async createEvent(eventCreate: EventCreate): Promise<HttpResponse<EventCreate>> {
        const response = await this.httpClient.post<EventCreate>({ url: "/event/create", body: eventCreate });
        return response;
    }
}