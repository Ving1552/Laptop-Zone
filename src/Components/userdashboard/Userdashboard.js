import React from "react";
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import './UserDashboard.css'

function Userdashboard() {
    let { userObj } = useSelector((state) => state.user)

    return (
        <>
            <Nav className="justify-content-center mt-3" defaultActiveKey = "/profile">
                    <Nav.Item>
                        <Nav.Link to="profile" as={NavLink}>User Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="cart" as={NavLink}>
                            Cart
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="products" as={NavLink}>
                            Products
                        </Nav.Link>
                    </Nav.Item>
            </Nav>
            <div className="mt-3">
                <Outlet />
            </div>
        </>
    )
}

export default Userdashboard;