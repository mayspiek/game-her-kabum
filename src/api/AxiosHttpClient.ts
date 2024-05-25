import axios, { AxiosInstance } from "axios";
import { HttpRequest, HttpResponse, IHttpClient } from "./IHttpClient";

export class AxiosHttpClient implements IHttpClient {
    private axiosInstance : AxiosInstance;

    constructor () {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8080',
            
        });
    }

    get<T>(url: HttpRequest<T>): Promise<HttpResponse<T>> {
        throw new Error("Method not implemented.");
    }
    post<T>({ url, body }: HttpRequest<T>): Promise<HttpResponse<T>> {
        throw new Error("Method not implemented.");
    }

}