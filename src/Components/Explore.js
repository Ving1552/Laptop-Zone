import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bestsellersimg from '../Images/bestsellersimg.svg';
import gaminglaptopimg from '../Images/gaminglaptopimg.svg';
import studentlaptopimg from '../Images/studentlaptopimg.svg';
import worklaptopimg from '../Images/worklaptopimg.svg';

function Explore() {
    return (
        <div className='mt-5 mx-auto d-block'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Container className='mt-5 mb-3'>
                        <Row>
                            <Col style={{ marginTop: '7rem', marginLeft: '10rem' }}><Row><h1>Best Sellers</h1></Row>
                                <Row><p>Explore our best sellers</p></Row>
                            </Col>
                            <Col><img className="w-75" src={bestsellersimg} alt="" /></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className='mt-5 mb-5'>
                        <Row>
                            <Col style={{ marginTop: '7rem', marginLeft: '10rem' }}><Row><h1>For Work</h1></Row>
                                <Row><p>Explore laptops for your work needs</p></Row>
                            </Col>
                            <Col><img className="w-100 mt-3" src={worklaptopimg} alt="" /></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className='mt-5'>
                        <Row>
                            <Col style={{ marginTop: '7rem', marginLeft: '10rem' }}><Row><h1>For Students</h1></Row>
                                <Row><p>Discover laptops for students</p></Row>
                            </Col>
                            <Col><img className="w-75 mt-1" src={studentlaptopimg} alt="" /></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className='mt-5 mb-5'>
                        <Row>
                            <Col style={{ marginTop: '7rem', marginLeft: '10rem' }}><Row><h1>For Gaming</h1></Row>
                                <Row><p>Find gaming essentials</p></Row>
                            </Col>
                            <Col><img className="w-100 mt-3" src={gaminglaptopimg} alt="" /></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Explore;