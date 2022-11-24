
const baseURL = "http://localhost:8000/api"
export const SetupInterceptors = http => {

    http.interceptors.request.use(
        config => {
            console.log('test')
            config.headers['Authorization'] = `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
            config.headers['content-type'] = 'application/json'
            return config
        },
        error => {
            console.log('error');
            return Promise.reject(error)
        }
    )
    // { Authorization: `Bearer ${token}` }
    http.interceptors.response.use(function(response) {
        console.log('res');
        return response
    }, function (error) {
        console.log('res-error');
        const status = error?.response?.status || 0
        const resBaseURL = error?.response?.config?.baseURL
        if (resBaseURL === baseURL && status === 401) {
            if (localStorage.getItem('token')) {
                localStorage.clear()
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