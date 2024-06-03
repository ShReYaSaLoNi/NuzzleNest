import { ADD_ITEM_TO_BOOKING_FAILURE, ADD_ITEM_TO_BOOKING_REQUEST, ADD_ITEM_TO_BOOKING_SUCCESS, REMOVE_BOOKING_REQUEST, REMOVE_BOOKING_FAILURE, REMOVE_BOOKING_SUCCESS, GET_BOOKING_FAILURE, GET_BOOKING_REQUEST, GET_BOOKING_SUCCESS , UPDATE_BOOKING_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS} from "./actiontype"
import { api } from "../../config/apiconfig"


export const getBooking =(reqData)=>async(dispatch)=>{
    dispatch({type: GET_BOOKING_REQUEST})

    try{
        const {data}=await api.get(`/api/booking/`)
        console.log('booking: ', data);
        dispatch({type: GET_BOOKING_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: GET_BOOKING_FAILURE, payload:error.message})
    }
}

export const addItemToBooking =(reqData)=>async(dispatch)=>{
    dispatch({type: ADD_ITEM_TO_BOOKING_REQUEST})

    try{
        const {data}=await api.put('/api/booking/add', reqData)
        dispatch({type: ADD_ITEM_TO_BOOKING_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: ADD_ITEM_TO_BOOKING_FAILURE, payload:error.message})
    }
}

export const removeBooking =(bookedPackageId)=>async(dispatch)=>{
    dispatch({type: REMOVE_BOOKING_REQUEST})

    try{
        const {data}=await api.delete(`/api/bookedPackage/${bookedPackageId}`)
        dispatch({type: REMOVE_BOOKING_SUCCESS, payload:bookedPackageId})
    }
    catch(error){
        dispatch({type: REMOVE_BOOKING_FAILURE, payload:error.message})
    }
}

export const updateBooking =(reqData)=>async(dispatch)=>{
    dispatch({type: UPDATE_BOOKING_REQUEST})

    try{
        const {data}=await api.put(`/api/bookedPackage/${reqData.bookedPackageId}`, reqData.data)
        dispatch({type: UPDATE_BOOKING_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: UPDATE_BOOKING_FAILURE, payload:error.message})
    }
}


