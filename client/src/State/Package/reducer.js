import { FIND_PACKAGES_FAILURE, FIND_PACKAGES_REQUEST, FIND_PACKAGES_SUCCESS, FIND_PACKAGE_BY_ID_FAILURE, FIND_PACKAGE_BY_ID_REQUEST, FIND_PACKAGE_BY_ID_SUCCESS } from "./actiontype"

const initialState = {
    packages:[],
    package:null,
    loading:false,
    error:null
}


export const customerPackageReducer=(state=initialState, action)=>{

    switch(action.type){
        case FIND_PACKAGES_REQUEST:
        case FIND_PACKAGE_BY_ID_REQUEST:
            return {...state, loading:true, error:null}

        case FIND_PACKAGES_SUCCESS:
            return {...state, loading:false, packages:action.payload, error:null}
        case FIND_PACKAGE_BY_ID_SUCCESS:
            return { ...state, loading: false, error:null, package:action.payload}

        case FIND_PACKAGES_FAILURE:
        case FIND_PACKAGE_BY_ID_FAILURE:
            return {...state,loading:false, error:action.payload}

        default:
            return state;
    }
}