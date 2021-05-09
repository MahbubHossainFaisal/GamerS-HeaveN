import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Form, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../Components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'


const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    return <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
        </Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                    {/* fluid will make the image to be inside the container and stop it from going outside of it. */}
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        {/*flush variant takes away the border */}
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroupItem variant='flush'>
                            {/*flush variant takes away the spacing */}
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Price:
                            </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Status:
                            </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {product.countInStock > 0 && (
                                <ListGroupItem>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}> {x + 1} </option>

                                                ))}
                                            </Form>
                                        </Col>
                                    </Row>
                                </ListGroupItem>

                            )}
                            <ListGroupItem>
                                <Button className='btn-block'
                                    type='button' disabled={product.countInStock === 0}
                                    onClick={addToCartHandler}>Add To Cart</Button>
                            </ListGroupItem>

                        </ListGroupItem>
                    </Card>
                </Col>
            </Row>
        )}

    </>
}

export default ProductScreen
