import * as axios from 'axios';

const ms = axios.create({
    baseURL: "http://20.52.2.24:8000"
})

export const regAPI = (login, password) => {
    debugger
    return ms.post("/register/", {login, password}).then(res=>res.data)
}

export const loginAPI = (login, password) => {
    return ms.post("/login/", {login, password}).then(res=>res.data)
}

export const lentaAPI = (currentUser, list) => {

    return ms.post("/feed", {currentUser, list}).then(res=>res.data)
    
}

export const AnketaPost = (currentUser, interests, inds) => {
    return ms.post("/profile/interests", {currentUser, interests, inds}).then(res=>res.data)
}

export const AnketaPut = (currentUser, interests, inds) => {
    return ms.put("/profile/interests", {currentUser, interests,inds}).then(res=>res.data)
}

export const AnketaGet = (currentUser) => {
    return ms.get("/profile/interests", {params: currentUser}).then(res=>res.data)
}

export const CardGet = (currentUser, id) => {
    return ms.get("feed/"+id, {params: currentUser}).then(res=>res.data)
}

