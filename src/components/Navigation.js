import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import friends from '../public/friends.png';

import { Link } from 'react-router-dom'
import { FavoritesList } from './Favorites';

function Navigation() {

    const { favorite } = useContext(FavoritesList);
    return (
        <>
            <Navbar sticky='top' bg='light' variant='light' className="mb-4">
                <Container>
                    <Navbar.Brand>
                        <Image src={friends} width="65" className="me-2" />
                        Disney Character Collection
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Disney Characters</Nav.Link>
                        <Nav.Link  as={Link} to='/favorites'>Favorites</Nav.Link>
                        <Badge className="alignRightBadge">({favorite.length})</Badge>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export { Navigation };