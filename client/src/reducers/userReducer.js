import { regAPI } from "../API/userAPI";
import { loginAPI } from "../API/userAPI";

const SET_AUTH = "SET_AUTH_USER_REDUCER"
const SET_LOG = "SET_LOG_USER_REDUCER"
const SET_MESSAGE = "SET_MESSAGE_USER_REDUCER"
const SET_TOKEN = "SET_TOKEN_USER_REDUCER"

const defaultState= {
    currentUser: "",
    isAuth: false,
    message: "",
    isLog: false
}

export default function userReducer(state=defaultState, action){
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth
            }
        case SET_LOG:
            return{
                ...state,
                isLog: action.isLog
            }
        case SET_MESSAGE:
            return{
                ...state, 
                message: action.message
            }
        case SET_TOKEN:
            return{
                ...state, 
                 currentUser: action.currentUser
            }   
        default:
            return state
    }
}

const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
const setLog = (isLog) => ({type: SET_LOG, isLog});
const setMessage = (message) => ({type: SET_MESSAGE, message});
const setToken = (currentUser) => ({type: SET_TOKEN, currentUser});

export const setRegistration = (login, password) => dispatch => {
    regAPI(login, password).then(res=>{
        debugger
        dispatch(setAuth(true))
        alert(res.message)
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.toString())
    });
}

export const setAuthorization = (login,password) => dispatch => {
     loginAPI(login, password).then(res=>{
         debugger
        dispatch(setToken(res.token))
        dispatch(setLog(true))
        debugger
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.toString())
    });
}

    