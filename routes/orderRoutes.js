import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
        return res.status(200).send("OK!");
    } catch (err) {
        return res.status(500).send(err);

    }
});

router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch (err) {
        return res.status(400).json("Error: ", err);
    }
});

export default router;  
