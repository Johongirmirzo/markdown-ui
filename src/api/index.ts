import axios from "axios"
import {ENDPOINTS} from "../config/endpoints"

export const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    withCredentials: true
});

API.interceptors.request.use((config)=>{
    const user = JSON.parse(localStorage.getItem("user") || "null");
    console.log(user)
    if(user){
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${user.accessToken}`,
            RefreshToken: `Bearer ${user.refreshToken}`
        }
    }
    console.log(config)
    return config
}, err => {
    console.log(err);
})

API.interceptors.response.use(response =>{
    console.log("Server Response" ,response);
    return response
},
    error =>{
        console.log("Server Response", error);
        if(error.response.data?.isLoginRequired){
            localStorage.removeItem("user")
            window.location.href="/"
        }
})
 