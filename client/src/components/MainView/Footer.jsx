import React, {Component} from 'react';
import {Container, Navbar} from 'react-bootstrap';
import '../style.css';

export default class Footer extends Component {
	render() {
		return (
		<Container className="main-footer">
			<Navbar sticky="bottom" bg="light" expand="lg" className="main-header">
			{'FOOTER'}
			</Navbar>
		</Container>
		);
	}
}