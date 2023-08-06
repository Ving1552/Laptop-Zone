import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { IoMdLogIn } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loginimg from '../Images/loginimg.svg'


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const onFormSubmit = (userCredObj) => {
            dispatch(userLogin(userCredObj));
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/Userdashboard');
        }
    }, [isSuccess, isError]);

    return (
        <div>
            <Container style={{marginTop:'5rem'}}>
                <Row>
                    <Col><img className='w-75 mx-auto mt-5' src={loginimg}></img></Col>
                    <Col>
                        <h3 className="text-center mb-3 mt-5">Login</h3>
                        <Form className="w-100 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" {...register("username", { required: true })}></Form.Control>
                                {errors.username && <p className='text-danger'>* Username is required</p>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" {...register("password", { required: true })}></Form.Control>
                                {errors.password && <p className='text-danger'>* Password is required</p>}
                            </Form.Group>

                            <div className="text-center"><Button className="w-50 mx-auto" variant='success' type='submit'>
                                Login <IoMdLogIn />
                            </Button></div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;