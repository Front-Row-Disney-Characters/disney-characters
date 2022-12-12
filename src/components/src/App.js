import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../src/components/Navigation';
import { Home } from './routes/Home';
import { UserDetails } from './routes/UserDetails';
import Pages from './components/Pages';
import { Footer } from './components/Footer';

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
            setPage(data.data)
            setLoading(false);
      }
        fetchData()
          .catch(console.error);
        }, []);
    console.log(page);
    //current 
    const indexOfLastPage = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentPosts = page.slice(indexOfFirstPage, indexOfLastPage);
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <BrowserRouter>
                <div data-testid="app">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={
                        <Home page={page} 
                        loading={loading} 
                        setPage={setPage} 
                        userList={userList} 
                        userFilteredList={userFilteredList} 
                        setUserFilteredList={setUserFilteredList}/>} 
                        />
                        <Route path="/characters/:_id" element={<UserDetails userFilteredList={userFilteredList}/>} />
                        {/* <Route path="/friendrequest" element={<Friends />} /> */}
                
                    </Routes>
                    {/* <Pages page={page} loading={loading}/>
                    <Footer postPerPage={postPerPage} totalPosts={page.length} paginate={paginate} /> */}
                    {/* <Pages page={page} loading={loading}/>
                    <Footer postPerPage={postPerPage} totalPosts={page.length} paginate={paginate} /> */}
                    {/* <Pages page={page} loading={loading}/> */}
                    <Pages page={currentPosts} loading={loading}/>
                    <Footer postPerPage={postPerPage} totalPosts={page.length} paginate={paginate} />
                </div>
            </BrowserRouter>
        </>
    )
}

export { App };