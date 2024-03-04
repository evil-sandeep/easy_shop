import express from 'express';
import dotenv from 'dotenv'
import products from  './data/products.js'

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send('Api is running')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server  Running in ${process.env.NODE_ENV} on  port ${PORT}`)
})