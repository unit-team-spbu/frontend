import * as axios from 'axios';

const ms = axios.create({
    baseURL: "http://ec2-52-207-239-198.compute-1.amazonaws.com:8000"
})

export const regAPI = (login, password) => {
    debugger
    return ms.post("/register/", {login, password}).then(res=>res.data)
}

export const loginAPI = (login, password) => {
    return ms.post("/login/", {login, password}).then(res=>res.data)
}

export const lentaAPI = (currentUser, list) => {

    return ms.post("/feed/", {currentUser, list}).then(res=>res.data)
    
}

export const eventAPI = (currentUser) =>{
    return ms.get("/feed/",{currentUser}).then(res=>res.data)
}