import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('hello world!');
}) 

export default router;
