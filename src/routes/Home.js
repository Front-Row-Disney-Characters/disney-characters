import React, { useState, useEffect} from 'react';
import { UserCard } from '../components/UserCard';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Home({userList, userFilteredList, setUserFilteredList}) {


  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = userList.filter((user) => {
      return user.name.first.match(regex);
    });
    setUserFilteredList(filtered);
    // console.log(UserFilteredList)
  }

  return (
    <div data-testid="app">
      <InputGroup onChange={handleChange} className="mb-3 w-50 mx-auto">
      <InputGroup.Text id="basic-addon1">Search Friends:</InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Container>
        <Row md={4}>
              <UserCard
                userFilteredList={userFilteredList}
              />
        </Row>
      </Container>
    </div>
  );
}

export { Home };