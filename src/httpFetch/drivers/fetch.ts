import { IHttpAdapter, IHttpRequest, IHttpResponse } from "../../Interfaces/IHttp"


const apiFetch = (): IHttpAdapter => {
    const get = async <T>({url, params, headers}: IHttpRequest): Promise<IHttpResponse<T>> => {
        // O Fetch não possui um atributo params para enviar os query_params, então fazemos um map e adicionamos ao final da url
        const query_params = Object.entries(params!)?.map(([key, value]) => (`${key}=${value}`)).join('&')
        const response = await (await fetch(`${url}?${query_params}`, {method: 'get'}))
        const parsedData = await response.json()
        return {status: response.status, statusText: response.statusText, data: parsedData}
    }

    return {get}
}

export default apiFetch