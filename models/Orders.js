import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    tableNumber: {
        type: Number,
        required: true
    },
    orderDetails: [{
        dish: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number,
            required: true
        },
        specialRequests: String
    }],
    orderTime: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Order = model('Order', orderSchema);

export default Order;
