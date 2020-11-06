import { regAPI } from "../API/userAPI";
import * as axios from 'axios'

const SET_AUTH = "SET_AUTH_USER_REDUCER"
const SET_MESSAGE = "SET_MESSAGE_USER_REDUCER"

const defaultState= {
    currentUser: {},
    isAuth: false,
    message: ""
}

export default function userReducer(state=defaultState, action){
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth
            }
        case SET_MESSAGE:
            return{
                ...state, 
                message: action.message
            }
        default:
            return state
    }
}

const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
const setMessage = (message) => ({type: SET_MESSAGE, message});

export const setRegistration = (login, password) => dispatch => {
    regAPI(login, password).then(res=>{
        dispatch(setAuth(true))
        alert(res.message)
    }, err=>{
        dispatch(setMessage(err.toString()))
        alert(err.toString())
    });
}

/*export const auth = (login,password) => {
    debugger
    return async dispatch => {
            try{
                const response = await axios.post("http://ec2-3-91-232-201.compute-1.amazonaws.com:8000/login", {
                login,
                password 
            })  
            console.log(response.data)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}*/