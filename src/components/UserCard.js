import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";


function UserCard({ userFilteredList }) {

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const res = await fetch(`https://randomuser.me/api/?seed=bobas&results=75&nat=us`);
    const data = await res.json();
    setUser(data.results);
    console.log(user)
  };

  useEffect(() => {
    fetchUser();
  }, [userFilteredList]);

  return (
    <>
      {user ? (
        userFilteredList.map((user, idx) => (
        <Col key={idx} className="mt-4 d-flex" md="3" >
            <Card className="w-100 h-100 indiv-card"  >
                <div>
                    <Card.Img src={`${user.picture.large}`}></Card.Img>
                </div>
                <div>
                    <Card.Body>
                        <Card.Title >      
                        {user.name.first} {user.name.last}
                        </Card.Title>
                        <Card.Text >
                        {user.gender}
                        {user.email}
                        </Card.Text>
                        {/* {isFriend(name) ? (
                        <Button onClick={() => removeUser(name)} variant="danger">
                        Remove Friend
                        </Button>
                    ) : (
                        <Button onClick={() => addUSer({ name, url })}>
                        Add Friend
                        </Button>
                    )} */}
                    </Card.Body>
                </div>
            </Card>
        </Col>
        ))
      ) : (
        ""
      )}
    </>
  );
}

export { UserCard };