import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Table from 'react-bootstrap/Table';
import EmptyCart from '../../Images/emptycart.svg'

function Cart() {

  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return (
    <div style={styles.container}>
      <img src={EmptyCart} style={styles.image} alt="Empty Cart" />
      <h1 style={styles.text}>Your Cart Is Empty</h1>
    </div>
  );

  return (
    <div>
      <Container className='mx-auto mt-5' style={{ marginBottom: '8rem' }}>
        <Table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {items.map((product) => (
            <tbody>
              <tr>
                <td style={{ width: '3px', marginRight: '5rem' }}><img src={product.image}></img></td>
                <td style={{ fontSize: 'large' }}>{product.laptopName}</td>
                <td style={{ fontSize: 'large' }}>₹ {product.price.toLocaleString('en-IN')}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button className='btn ms-2' style={{ fontSize: 'large' }}>{product.quantity}</button>
                  <button
                    className="btn btn-info ms-2"
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove Item
                  </button>
                </td>
              </tr>
            </tbody>
          )
          )}
        </Table>
        <div className='mb-2'><h4>Total price : ₹ {cartTotal.toLocaleString('en-IN')}</h4></div>
        <Button variant="success" className='mt-2'>Checkout</Button>
        <Button variant="danger" className='mt-2 ms-3' onClick={emptyCart}>Empty Cart</Button>
      </Container>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  image: {
    width: '25%',
    maxWidth: '250px' // Adding a maximum width to ensure image doesn't get too large
  },
  text: {
    marginTop: '20px', // Adding some space between the image and text
    textAlign: 'center'
  }
};

export default Cart;