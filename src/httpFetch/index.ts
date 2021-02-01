import { IHttpAdapter, IHttpDrivers } from "../Interfaces/IHttp"
import apiAxios from "./drivers/axios"
import apiFetch from "./drivers/fetch"

// A construção do adapter pode ser realizada de 2 formas distintas, via injeção de dependencia ou via dicionário de drivers. A primeira abordagem faz com que todas as demais partes do código do sistema utilizem o mesmo driver, garantindo a homogeneidade das chamadas utilizadas, porém caso seja necessário 2 formas distintas de realizar uma chamada http (ex: API Rest e GraphQL) então a 2 abordagem tende a ser a melhor opção, pois permite a escolha em cada componente de qual driver será utilizado, e repassando as informações corretamente para o responsável da chamada.
export const apiAdapter = ({driver = 'axios'}: IHttpDrivers): IHttpAdapter => {
    const drivers = {
        axios: apiAxios(),
        fetch: apiFetch(),
    }
    return drivers[driver]
}