import { body, validationResult } from 'express-validator';

export const validateOrder = [
    body('customerName').trim().notEmpty().withMessage('Customer name is required'),
    body('tableNumber').isInt({ gt: 0 }).notEmpty().withMessage('Table number must be a positive integer'),
    body('orderDetails').isArray().notEmpty().withMessage('Order details must be an array'),
    body('orderDetails.*.dish').trim().notEmpty().withMessage('Dish name is required'),
    body('orderDetails.*.quantity').notEmpty().isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
    body('orderDetails.*.price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('orderDetails.*.specialRequests').optional().trim(),
    body('isCompleted').optional().isBoolean().withMessage('isCompleted must be a boolean'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];