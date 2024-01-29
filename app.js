import express from 'express';
import dotenv from 'dotenv';
import { dbconnection } from './db/config.js';

import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

// TODO: fix getUptime function

const serverInfo = {
  Project: "Scaling-Garbanzo",
  Description: "Restaurant Order Management System",
  Version: "1.0.0",
  Uptime: process.uptime(),
  Owner: "Bernardo Knoblauch"
};

if (process.env.NODE_ENV === 'development') console.table(serverInfo);

dbconnection();

app.get('/', (req, res) => {
  serverInfo.Uptime = process.uptime();
  res.render('status', { serverInfo });
});

app.use('/orders', orderRoutes);

function getUptime() {
  return process.uptime();
}

export default app;