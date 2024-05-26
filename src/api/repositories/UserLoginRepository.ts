import { UserLogin } from "../../models/User";
import { HttpResponse, IHttpClient } from "../IHttpClient";

export interface IUserLoginRepository {
    login(userLogin: UserLogin): Promise<HttpResponse<UserLogin>>;
}

export class UserLoginRepository implements IUserLoginRepository {
    constructor(private httpClient: IHttpClient) { }

    async login({ email, password }: UserLogin): Promise<HttpResponse<UserLogin>> {
        const response = await this.httpClient.post<UserLogin>({ url: "/user/login", body: { email, password } });
        return response;
    }

}