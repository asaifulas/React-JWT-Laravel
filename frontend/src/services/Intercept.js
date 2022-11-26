import { ToastContainer, toast } from 'react-toastify';

const baseURL = "http://localhost:8000/api"
export const SetupInterceptors = http => {

    http.interceptors.request.use(
        config => {
            config.headers['Authorization'] = `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
            config.headers['content-type'] = 'application/json'
            return config
        },
        error => {
            return Promise.reject(error)
        }
        )
    
    http.interceptors.response.use((response)=> {
        return response
    }, (error)=> {
        console.log(error.response?.status);
        const status = error?.response?.status || 0
        const resBaseURL = error?.response?.config?.baseURL
        if (resBaseURL === baseURL && status === 401) {

            if (sessionStorage.getItem('token')) {
                sessionStorage.clear()
                window.location.assign('/')
                return Promise.reject(error)
            } else {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    })

}

export default SetupInterceptors