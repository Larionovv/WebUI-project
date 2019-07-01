import React, {Component} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class Admin extends Component {
	render() {
		return (
			<Container className="main-admin ">
				<Header/>
				<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Example select</Form.Label>
						<Form.Control as="select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect2">
						<Form.Label>Example multiple select</Form.Label>
						<Form.Control as="select" multiple>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
				</Form>
				<Button variant="outline-primary">Primary</Button>
				<Footer/>
			</Container>
		);
	}
}