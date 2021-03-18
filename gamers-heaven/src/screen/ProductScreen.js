import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../Components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    
    const [product,setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }
        fetchProduct()
    }, [])

    return <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
        </Link>
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
                        <ListGroupItem>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroupItem>

                    </ListGroupItem>
                </Card>
            </Col>
        </Row>
    </>
}

export default ProductScreen
