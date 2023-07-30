import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { SlLogin } from 'react-icons/sl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import signupimg from '../Images/signupimg.svg'


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let [img,setImg] = useState(null);

    const onImageSelect = (event) => {
        setImg(event.target.files[0]);
    }

    const navigate = useNavigate();

    const onFormSubmit = (userObj) => {
        //create FormData object
        let formData = new FormData();
        //append values to it
        formData.append("userObj", JSON.stringify(userObj));
        formData.append("photo", img);
        //http post request
        axios.post('http://localhost:4000/user/createusers', formData)
            .then(response => {
                alert(response.data.message);
                //if user created successfully navigate to login as user
                if (response.data.message === 'User Created') {
                    navigate('/login')
                }

            })
            .catch(error => alert("Something went wrong"))
    }

    return (
        <div>
            <Container style={{marginTop:'3rem'}}>
                <Row>
                    <Col><img className='w-75 mx-auto mt-5' src={signupimg}></img></Col>
                    <Col>
            <h3 className="text-center mb-5">SignUp</h3>
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

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" {...register("email", { required: true })}></Form.Control>
                    {errors.email && <p className='text-danger'>* Email is required</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Upload Profile Picture</Form.Label>
                    <Form.Control type="file" placeholder="Upload your profile picture" {...register("photo")} onChange={(event) => onImageSelect(event)}></Form.Control>
                    {/* {errors.photo && <p className='text-danger'>* Email is required</p>} */}
                </Form.Group>

                <div className="text-center"><Button className="w-50 mx-auto" variant='success' type='submit'>
                    Signup <SlLogin />
                </Button></div>
            </Form></Col>
            </Row>
            </Container>
        </div>
    );
}

export default Signup;