import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeimg from '../Images/homeimg.svg';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
    //get state from store
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    //get dispatch function
    let dispatch = useDispatch();

    return (
        <div>
            {isSuccess !== true ? (
            <>
                <Container className='mt-5'>
                    <Row>
                        <Col style={{marginTop : '7rem'}}><h2>Seamless Connectivity, Boundless Opportunities: Explore Our Laptops Today</h2></Col>
                        <Col><img className="w-100 mt-5" src={homeimg} alt="" /></Col>
                    </Row>
                </Container>
            </>
            )
            :
            (
            <>
            <div className='text-center'><h2>Welcome {userObj.username.substring(0,1).toUpperCase()}{userObj.username.substring(1)}!</h2></div>
            </>
            ) }
        </div>
    );
}

export default Home;