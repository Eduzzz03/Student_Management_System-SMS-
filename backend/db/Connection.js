import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://abhi02167:Abhi@cluster1.65dle.mongodb.net/sms?retryWrites=true&w=majority&appName=cluster1'; // Change as needed

const connectDB = () => {
  return mongoose.connect(MONGO_URI, {
  })
  .then(() => console.log('DB connected successfully'))
  .catch(err => {
    console.error('DB connection error:', err);
    throw err;
  });
};

export default connectDB;
