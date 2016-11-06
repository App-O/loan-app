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
				<FormGroup style={{borderBottom:'1px solid black'}}>
					<h2 >
						MIN FASTIGHET
					</h2>
				</FormGroup>
				<FormGroup bsSize='small'>
					<FormControl.Static>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tincidunt nunc a tempor. Praesent.
					</FormControl.Static>
					<FormControl.Static>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula neque, finibus in turpis et, malesuada dignissim purus. Ut viverra massa leo, at sollicitudin velit auctor quis. Vestibulum quis orci rhoncus, gravida libero non, lobortis est. Quisque in tortor ut enim blandit vestibulum. Aliquam erat volutpat. Curabitur iaculis est iaculis.
					</FormControl.Static>

				</FormGroup>



			</Form>

		);

	}

	render() {
		var style = {};


		return (
			<Page bg={require('./images/bg.jpg')}>
				<Grid>
					<Row>
						<Col sm={10} smOffset={1} md={8} mdOffset={2}>
							{this.renderBox()}
						</Col>
					</Row>
				</Grid>
			</Page>

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
