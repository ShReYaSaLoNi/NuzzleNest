import { ADD_ITEM_TO_BOOKING_FAILURE, ADD_ITEM_TO_BOOKING_REQUEST, ADD_ITEM_TO_BOOKING_SUCCESS, GET_BOOKING_FAILURE, GET_BOOKING_REQUEST, GET_BOOKING_SUCCESS, REMOVE_BOOKING_FAILURE, REMOVE_BOOKING_REQUEST, REMOVE_BOOKING_SUCCESS, UPDATE_BOOKING_FAILURE, UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS } from "./actiontype"

const initialState={
    booking: null,
    loading: false,
    error: null,
    bookedPackages: [],
}

export const bookingReducer = (state= initialState, action)=>{
 
    switch(action.type){
        case ADD_ITEM_TO_BOOKING_REQUEST:
            return {...state, loading: true, error: null};
        case ADD_ITEM_TO_BOOKING_SUCCESS:
            return {...state, loading: false, bookedPackages: [...state.bookedPackages, action.payload.bookedPackages]};
        case ADD_ITEM_TO_BOOKING_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_BOOKING_REQUEST:
            return {...state, loading: true, error: null};
        case GET_BOOKING_SUCCESS:
            return {...state, bookedPackages: action.payload.bookedPackages, booking: action.payload, loading: false};
        case GET_BOOKING_FAILURE:
            return {...state, loading: false, error: action.payload};
        case REMOVE_BOOKING_REQUEST:
        case UPDATE_BOOKING_REQUEST:
            return {...state, loading: true, error: null};
        case REMOVE_BOOKING_SUCCESS:
            return {...state, removebookedPackages: action.payload, loading: false};
        case UPDATE_BOOKING_SUCCESS:
            return {...state, updatebookedPackages: action.payload, loading:false};
        case REMOVE_BOOKING_FAILURE:
        case UPDATE_BOOKING_FAILURE:
            return {...state, error: action.payload, loading:false}

        default:
            return state;
    }
}