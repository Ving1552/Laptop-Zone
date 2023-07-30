import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { IoMdLogIn } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { clearLoginStatus } from '../slices/userSlice';
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
        if (userCredObj.userType === 'user') {
            dispatch(userLogin(userCredObj));
            // if(isError === true) {
            //     if(errMsg === 'User not found') {
            //         alert('Username invalid - Please check your username');
            //         dispatch(clearLoginStatus());
            //     }
            //     else if(errMsg === 'User password incorrect') {
            //         alert('Password incorrect - Please check your password')
            //         dispatch(clearLoginStatus());
            //     }
            // }
        }
        else {
            alert('Admin Login not implemented...');
            // dispatch(adminLogin(userCredObj));
        }

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
                            {/* user type */}
                            <Form.Group>
                                <Form.Label className='me-3'>Login as : </Form.Label>
                                <Form.Check inline type='radio' id='user'>
                                    <Form.Check.Input
                                        type="radio"
                                        value="user"
                                        {...register("userType", { required: true })}
                                    />
                                    <Form.Check.Label>User</Form.Check.Label>
                                </Form.Check>
                                <Form.Check inline type='radio' id='admin'>
                                    <Form.Check.Input
                                        type="radio"
                                        value="admin"
                                        {...register("userType", { required: true })}
                                    />

                                    <Form.Check.Label>Admin</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            {errors.userType && <p className='text-danger'>* Please select user type</p>}
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