import { AnketaGet, AnketaPost, AnketaPut, CardGet, regAPI } from "../API/userAPI";
import { loginAPI } from "../API/userAPI";
import { lentaAPI } from "../API/userAPI";

const SET_AUTH = "SET_AUTH_USER_REDUCER"
const SET_LOG = "SET_LOG_USER_REDUCER"
const SET_MESSAGE = "SET_MESSAGE_USER_REDUCER"
const SET_TOKEN = "SET_TOKEN_USER_REDUCER"
const SET_POST = "SET_POST_USER_REDUCER"
const SET_LENTA = "SET_LENTA_USER_REDUCER"
const SET_INTERESTS = "SET_INTERESTS_USER_REDUCER"
const SET_GET = "SET_GET_USER_REDUCER"
const SET_EXIT = "SET_EXIT_USER_REDUCER"
const SET_EVENT = "SET_EVENT_USER_REDUCER"
const SET_IND = "SET_IND_USER_REDUCER"
const SET_LK = "SET_LK_USER_REDUCER"
const SET_CARD = "SET_CARD_USER_REDUCER"
const SET_ISCARD = "SET_ISCARD_USER_REDUCER"
const SET_EV = "SET_EV_USER_REDUCER"

const defaultState= {
    currentUser: "",
    isAuth: false,
    message: "",
    isLog: false,
    lenta: [],
    interests: "",
    isPost: false,
    isGet: false,
    isExit: false,
    isEvent: false,
    Ind: [false,false,false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false],
    LK: false,
    iscard: false,
    Card: [],
    isEv: false
}

export default function userReducer(state=defaultState, action){
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth
            }
        case SET_IND:
            return{
                ...state,
                Ind: action.Ind
            }
        case SET_EV:
                return{
                    ...state,
                    isEv: action.isEv
                }
        case SET_LK:
                return{
                    ...state,
                    LK: action.LK
                }
        case SET_EXIT:
            return{
                ...state,
                isExit: action.isExit
            }
        case SET_LOG:
            return{
                ...state,
                isLog: action.isLog
            }
        case SET_POST:
            return{
                ...state,
                isPost: action.isPost
            }
        case SET_GET:
            return{
                ...state,
                isGet: action.isGet
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

        case SET_LENTA:
             return{
            ...state, 
            lenta: action.lenta
            }  
        case SET_INTERESTS:
            return{
            ...state, 
            interests: action.interests
            }     
        case SET_EVENT:
                return{
                ...state, 
                isEvent: action.isEvent
                }  
                
        case SET_ISCARD:
            return{
            ...state, 
            iscard: action.iscard
            }
        case SET_CARD:
                return{
                ...state, 
                Card: action.Card
                }                    
        
        default:
            return state
    }
}

const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
const setLog = (isLog) => ({type: SET_LOG, isLog});
const setMessage = (message) => ({type: SET_MESSAGE, message});
const setToken = (currentUser) => ({type: SET_TOKEN, currentUser});
const setPost = (isPost) => ({type: SET_POST, isPost});
const setGet = (isGet) => ({type: SET_GET, isGet});
const setlenta = (lenta) => ({type: SET_LENTA, lenta});
const setInterests = (interests) => ({type: SET_INTERESTS, interests});
const setExit = (isExit) => ({type: SET_EXIT, isExit});
const setEvent = (isEvent) => ({type: SET_EVENT, isEvent});
const setInd = (Ind) => ({type: SET_IND, Ind});
const setLK = (LK) => ({type: SET_LK, LK});
const setcard = (Card) => ({type: SET_CARD, Card});
const isCard = (iscard) => ({type: SET_ISCARD, iscard});
const isEv = (isEv) => ({type: SET_EV, isEv});

export const setRegistration = (login, password) => dispatch => {
    regAPI(login, password).then(res=>{
        dispatch(setAuth(true))
        alert(res.message) 
        debugger
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.response.data.message)
    });
}

