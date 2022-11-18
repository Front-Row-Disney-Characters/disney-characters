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
        <Col key={idx} className="mt-4" md="4" >
            <div className="card mb-3 w-100 h-100" >
                <div className="row g-0">
                    <div className="col-md-5 my-auto">
                    <img src={`${user.picture.large}`} className="img-fluid rounded-start pt-3 ps-2" alt="random-users"/>
                    </div>
                    <div className="col-md-7 my-auto">
                    <div className="card-body ">
                        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                        <p className="card-text">{user.location.state}, {user.location.city}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    </div>
                </div>
            </div>
        </Col>
        ))
      ) : (
        ""
      )}
    </>
  );
}

export { UserCard };