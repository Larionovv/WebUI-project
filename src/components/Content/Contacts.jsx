import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class Contacts extends Component {
	render() {
		return (
		<>
			<Header/>
				<Container className="main-contacts">
					{"Contacts"}
				</Container>
			<Footer/>
		</>
		);
	}
}