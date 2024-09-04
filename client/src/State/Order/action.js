import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_SUCCESS , GET_ORDER_BY_ID_REQUEST, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "./actiontype"
import { api } from "../../config/apiconfig"


export const createOrder = (reqData) =>async(dispatch)=>{
    dispatch({type: CREATE_ORDER_REQUEST})

    try{

        // const config ={
        //     headers:{
        //         'Content-Type':'application/json',
        //         Authorization: `Bearer ${reqData.jwt}`,
        //     }
        // }

        const {data} = await api.post(
            `/api/orders/`,
            reqData.address,
        )

        if(data._id){
            console.log("data id: ", data._id)
            reqData.navigate({search: `step=2&order_id=${data._id}`})
        }

        console.log('created order -', data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });

    }
    catch(error){
        console.log('catch error: ', error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,

        })

    }
}

export const getOrderById = (orderId) => async(dispatch) =>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST})

    try{
        const {data} = await api.get(
            `/api/orders/${orderId}`,
        )
        console.log('get order by id -', data);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        })
    }
    catch(error){
        console.log('catch ', error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        })
    }
}

export const getOrder =(reqData)=>async(dispatch)=>{
    dispatch({type: GET_ORDER_REQUEST})

    try{
        const {data}=await api.get(`/api/orders/all/`)
        console.log('orders: ', data);
        dispatch({type: GET_ORDER_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type: GET_ORDER_FAILURE, payload:error.message})
    }
}