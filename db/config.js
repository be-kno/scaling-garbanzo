import mongoose from 'mongoose';

export async function dbConnection() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      // console.log('Connected to MongoDB :D');
    } catch (err) {
      // console.error('Could not connect to MongoDB :(', err);
      process.exit(1); // essential to connect
    }
  }

export async function isDatabaseReady() {
    try {
        const { readyState } = mongoose.connection;
        if (readyState === 1) {
            return true;
        } else {
            await mongoose.connection.db.admin().ping();
            return true;
        }
    } catch (error) {
        console.error('Database health check failed:', error);
        return false;
    }
}