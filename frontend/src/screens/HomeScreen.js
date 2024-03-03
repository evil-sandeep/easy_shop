import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';
import Products from '../components/Products';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchproduct = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data);
        }
        fetchproduct()
    },[])
    return (
        <>
            <h1>Latest Product</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen