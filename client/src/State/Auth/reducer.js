import { LOGIN_REQUEST, REGISTER_REQUEST, GET_USER_REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, GET_USER_SUCCESS, REGISTER_FAILURE, LOGIN_FAILURE, GET_USER_FAILURE, LOGOUT } from './actiontype';

const initialState={
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export const authReducer = (state = initialState, action) =>{
   
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading : true, error:null}
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading:false, error:null, jwt:action.payload}
        case GET_USER_SUCCESS:
            return {...state,user:action.payload, isLoading:false, error: null}
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error:action.payload}
        case LOGOUT:
            return {...initialState}
        
        default:
            return state;
    }
}
