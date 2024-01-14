import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    try {
        const orders = await Order.find()
            .sort({ _id: 1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();

        const total = await Order.countDocuments();

        res.status(200).json({
            data: orders,
            count: orders.length,
            page,
            totalPages: Math.ceil(total / limit),
            total
        });
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json("Error: ", err);
    }
});


// NOT WORKING YET
router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send("Order not found!");
        }
        return res.status(200).send(`Item ${order._id}`);
    } catch (err) {
        return res.status(500).send(err);
    }
})

export default router;  
