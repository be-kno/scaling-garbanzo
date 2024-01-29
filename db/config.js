import mongoose from 'mongoose';

export async function dbconnection() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB :D');
    } catch (err) {
      console.error('Could not connect to MongoDB :(', err);
      process.exit(1); // essential to connect
    }
  }