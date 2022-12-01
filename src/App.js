import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Route, Routes } from "react-router-dom";

 function App() {
    const [characterList, setCharacterList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.disneyapi.dev/characters')
          .then((res) => res.json())
          .then((data) => {
            setCharacterList(data.results);
            console.log(data.results)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      return (
        <div data-testid="app">
          <BrowserRouter>
            <Navigation />
            
            <Routes>
              <Route path="/" element={<Home characterList={characterList} />} />
              <Route path="/:name" element={<CharacterDetails/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
 }

 export {App}