import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './config/database.js'; 
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send("API Working Fine");
});


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection established");

    await sequelize.sync(); 
    console.log("MySQL DB synced");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.error("DB connection or sync error:", err);
    process.exit(1); 
  }
};

startServer();
