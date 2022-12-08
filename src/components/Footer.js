import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

function Footer({page, setPage}) {

    return (
        <>
            <nav aria-label="Page navigation" >
                <ul class="pagination">
                    <li class="page-item"><button onClick={(e)=>{setPage(page-=1) 
                    console.log(page)
                    e.preventDefault()}}>Previous</button></li>
                    <li class="page-item"><button onClick={(e)=>{setPage(page+=1)
                    console.log(page)
                    e.preventDefault()}}>Next</button></li>
                </ul>
            </nav>
        </>
    )
}

export { Footer };