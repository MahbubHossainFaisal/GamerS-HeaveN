import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listProducts } from '../Components/actions/productActions'


const HomeScreen = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>) :
                (<Row>
                    {products.map(product => {
                        return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    })}
                </Row>)}

        </>
    )
}

export default HomeScreen
