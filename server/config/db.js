import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  dbName: 'ecommerce',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log('🎉 Connected!');
  process.exit(0);
})
.catch(err => {
  console.error('❌ Connection error:', err);
  process.exit(1);
});
