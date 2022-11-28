import React from 'react'

export const Intercept = http => {
    const baseURL = process.env.REACT_APP_BASE_URL

    http.interceptors.request.use(
        config => {
            console.log('test')
            config.headers['Authorization'] = `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
            config.headers['content-type'] = 'application/json'
            return config
        },
        error => {
            console.log('error')
            return Promise.reject(error)
        }
    )

    http.interceptors.response.use(function(response) {
        return response
    }, function (error) {
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

export default Intercept