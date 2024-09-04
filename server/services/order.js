const bookingService = require('../services/booking')
const Address = require('../models/address');
const Order = require('../models/order');
const OrderItem = require('../models/orderitems');

async function createOrder(user,shipAddress){
    let address;

    if(shipAddress._id){
        let existAddress = await shipAddress.findById(shipAddress._id);
        address =existAddress;
    }
    else{
        address = new Address(shipAddress);
        address.user =  user;
        await address.save();

        user.address.push(address);
        await user.save();
    }

    const booking = await bookingService.findUserBooking(user._id);

    console.log("BOOKING   "+booking);
    const orderItems = [];
    
    for(const item of booking.bookedPackages){
        const orderItem = new OrderItem({
            price:item.price,
            packages:item.packages,
            quantity: item.quantity,
            category: item.category,
            user: item.user,
            discountedPrice: item.discountedPrice,
        }) 

        const createOrderItem = await orderItem.save();
        orderItems.push(createOrderItem)
    }


    const createOrder = new Order({
        user,
        orderItems,
        totalPrice:booking.totalPrice,
        totalDiscountedPrice:booking.totalDiscountedPrice,
        discounts:booking.totalPrice - booking.totalDiscountedPrice,
        totalItems:booking.totalItems,
        shipAddress:address,
    })

    const savedOrder = await createOrder.save();

    return savedOrder;
}

async function placeOrder(orderId){

    const order = await findOrderById(orderId);

    order.orderStatus = "Placed";
    order.paymentDetails="Completed";

    return await order.save();

}

async function confirmOrder(orderId){

    const order = await findOrderById(orderId);

    order.orderStatus = "Confirmed";

    return await order.save();

}

async function deliverOrder(orderId){

    const order = await findOrderById(orderId);

    order.orderStatus = "Delivered";

    return await order.save();

}

async function cancelOrder(orderId){

    const order = await findOrderById(orderId);

    order.orderStatus = "Cancelled";

    return await order.save();

}

async function findOrderById(orderId){

const order = await Order.findById(orderId)
.populate("user")
.populate({path:"orderItems", populate:{path:"packages"}})
.populate("shippingAddress")


return order;
}

async function usersOrderHistory(userId){
    try{
        const orders = await Order.find({user:userId, orderStatus:'Placed' })
        .populate({path:'orderItems', populate:{path:'packages'}}).lean()

        return orders;
    }
    catch(error){
        throw new Error(error.meassage);
    }
}

async function getAllOrders(){
    return await Order.find()
    .populate({path:'orderItems',populate:{path:'packages'}}).lean()
}

async function deleteOrder(orderId){  
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
}

module.exports={
    createOrder, placeOrder, cancelOrder, deliverOrder, confirmOrder, findOrderById, usersOrderHistory, getAllOrders, deleteOrder}
