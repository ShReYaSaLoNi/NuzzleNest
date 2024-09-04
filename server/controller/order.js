const orderService = require('../services/order');

const createOrder  = async (req, res) => {
    const user = await req.user;
    try{
        let createdOrder = await orderService.createOrder(user,req.body);
        console.log(createdOrder);
        return res.status(201).send(createdOrder);
    }
    catch(error){
        console.log(error);
        return res.status(500).send({error:error.message}) 
    }
}

const findOrderById  = async (req, res) => {
    const user = await req.user;
    try{
        let createdOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createdOrder);
    }
    catch(error){
        return res.status(500).send({error:error.message}) 
    }
}

const orderHistory  = async (req, res) => {
    const user = await req.user;
    try{
        let createdOrder = await orderService.orderHistory(user._id);
        return res.status(201).send(createdOrder);
    }
    catch(error){
        return res.status(500).send({error:error.message}) 
    }
}


const getAllOrders = async(req,res)=>{
    try{
        const orders = await orderService.getAllOrders();

        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error: error.message})
    }
}

module.exports = { createOrder, orderHistory, findOrderById, getAllOrders};