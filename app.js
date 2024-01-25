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

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB :D '))
  .catch(err => console.error('Could not connect to MongoDB :( '));

app.get('/', (req, res) => {
  serverInfo.Uptime = process.uptime();
  res.render('status', { serverInfo });
});

app.use('/orders', orderRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
}); 

function getUptime() {
  return process.uptime();
}
