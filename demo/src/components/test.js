import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron } from 'react-bootstrap';

const Test = () => {
	return (<div><Jumbotron style={{backgroundColor:"red"}}><Button variant="danger"> test </Button></Jumbotron></div>)
}

export default Test;