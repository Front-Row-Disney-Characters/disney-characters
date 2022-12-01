import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Navigation } from '../components/Navigation';
import { CharacterCard } from '../components/CharacterCard';
import { CharacterDetails } from '../routes/CharacterDetails'


function Home({ characterList }) {
    const [filteredCharacter, setFilteredCharacter] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        setFilteredCharacter(
            characterList.filter((character) =>
                character.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, characterList]);


    return (
        <Container>
            <Row className='mb-4'>
                <Col sm='8' md='6' className='mx-auto'>
                    <InputGroup>
                        <InputGroup.Text id='search'>Search</InputGroup.Text>
                        <FormControl
                            value={search}
                            aria-label='search'
                            aria-describedby='search'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row className='g-4'>
                {filteredCharacter.map((character) => (
                    <Col key={character.name}>
                        <PokemonCard url={character.url} name={character.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export { Home }