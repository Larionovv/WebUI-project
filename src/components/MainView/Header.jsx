import React, {Component} from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
		<Container>
			<Navbar fixed="top" bg="light" expand="lg" className="main-header">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav><Link className="nav-link" to="/">Home</Link></Nav>
						<NavDropdown title="Race" id="basic-nav-dropdown">
							<NavDropdown.Item><Link className="nav-link" to="/calendarRaces">Calendar of race</Link></NavDropdown.Item>
							<NavDropdown.Item><Link className="nav-link" to="/nextRace">Next race</Link></NavDropdown.Item>
							<NavDropdown.Item><Link className="nav-link" to="/ratings">Ratings</Link></NavDropdown.Item>
						</NavDropdown>
						<Nav><Link className="nav-link" to="/news">News</Link></Nav>
						<Nav><Link className="nav-link" to="/fans">Fans</Link></Nav>
						<Nav><Link className="nav-link" to="/contacts">Contacts</Link></Nav>
						<Nav><Link className="nav-link" to="/admin">Admin</Link></Nav>
					</Nav>
					<Navbar.Brand>
						<Link to="/">
						<img
						src="../../../public/icon.png"
						className="d-inline-block align-top"
						alt="logo"
						/>
						</Link>
					</Navbar.Brand>
				</Navbar.Collapse>
			</Navbar>
		</Container>
		);
	}
}