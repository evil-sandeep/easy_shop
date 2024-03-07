import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRouter from './routes/productRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();

connectDB()


app.use(express.json())
app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRouter)
app.use('/api/users', userRoutes)
const PORT = process.env.PORT;

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server  Running in ${process.env.NODE_ENV} on  port ${PORT}`.brightGreen.bold.inverse)
})