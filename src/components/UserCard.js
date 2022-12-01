import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";


function UserCard({ id, url, name, userFilteredList }) {

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    // render the first page of 50 characters (array of id, name, image, url)
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    console.log(user)
  };

  useEffect(() => {
    fetchUser();
  }, [userFilteredList]);

  return (
    <>
      {user ? (
            <div className="card mb-3 w-100 h-100 indiv-card d-flex" >
                <div className="row g-0">
                    <div className="col-md-6 my-auto">
                      <img src={`${user.imageUrl}`} className="img-fluid rounded-start pt-3 ps-2" alt="disney characters"/>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="card-body">
                        <Link to={`/characters/${id}`} style={{color: "black"}}>
                          <h5 className="card-title">{user.name}</h5>
                        </Link>
                      </div>
                    </div>
                </div>
                {/* <div className="row pt-3">
                  <div col-md-6>
                    <ul>
                      {user.tvShows.map((tvshow, idx) => (
                        <li key={idx}>TV Show(s): {tvshow}</li>
                      ))}
                    </ul>
                  </div>
                </div> */}
            </div>
      ) : (
        ""
      )}
    </>
  );
}

export { UserCard };