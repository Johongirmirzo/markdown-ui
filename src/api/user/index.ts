import {ENDPOINTS} from "../../config/endpoints"
import {API} from "../index"

interface LoginUserDataInterface {
    email: string;
    password: string;
    
}

interface UserDataInterface {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const registerUser = async (userData: UserDataInterface)=>{
    return await API.post(ENDPOINTS.REGISTER_USER, userData)
}
const loginUser = async (userData: LoginUserDataInterface)=>{
    return await API.post(ENDPOINTS.LOGIN_USER, userData)
}
const logoutUser = async ()=>{
    return await API.post(ENDPOINTS.LOGOUT_USER)
}
export {
    registerUser,
    loginUser,
    logoutUser
}