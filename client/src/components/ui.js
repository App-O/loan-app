import React from 'react';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';


export class BackgroundImage extends React.Component {

	constructor(props) {

		super(props);

	};

	render() {
		var style = {};
		style.backgroundSize     = 'cover';
		style.backgroundRepeat   = 'no-repeat';
		style.backgroundPosition = 'center center';
		style.position           = 'fixed';
		style.height             = '100%';
		style.width              = '100%';
		style.bottom             = 0;
		style.overflowY          = 'scroll';
		style.backgroundImage    = sprintf('url(%s)', this.props.image);

		return (
			<div style={style}>
				{this.props.children}
			</div>
		);
	}
};



export class MainToolBar extends React.Component {

	constructor(props) {

		super(props);

	};

	render() {

		var style = {};
		var fontSize = '18px';

		style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
		style.border = 'none';
		style.borderRadius = 0;

		return (
			<Navbar inverse style={style}>
				<Navbar.Header >
					<Navbar.Brand>
						<a href="#" style={{fontSize:fontSize}}>Hem</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav style={{fontSize:fontSize}}>
						<NavItem eventKey={2} href="#/about">Om oss</NavItem>
						<NavItem eventKey={9} href="#">Vad gör vi?</NavItem>
						<NavItem eventKey={10} href="#">Partners</NavItem>
						<NavItem eventKey={11} href="#">Kontakt</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
};