export const setAuthorization = (login,password,token) => dispatch => {

     loginAPI(login, password).then(res=>{
        dispatch(setToken(res.token))
        dispatch(setExit(false))
        dispatch(setEvent(false))
        dispatch(setLog(true))

        AnketaGet(res.token).then(res=>{
            if (res.ind){
              dispatch(setGet(true))
              dispatch(setInd(res.ind))
            }
            dispatch(setExit(false))
            dispatch(setEvent(false))
            dispatch(setInterests(res.interests))
            debugger
 
        }, err=>{
            debugger
            dispatch(setMessage(err.toString()))
            //alert(err.response.data.message)
        });
        debugger
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.response.data.message)
    });

}




export const setLenta = (token, list) => dispatch => {
    lentaAPI(token, list).then(res=>{
        dispatch(setlenta(res))
        dispatch(setLK(false))
        dispatch(setEvent(false))
        dispatch(isCard(false))
        dispatch(isEv(true))
        
        //alert("Ok")
        debugger
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.toString())
    });
}
    
export const Anketa = (token, interests,inds, post, exit, get, Event,clear) => dispatch => {

    if (Event){
        lentaAPI(token, false).then(res=>{
            dispatch(setlenta(res))
            dispatch(setLK(false))  
            dispatch(isCard(false)) 
            dispatch(isEv(false)) 
            dispatch(setEvent(true))
            debugger
        }, err=>{
            debugger
            dispatch(setMessage(err.toString()))
            alert(err.toString())
        });
    }
    
    else 
        if (exit){
            lentaAPI('',false).then(res=>{debugger
                dispatch(setlenta(res))
                dispatch(setPost(false))
                dispatch(setGet(false))
                dispatch(setToken(""))
                dispatch(setLog(false))
                dispatch(setLK(false))
                dispatch(isEv(false))
                dispatch(setEvent(false))
                dispatch(setExit(true))
                alert("Вы вышли") 
                
            }, err=>{
                debugger
                dispatch(setMessage(err.toString()))
                alert(err.toString())
            });
        }

        else 
            if (post || get) {
                    AnketaPut(token, interests, inds).then(res=>{
                    dispatch(setExit(false))
                    dispatch(setEvent(false))
                    debugger
                    alert("Ваша анкета обновлена")
                }, err=>{
                    debugger
                    dispatch(setMessage(err.toString()))
                    alert(err.response.data.message)
                });
            }
            else if (clear) {
                AnketaGet(token).then(res=>{
                dispatch(setInd([false,false,false,false,false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
                    false,false,false,false,false,false,false,false,true]))
                dispatch(setExit(false))
                dispatch(setEvent(false))
                debugger
            }, err=>{
                debugger
                dispatch(setMessage(err.toString()))
                alert(err.toString())
            });      
            }
                 else {
                        AnketaPost(token, interests, inds).then(res=>{
                                debugger
                                dispatch(setPost(true))
                                dispatch(setExit(false))
                                dispatch(setEvent(false))
                                alert("Ваша анкета сохранена")
                            }, err=>{
                                debugger
                                dispatch(setMessage(err.toString()))
                                alert(err.response.data.message)
                            });
                        }
}

export const setlk = (event, token) => dispatch => {
    if(event){
        lentaAPI(token, false).then(res=>{
            dispatch(setlenta(res))
            dispatch(setLK(false))
            dispatch(setEvent(false))
            dispatch(isCard(false))
            dispatch(isEv(true))
            
            //alert("Ok")
            debugger
        }, err=>{
            debugger
            dispatch(setMessage(err.toString()))
            alert(err.toString())
        });
    }
    else {
        AnketaGet(token).then(res=>{
            if (res.ind){
                dispatch(setGet(true))
                dispatch(setInd(res.ind))
            }
            dispatch(setExit(false))
            dispatch(setEvent(false))
            dispatch(isEv(false))
            dispatch(isCard(false))
            dispatch(setLK(true))
            debugger
        }, err=>{
            debugger
            dispatch(setMessage(err.toString()))
            alert(err.toString())
        });
    }
}

export const setCard = (token, id) => dispatch => {
    CardGet(token, id).then(res=>{
        dispatch(setcard(res))
        dispatch(setEvent(false))
        dispatch(isEv(false))
        dispatch(isCard(true))
        
        debugger
    }, err=>{
        debugger
        dispatch(setMessage(err.toString()))
        alert(err.toString())
    });
}


