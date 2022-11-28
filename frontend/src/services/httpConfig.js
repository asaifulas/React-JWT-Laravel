import axios from 'axios'
import Intercept from './intercept'


    const http = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL
    })

    Intercept(http)



export default http
