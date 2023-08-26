import Footer from './Components/footer/Footer'
import Header from './Components/navbar/Header';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <div className='footer mt-3'>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
