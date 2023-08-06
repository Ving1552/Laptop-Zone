import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Button, Col, Row } from 'react-bootstrap';

function ViewProducts() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      //http get request
      const data = await axios.get('http://localhost:4000/product/getproducts');
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Container className='mx-auto mt-5' style={{marginBottom : '8rem'}}>
        <Row>
          {products && products?.data.payload.map((product) => (
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.laptopName}</Card.Title>
              <Card.Title>{product.cost}</Card.Title>
              <Card.Text>
                {product.specs}
              </Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
        )
        )}
        </Row>
      </Container>
    </div>
  )
}

export default ViewProducts;