import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Easy Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/cart"> <i className='fas fa-shopping-cart'></i>  cart</Nav.Link>
                            <Nav.Link href="/signin"> <i class="fa fa-user" aria-hidden="true"></i>  Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header