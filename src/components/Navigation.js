import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import friends from '../public/friends.png';

import { Link } from 'react-router-dom'

function Navigation() {

    return (
        <>
            <Navbar sticky='top' bg='light' variant='light' className="mb-4">
                <Container>
                    <Navbar.Brand>
                        <Image src={friends} width="65" className="me-2" />
                        You got a Friend in me?
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Friends</Nav.Link>
                        <Nav.Link  as={Link} to='/friends'>Friend Requests</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export { Navigation };