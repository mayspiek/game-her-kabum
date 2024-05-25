import { IHttpClient } from "../IHttpClient";

export type WelcomeMessage = string;

export interface IWelcomeRepository {
    getWelcomeMessage(): Promise<WelcomeMessage>;
}

export class WelcomeRepository implements IWelcomeRepository {
    constructor(private httpClient: IHttpClient) {}

    async getWelcomeMessage(): Promise<WelcomeMessage> {
        return await this.httpClient.get<WelcomeMessage>({ url: "/welcome" }).then((response) => {
            return response.body!
        });
    }
}