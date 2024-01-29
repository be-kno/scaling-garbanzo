import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

// ! fix: getUptime function

const serverInfo = {
  Project: "Scaling-Garbanzo",
  Description: "Restaurant Order Management System",
  Version: "1.0.0",
  Uptime: process.uptime(),
  Owner: "Bernardo Knoblauch"
};

if (process.env.NODE_ENV === 'development') console.table(serverInfo);

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB :D');
  } catch (err) {
    console.error('Could not connect to MongoDB :(', err);
    // Handle the error appropriately
    // For instance, you might want to exit the process if the database connection is essential
    process.exit(1);
  }
}

connectToDatabase();

app.get('/', (req, res) => {
  serverInfo.Uptime = process.uptime();
  res.render('status', { serverInfo });
});

app.use('/orders', orderRoutes);

function getUptime() {
  return process.uptime();
}

export default app;