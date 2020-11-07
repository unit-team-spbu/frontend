import * as axios from 'axios';

const ms = axios.create({
    baseURL: "http://ec2-18-206-58-70.compute-1.amazonaws.com:8000"
})

export const regAPI = (login, password) => {
    debugger
    return ms.post("/register/", {login, password}).then(res=>res.data)
}

export const loginAPI = (login, password) => {
    return ms.post("/login/", {login, password}).then(res=>res.data)
}