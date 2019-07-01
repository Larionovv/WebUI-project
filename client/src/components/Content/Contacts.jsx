import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class Contacts extends Component {
	render() {
		return (
				<Container className="main-contacts">
					<Header/>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5163.570613625239!2d-73.95840761712222!3d40.77490952035086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1554145010782!5m2!1sru!2sua"
					/>
					<Footer/>
				</Container>
		);
	}
}