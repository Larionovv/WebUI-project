import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Content/Home";
import '../style.css';

export default class MainView extends Component {
	render() {
		return (
		<>
			<Header/>
				<Home/>
			<Footer/>
		</>
		);
	}
}
