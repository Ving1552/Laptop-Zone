import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function Userprofile() {
    let { userObj } = useSelector((state) => state.user)
    return (
        <div>
            <Card style={{ width: '18rem' }} className='m-auto'>
                <Card.Body>
                    <Card.Title>Welcome {userObj.username.substring(0, 1).toUpperCase()}{userObj.username.substring(1)}</Card.Title>
                    <Card.Text>
                        {userObj.email}
                    </Card.Text>
                    {(userObj.address !== undefined) ? (
                        <Card.Text>
                            Address : {userObj.address}
                        </Card.Text>
                    ) : <></>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Userprofile;