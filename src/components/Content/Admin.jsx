import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class Admin extends Component {
	render() {
		return (
			<Container className="main-admin ">
				<Header/>
				{"Admin"}
				<Footer/>
			</Container>
		);
	}
}