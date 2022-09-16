import axios from "axios"
import {ENDPOINTS} from "../config/endpoints"

export const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
    withCredentials: true,
    
})

API.interceptors.response.use(response =>{
    return response;
}, err =>{
    if(err.response?.data?.loginRequired){
        localStorage.removeItem("user");
        localStorage.setItem("session", "Your session has expired. Please login again.");
        window.location.href = "/"
    }
    console.log(err)
})