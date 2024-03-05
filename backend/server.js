import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRouter from './routes/productRouter.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

const app = express();
dotenv.config();

connectDB()


app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRouter)
const PORT = process.env.PORT;

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server  Running in ${process.env.NODE_ENV} on  port ${PORT}`.brightYellow.bold)
})