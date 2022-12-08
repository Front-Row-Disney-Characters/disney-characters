import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

const Footer=({postsPerPage, totalPosts})=> {
    const pageNumbers = [];
    for(let i = 1; i <=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <>
            {/* <Nav aria-label="Page navigation" >
                <ul className="pagination mb-4">
                    {page.map(pages=>(
                        <li key={pages.id} className='list-group-item pagination'>
                            {pages._id}
                        </li>
                    ))}
                </ul>
            </Nav> */}
        </>
    )
}

export { Footer };