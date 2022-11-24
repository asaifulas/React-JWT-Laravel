import axios from 'axios'
import SetupInterceptors from './Intercept'

const http = axios.create({
    baseURL: "http://localhost:8000/api"
})

SetupInterceptors(http)

export default http