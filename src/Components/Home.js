import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeimg from '../Images/homeimg.svg';

function Home() {
    return (
        <div className='mt-5 mx-auto d-block'>
            <Container className='mt-5'>
                <Row>
                    <Col style={{ marginTop: '7rem' }}><h2>Seamless Connectivity, Boundless Opportunities: Explore Our Laptops Today</h2></Col>
                    <Col style={{ marginTop: '7rem' }}><img className="w-100" src={homeimg} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;