import { User } from "../../models/User";
import { HttpResponse, IHttpClient } from "../IHttpClient";

export interface IUserRegisterRepository {
    register(user: User): Promise<HttpResponse<User>>;
}

export class UserRegisterRepository implements IUserRegisterRepository {
    constructor(private httpClient: IHttpClient) { }

    async register(user: User): Promise<HttpResponse<User>> {
        const response = await this.httpClient.post<User>({ url: "/user/register", body: user });
        return response;
    }
}