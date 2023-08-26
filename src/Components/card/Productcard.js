import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';

function Productcard(props) {
  const {
    addItem,
    items,
    cartTotal,
    updateItemQuantity
  } = useCart();
  
  const navigate = useNavigate();

  const showCart = () => {
    navigate('/Userdashboard/Cart');
  }

  const product = props.data;

  return (
    <Card style={{ width: '20rem', height: '34rem', marginBottom:'2rem' }}>
      <Card.Img variant="top" src={product.image} style={{ height: '13rem' }} />
      <hr />
      <Card.Body>
        <Card.Title>{product.laptopName}</Card.Title>
        <Card.Title>₹ {product.price.toLocaleString('en-IN')}</Card.Title>
        <Card.Text>
          {product.specs}
        </Card.Text>
          <Button variant="success" onClick=
            {() => {
              addItem(product)
              alert('Product added to cart successfully');
            } }
          >Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Productcard;