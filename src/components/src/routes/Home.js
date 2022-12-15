import React, { useState, useEffect} from 'react';
import { UserCard } from '../components/UserCard';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Footer} from '../components/Footer';
import Pages from '../components/Pages';



function Home({page, setPage, userList, userFilteredList, setUserFilteredList,loading}) {

  // // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage] = useState(10);
  // //current 
  // const indexOfLastPage = currentPage * postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  // const currentPosts = page.slice(indexOfFirstPage, indexOfLastPage);
  // //change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = userList.filter((user) => {
      return user.name.match(regex);
    });
    setUserFilteredList(filtered);
    // console.log(UserFilteredList)
      if(loading){
        return <h2>Loading...</h2>;
    }
  }

  return (
    <div data-testid="app">
      <InputGroup onChange={handleChange} className="mb-3 w-50 mx-auto">
      <InputGroup.Text id="basic-addon1">Search Disney Characters:</InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Container>
        <Row md={4}>
          {userFilteredList.map((user, idx) => (
            <Col key={idx} className="mt-4" md="4" >
              <UserCard
                userFilteredList={userFilteredList}
                key={idx}
                name={user.name}
                url={user.url}
                id={user._id}
              />
            </Col>
          ))}
        </Row>
        {/*added pagination */}
        {/* <Row md={4}>
          {page.map(post =>(
            <Col>
             <li key={post.id} className='list-group-item'>
                        img={post.imageUrl}
                        name={post.name}
                        url={post.url}
                        id={post._id}
                    </li>
            </Col>
          ))}
          
        </Row> */}
       {/* <Pages page={page} loading={loading}/> */}
                    {/* <Footer postPerPage={postPerPage} totalPosts={page.length} paginate={paginate} /> */}
      </Container>
    </div>
  );
}

export { Home };