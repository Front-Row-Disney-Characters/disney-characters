import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

const Footer=({postPerPage, totalPosts, paginate})=> {
    const pageNumbers = [];
    for(let i = 1; i <=Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <>
            <Nav>
                <ul aria-label="Page navigation" className="pagination">
                    {pageNumbers.map(number=>(
                        <li key={number} className='page-item'>
                            {/* <a href="!#" className="page-link">{number}</a> */}
                            <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
                        </li>
                    ))}
                </ul>
            </Nav> 
             {/* <nav aria-label="Page navigation" >
                <ul class="pagination">
                    <li class="page-item"><button onClick={(e)=>{setPage(page-=1) 
                    console.log(page)
                    e.preventDefault()}}>Previous</button></li>
                    <li class="page-item"><button onClick={(e)=>{setPage(page+=1)
                    console.log(page)
                    e.preventDefault()}}>Next</button></li>
                </ul>
            </nav> */}
        </>
    )
}

export { Footer };