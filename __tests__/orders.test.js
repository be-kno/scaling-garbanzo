import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe( "POST /orders", () => {
    it("should create a new order and return 201 status code", async () => {
        const newOrder = {
            CustomerName: "Bob Brown",
            tableNumber: 13,
            orderDetails: [
                {
                dish: "Margherita Pizza",
                quantity: 3,
                price: 13.74,
                specialRequests: "Extra cheese"
                },
                {
                dish: "Caesar Salad",
                quantity: 2,
                price: 9.6,
                specialRequests: "Extra spicy"
                },
                {
                dish: "Margherita Pizza",
                quantity: 1,
                price: 13.62,
                specialRequests: "No onions"
                }
            ],
            orderTime: "2024-01-14T01:55:01.430060Z",
            isCompleted: true
        };

        const response = await request(app)
        .post('/orders')
        .send(newOrder);

        expect(response.statusCode).toBe(201);

    })
})