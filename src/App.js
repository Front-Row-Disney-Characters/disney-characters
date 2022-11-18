import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../src/components/Navigation';
import { Home } from './routes/Home';


// const maxUsers = 20;
const randomUserApi = `https://randomuser.me/api/?seed=bobas&results=75&nat=us`;

function App () {

    const [userList, setUserList] = useState([]);
    const [userFilteredList, setUserFilteredList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(randomUserApi);
        const data = await res.json();
        setUserList(data.results);
        setUserFilteredList(data.results);
        console.log(userList);
        // console.log(typeof cards);
      }
        fetchData()
          .catch(console.error);
        }, []);

    return (
        <>
            <BrowserRouter>
                <div data-testid="app">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} />
                        {/* <Route path="/:name" element={<UserDetails />} />
                        <Route path="/friendrequest" element={<Friends />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export { App };