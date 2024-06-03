import { FIND_PACKAGES_FAILURE, FIND_PACKAGES_REQUEST, FIND_PACKAGES_SUCCESS , FIND_PACKAGE_BY_ID_FAILURE, FIND_PACKAGE_BY_ID_REQUEST, FIND_PACKAGE_BY_ID_SUCCESS} from "./actiontype";
import { api } from "../../config/apiconfig";

export const findPackages = (reqData)=>async(dispatch) =>{
    dispatch({type:FIND_PACKAGES_REQUEST})
    const {category,discount} = reqData;
    try{
        const {data} = await api.get(`/api/packages?category=${category}&discount=${discount}`)
        console.log('package data', data);
        dispatch({type:FIND_PACKAGES_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:FIND_PACKAGES_FAILURE, payload:error.message})
    }
}

export const findPackagesById = (reqData)=>async(dispatch) =>{
    dispatch({type:FIND_PACKAGE_BY_ID_REQUEST})
    const {packageId} = reqData;
    try{
        const {data} = await api.get(`/api/packages/id/${packageId}`)
        console.log("data: ", data);
        dispatch({type:FIND_PACKAGE_BY_ID_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:FIND_PACKAGE_BY_ID_FAILURE, payload:error.message})
    }
}