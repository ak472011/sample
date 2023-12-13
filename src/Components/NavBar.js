import React from 'react'
import {Navbar, Nav, Col, Container,Row } from 'react-bootstrap';
import logo from './Images/Logo.png';
import banner_desk from './Images/Banner_Desktop.png';
import banner_tab from './Images/Banner_Tab.png';
import banner_mob from './Images/Banner_Mobile.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
        {/* Desktop View */}
        <div className="d-none d-lg-block">
            <Container fluid>
                <Row>
                    <Col lg={2} className='left-navigation' style={{'backgroundColor':'#008795'}}>
                        <div className='title'>
                          <img src={logo} className='site_logo' alt='alt_img'/>
                          <span className='title_name'>LOGO</span>
                        </div>
                        <div className='navigation'>
                            <Navbar>
                                <Nav className='flex-column'>
                                    <Nav.Link href="#home" className='links'>DASHBOARD</Nav.Link>
                                    <Nav.Link href="#sevices" className='links'>OUR SERVICES</Nav.Link>
                                    <Nav.Link href="#products" className='links'>PRODUCTS</Nav.Link>
                                    <Nav.Link href="#newsletters" className='links'>NEWS LETTERS</Nav.Link>
                                    <Nav.Link href="#offers" className='links'>OFFERS</Nav.Link>
                                    <Nav.Link href="#contact" className='links'>CONTACT US</Nav.Link>
                                    <Nav.Link href="#logout" className='links'>LOG OUT</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                    <Col lg={10} className='dashboard'>
                        <div>
                            <img src={banner_desk} className='desk_img' alt='alt_img'/>
                            <h1 className='dashboard_name'>Dashboard</h1>
                        </div>
                        <div className='heading d-flex'>
                            <div className='head1'>
                                <p>Heading 1 - Point of View</p>
                            </div>
                            <div className='head2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam purus vel leo eleifend, quis consectetur nisl blandit. Donec id tincidunt elit, sed lobortis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris et mi vel tortor eleifend sollicitudin. Sed vulputate, enim eu efficitur bibendum, massa enim placerat mauris, a venenatis nisi lorem ac mauris. </p>
                            </div>
                        </div>  
                    </Col> 
                </Row>
            </Container>
        </div>

        {/* Tablet */}
        <div className="d-none d-lg-none d-md-block">
            <Container fluid>
                <Row>
                    <Col md={2} className='left-navigation' style={{'backgroundColor':'#008795'}}>
                        <div className='title_md'>
                          <img src={logo} className='site_logo' alt='alt_img'/>
                          <span className='title_name_md'>LOGO</span>
                        </div>
                        <div className='navigation'>
                            <Navbar>
                                <Nav className='flex-column'>
                                    <Nav.Link href="#home" className='links'>DASHBOARD</Nav.Link>
                                    <Nav.Link href="#sevices" className='links'>OUR SERVICES</Nav.Link>
                                    <Nav.Link href="#products" className='links'>PRODUCTS</Nav.Link>
                                    <Nav.Link href="#newsletters" className='links'>NEWS LETTERS</Nav.Link>
                                    <Nav.Link href="#offers" className='links'>OFFERS</Nav.Link>
                                    <Nav.Link href="#contact" className='links'>CONTACT US</Nav.Link>
                                    <Nav.Link href="#logout" className='links'>LOG OUT</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                    <Col md={10} className='dashboard'>
                        <div>
                            <img src={banner_tab} className='desk_img' alt='alt_img'/>
                            <h1 className='dashboard_name'>Dashboard</h1>
                        </div>
                        <div className='heading d-flex'>
                            <div className='head1'>
                                <p>Heading 1 - Point of View</p>
                            </div>
                            <div className='head2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam purus vel leo eleifend, quis consectetur nisl blandit. Donec id tincidunt elit, sed lobortis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris et mi vel tortor eleifend sollicitudin. Sed vulputate, enim eu efficitur bibendum, massa enim placerat mauris, a venenatis nisi lorem ac mauris. </p>
                            </div>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>

        {/*Mobile View*/}
        <div className='d-block d-md-none'>
          <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='title_sm d-flex' style={{'backgroundColor':'#008795'}}>
                        <div>
                            <img src={logo} className='site_logo' alt='alt_img'/>
                            <span className='title_name_sm'>LOGO</span>
                        </div>
                        <div>
                            <Navbar variant='dark' expand='large'>
                            <Navbar.Toggle aria-controls='navbarNav'/>
                            <Navbar.Collapse id='navbarNav'>
                                <Nav className = 'mr-auto' style={{'backgroundColor':'#333333'}}>
                                    <Nav.Link href="#home" className='links'>DASHBOARD</Nav.Link>
                                    <Nav.Link href="#sevices" className='links'>OUR SERVICES</Nav.Link>
                                    <Nav.Link href="#products" className='links'>PRODUCTS</Nav.Link>
                                    <Nav.Link href="#newsletters" className='links'>NEWS LETTERS</Nav.Link>
                                    <Nav.Link href="#offers" className='links'>OFFERS</Nav.Link>
                                    <Nav.Link href="#contact" className='links'>CONTACT US</Nav.Link>
                                    <Nav.Link href="#logout" className='links'>LOG OUT</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                    <div className='dashboard'>
                      <img src={banner_mob} className='mob_img' alt='alt_img'/>
                    </div>
                    <div className='heading_sm'>
                            <div className='head1_sm'>
                                <p>Heading 1 - Point of View</p>
                            </div>
                            <div className='head2_sm'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam purus vel leo eleifend, quis consectetur nisl blandit. Donec id tincidunt elit, sed lobortis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris et mi vel tortor eleifend sollicitudin. </p>
                            </div>
                    </div>
                </Col>
            </Row>
          </Container>
        </div>

        
    </div>
  )
}

export default NavBar;