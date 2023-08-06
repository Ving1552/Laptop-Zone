import { Route, Routes, NavLink, useNavigate, Navigate } from 'react-router-dom'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Home from '../Home'
import Explore from '../Explore'
import Signup from '../Signup'
import Login from '../Login'
import Userprofile from "../user-profile/Userprofile";
import Cart from "../cart/Cart";
import Products from "../view-products/ViewProducts";
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoginStatus } from '../../slices/userSlice';
import Userdashboard from '../userdashboard/Userdashboard';

function Header() {
  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
  //get dispatch function
  let dispatch = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate('/login');
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink className='nav-link' to="/"><h3 style={{ color: 'white' }}>LaptopZone</h3></NavLink>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-elements">
            {isSuccess !== true ? (
              <>
                <NavLink className='nav-link' to="/" >Home</NavLink>
                <NavLink className='nav-link' to="/signup">Signup</NavLink>
                <NavLink className='nav-link' to="/login">Login</NavLink>
                <NavLink className='nav-link' to="/explore">Explore</NavLink>
              </>
            ) : (

              <>
                <NavDropdown title={userObj.username.substring(0).toUpperCase()}{...userObj.username.substring(1)}
                  id="collapsible-nav-dropdown" className='text-primary'
                >
                  <NavDropdown.Item>Change Password</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={userLogout}>Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <img className = "user-img" src={userObj.profileImg}></img>
              </>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/userdashboard' element={<Userdashboard />} >
          <Route path="profile" element={<Userprofile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          {/* Navigating to profile when child path is empty */}
          <Route path="" element={<Navigate to="profile" replace={true} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Header;