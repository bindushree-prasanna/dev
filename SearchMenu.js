import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import ReactSearchBox from 'react-search-box'

import FormControl from 'react-bootstrap/FormControl'
const axios = require('axios');

const SearchMenu = () => {
    const [values, setValues] = useState([])

    const makeGetRequest = () => {

        let resp = axios.get('https://rickandmortyapi.com/api/character');
        return resp;
        // let data = res.data;
        console.log(resp);
    }

    useEffect(() => {
        makeGetRequest()
    })

    // const sortById=(type)=>{

    // }
    const data = [
        {
            key: 'john',
            value: 'John Doe',
        },
        {
            key: 'jane',
            value: 'Jane Doe',
        },
        {
            key: 'mary',
            value: 'Mary Phillips',
        },
        {
            key: 'robert',
            value: 'Robert',
        },
        {
            key: 'karius',
            value: 'Karius',
        },
    ]

    // console.log("inside", res)

    return (
        <>
            <Form>
                <div align="left">
                    {/* <ReactSearchBox
                    placeholder="Placeholder"
                    value="Doe"
                    data={data}
                    callback={record => console.log(record)}
                /> */}

                    <InputGroup className="mb-3">
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">Search by name</InputGroup.Text>
                        </InputGroup.Append>
                        <FormControl
                            placeholder="Character name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary">Search</Button>

                    </InputGroup>
                </div>
                <br />
                <Container>
                    <CardDeck>

                        <Row>
                            <div id="wrapper">
                                <div id="c1">
                                    <Col xs>
                                        <Card>
                                            <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                {/* <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                            </Card.Text> */}
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </div>
                                <Col xs>
                                    <div id="c2">
                                        <Card>
                                            <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                {/* <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                            </Card.Text> */}
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </Col>
                                <div id="c3">
                                    <Col xs>
                                        <Card>
                                            <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" />
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                {/* <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                         </Card.Text> */}
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </CardDeck>

                </Container>
            </Form>
        </>
    )
}

export default SearchMenu;