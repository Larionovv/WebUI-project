import React, {Component} from 'react';
import { Container, Alert,Form,Button } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class Fans extends Component {
	render() {
		return (
		<>
			<Header/>
			<Container className="main-fans">
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Alert variant="warning">
					{ 'TEXT ' }
				</Alert>
				<Form>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
				</Form>
				<Button variant="outline-primary">Primary</Button>
			</Container>
			<Footer/>
		</>
		);
	}
}