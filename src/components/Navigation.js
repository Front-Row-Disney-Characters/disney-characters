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
            <Navbar sticky='top' bg='light' variant='light' className="mb-4 navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                <Container>
                    <Navbar.Brand>
                        <Image src={friends} width="65" className="me-2" />
                        Disney Character Collection
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Disney Characters</Nav.Link>
                        <Nav.Link  as={Link} to='/friends'>Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export { Navigation };