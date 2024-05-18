import Axios, {AxiosInstance} from 'axios'



const api : AxiosInstance = Axios.create({
    baseURL: `https://viacep.com.br/ws`

});

export const getAndress = async (cep: string) => {
    try {
        const response = await api.get(`/${cep}/json/`)
        return response.data
    } catch (error) {
        console.error(error)
    }

}

export default api

