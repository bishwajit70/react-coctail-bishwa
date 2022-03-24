import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

const Headers = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">Cocktails</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Shop</Nav.Link>
                        <Nav.Link href="#link">Orders</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;