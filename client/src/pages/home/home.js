import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'

require('./home.less');





module.exports = class Home extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
		this.state.vars = {};
	};



	render() {
		var style = {};


		return (
			<Page bg={require('./images/bg.jpg')}>
				<div style={{height:'4em'}}>
				</div>
				<Grid>
					<Row>
						<Col sm={10} smOffset={1} md={8} mdOffset={2}>
							<div style={{borderRadius:'4px', fontWeight:'bold', backgroundColor:'rgba(0,0,0,0.4)', color:'white', textAlign:'center', padding:'1em'}}>
								<h2 style={{textTransform:'uppercase', padding:'0.5em', margin:'0', borderBottom:'1px solid white'}}>Min Fastighet</h2>
								<h3 style={{paddingBottom:'1em'}}>Vi hjälper dig att förbättra dina lånevillkor!</h3>
								<Button href='#login' bsStyle="warning">
									Logga In
								</Button>
							</div>
						</Col>
					</Row>
				</Grid>
			</Page>

		);
	}

};
