import React from "react";
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import './UserDashboard.css'

function Userdashboard() {
    let { userObj ,isSuccess} = useSelector((state) => state.user)

    return (
        <>
        { isSuccess === true ? 
        (
        <>
        <Nav className="justify-content-center mt-3" defaultActiveKey = "/profile">
                    <Nav.Item>
                        <Nav.Link to="profile" as={NavLink} className="udlinks">User Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="cart" as={NavLink} className="udlinks">
                            Cart
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="products" as={NavLink} className="udlinks">
                            Products
                        </Nav.Link>
                    </Nav.Item>
            </Nav>
            <div className="mt-3">
                <Outlet />
            </div>
        </>) 
        : 
        (<>
        <h1 className="mt-5 text-center">Please Login Again</h1>
        </>)
        }
        </>
    )
}

export default Userdashboard;