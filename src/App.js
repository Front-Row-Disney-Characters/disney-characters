import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../src/components/Navigation';
import { Home } from './routes/Home';
import { UserDetails } from './routes/UserDetails';


 const App = () => {

    const [userList, setUserList] = useState([]);
    const [userFilteredList, setUserFilteredList] = useState([]);
    //custom
    const [page, setPage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const disneyCharApi = `https://api.disneyapi.dev/characters?page=${page}`;

    useEffect(() => {
        const fetchData = async () => {
        //CUSTOMS
        setLoading(true);
        //
        const res = await fetch(disneyCharApi);
        const data = await res.json();
        setUserList(data.data);
        setUserFilteredList(data.data);
        // console.log(typeof cards);
        //custom
        setPage(res.data)
        setLoading(false);
      }
        fetchData()
          .catch(console.error);
        }, []);
    
    //current 
    const indexOfLastPage = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentPosts = pages.slice(indexOfFirstPage, indexOfLastPage);
    return (
        <>
            <BrowserRouter>
                <div data-testid="app">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home page={currentPosts} loading={loading} setPage={setPage} userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} />
                        <Route path="/characters/:_id" element={<UserDetails userFilteredList={userFilteredList}/>} />
                        {/* <Route path="/friendrequest" element={<Friends />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export { App };