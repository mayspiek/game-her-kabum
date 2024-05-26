import { CreateEvent } from "../../models/Event";
import { HttpResponse, IHttpClient } from "../IHttpClient";

export interface ICreateEventRepository {
    createEvent(createEvent: CreateEvent): Promise<HttpResponse<CreateEvent>>;
}

export class CreateEventRepository implements ICreateEventRepository {
    constructor(private httpClient: IHttpClient) { }

    async createEvent(createEvent : CreateEvent): Promise<HttpResponse<CreateEvent>> {
        const response = await this.httpClient.post<CreateEvent>({ url: "/event/create", body: { email, password } });
        return response;
    }

    async register(user: User): Promise<HttpResponse<User>> {
        const response = await this.httpClient.post<User>({ url: "/user/register", body: user });
        return response;
    }

}