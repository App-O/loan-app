import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'

require('./home.less');





module.exports = class Home extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
		this.state.vars = {};
	};

	renderBox() {

		return (
			<Form style={{borderRadius:'0.75em',backgroundColor:'rgba(0,0,0,0.4)', padding:'1em'}}>
				<FormGroup style={{borderBottom:'1px solid white', textAlign:'center'}}>
					<h2 style={{textTransform:'uppercase'}}>
						Min Fastighet
					</h2>
				</FormGroup>
				<FormGroup>
					<h3 style={{textAlign:'center'}}>Vi hjälper dig att förbättra dina lånevillkor!</h3>
				</FormGroup>
				<FormGroup style={{textAlign:'center'}}>
					<Button href='#login' bsStyle="warning">
						Logga In
					</Button>
				</FormGroup>



			</Form>

		);

	}

	render() {
		var style = {};


		return (
			<div id="home">
			<Page>
				<Grid>
					<Row>
						<Col sm={10} smOffset={1} md={8} mdOffset={2}>
							{this.renderBox()}
						</Col>
					</Row>
				</Grid>
			</Page>
			</div>

		);

		return (
			<div style={{borderRadius:'4px', fontWeight:'bold', backgroundColor:'rgba(0,0,0,0.4)', color:'white', textAlign:'center', padding:'1em'}}>
				<h2 style={{textTransform:'uppercase', padding:'0.5em', margin:'0', borderBottom:'1px solid white'}}>Min Fastighet</h2>
				<h3 style={{paddingBottom:'1em'}}>Vi hjälper dig att förbättra dina lånevillkor!</h3>
				<Button href='#login' bsStyle="warning">
					Logga In
				</Button>
			</div>

		);
	}

};
