import * as axios from 'axios';

const ms = axios.create({
    baseURL: "http://ec2-3-82-198-202.compute-1.amazonaws.com:8000"
})

export const regAPI = (login, password) => {
    debugger
    return ms.post("/register/", {login, password}).then(res=>res.data)
}

export const loginAPI = (login, password) => {
    return ms.post("/login/", {login, password}).then(res=>res.data)
}

export const lentaAPI = (currentUser, list) => {

    if (list.lenght > 0)
        return ms.get("/feed?token="+currentUser+"&tags="+list, {currentUser,list}).then(res=>res.data)
    
    else
        return ms.get("/feed?token="+currentUser, {currentUser,list}).then(res=>res.data)
}