enum StatusCode {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

export interface HttpResponse<T> {
    statusCode: StatusCode;
    body?: T;
}

export interface HttpRequest<T> {
    url: string;
    body?: T;
}

export interface IHttpClient {
    get<T>( url : HttpRequest<T> ): Promise<HttpResponse<T>>;
    post<T>( { url, body } : HttpRequest<T> ): Promise<HttpResponse<T>>;
}