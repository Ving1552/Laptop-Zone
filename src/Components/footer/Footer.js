// Footer.js
import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { HiMail, HiPhone } from 'react-icons/hi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
      <div className="footer-middle">
        <Container className="wrapper ">
          <Row>
            <div className="col-md-3 col-sm-6 footer-content-left">
              <h4>About Us</h4>
              <p>LaptopZone. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, accusamus</p>
            </div>
            <div className="col-md-3 col-sm-6 footer-content-left footer-content-right">
              <h4>Contact Us</h4>
              <p className='contact-us'><HiMail /> Email : LaptopZone@email.com</p>
              <p className='contact-us'><HiPhone /> Phone No : +1 (123) 456-789</p>
            </div>
            <div className="col-md-3 col-sm-6 footer-content-left">
              <h4>Follow Us</h4>
              <ul className='list-unstyled'>
                <li className="social-media-names"><BsFacebook /> Facebook</li>
                <li className="social-media-names"><BsInstagram /> Instagram</li>
                <li className="social-media-names"><BsTwitter /> Twitter</li>
              </ul>
            </div>
          </Row>
          <hr/>
          {/* Footer Bottom */}
          <div className="footer-bottom text-center">
            <p>
              © {new Date().getFullYear()} LaptopZone. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
  );
};

export default Footer;
