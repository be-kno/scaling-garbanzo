import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB :D '))
  .catch(err => console.error('Could not connect to MongoDB :( '));

app.get('/', (req, res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});