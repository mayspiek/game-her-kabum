import axios, { AxiosInstance } from "axios";
import { HttpRequest, HttpResponse, IHttpClient } from "./IHttpClient";

export class AxiosHttpClient implements IHttpClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://159.203.106.163:8080',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async get<T>({ url }: HttpRequest<T>): Promise<HttpResponse<T>> {
        return await this.axiosInstance.get<T>(url)
            .then(response => {
                return {
                    statusCode: response.status,
                    body: response.data
                };
            });
    }
    async post<T>({ url, body }: HttpRequest<T>): Promise<HttpResponse<T>> {
        return await this.axiosInstance.post<T>(url, body)
            .then(response => {
                return {
                    statusCode: response.status,
                    body: response.data
                };
            });
    }

}