import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Productcard from '../card/Productcard';

function ViewProducts() {
  const [products, setProducts] = useState("");

  // After refreshing page keep re-rendering
  useEffect(() => {
    const fetchData = async () => {
      //http get request
      const data = await axios.get('http://localhost:4000/product/getproducts');
      setProducts(data);
    };
    fetchData();
  }, []);


  return (
    <div>
      <Container className='mx-auto mt-5' style={{ marginBottom: '8rem' }}>
        <Row>
          {products && products?.data.payload.map((product) => (
            <Col>
              {/* Card component here */}
              {/* send prod as prop to card component */}
              <Productcard data={product} />
            </Col>
          )
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ViewProducts;