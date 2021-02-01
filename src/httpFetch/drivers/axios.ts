import axios from 'axios';
import { IHttpAdapter, IHttpRequest, IHttpResponse } from '../../Interfaces/IHttp';

const apiAxios = (): IHttpAdapter => {
    const get = async <T>({url, params, headers}: IHttpRequest): Promise<IHttpResponse<T>> => {
        const {data, status, statusText} = await axios.get(url, {
            params: params,
            headers: headers,
        })
        return {data, status, statusText}
    }

    return {get}
}

export default apiAxios