import React, {Component} from 'react';
import { Container, Table } from 'react-bootstrap';
import '../style.css';
import Header from "../MainView/Header";
import Footer from "../MainView/Footer";

export default class NextRace extends Component {
	render() {
		return (
		<>
			<Header/>
			<Container className="main-next-race">
				<Table responsive>
					<thead>
					<tr>
						<th>#</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
						<th>Table heading</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>1</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
					</tbody>
				</Table>
			</Container>
			<Footer/>
		</>
		);
	}
}