export interface IHttpDrivers {
    driver?: 'axios' | 'fetch'
}

export interface IHttpAdapter {
    get: <T = any>(params: IHttpRequest) => Promise<IHttpResponse<T>>
    post?: <T = any>(params: IHttpRequest) => Promise<IHttpResponse<T>>
    put?: <T = any>(params: IHttpRequest) => Promise<IHttpResponse<T>>
    patch?: <T = any>(params: IHttpRequest) => Promise<IHttpResponse<T>>
    delete?: <T = any>(params: IHttpRequest) => Promise<IHttpResponse<T>>
}

export interface IHttpRequest {
    url: string
    params?: {
        [key: string]: string
    }
    headers?: {
        [key: string]: string
    }
}

export interface IHttpResponse<T = any> {
    status: number
    statusText: string
    data: T
}