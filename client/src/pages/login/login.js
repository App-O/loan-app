import React from 'react';
import {Button, Jumbotron, Grid, Row, Col, ListGroup, ListGroupItem, Form, FormGroup, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import {Modal, Checkbox} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {Page} from '../../components/page.js'

var Bootstrap = require( 'react-bootstrap');

require('./login.less');






module.exports = class LoginPage extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
		this.state.vars = {};
		this.state.vars.password = '';
		this.state.vars.email = 'magus@egelberg.se';
		this.state.vars.foo = 'OLLE';

	};

	login() {
		console.log(this.state);
	}


	foo(event) {
//		var input = parseInt(event.target.value);
		this.setState({foo:event.target.value});
	}

	onChange(name, event) {
		console.log(arguments);
		var vars = {};
		vars[name] = event.target.value;

		this.setState({vars:extend({}, this.state.vars, vars)})

	}


	render() {

		var textBoxStyle = {};
		//textBoxStyle.fontSize = 'inherit';
		textBoxStyle.color = 'black';



		return (
			<div id='login'>
				<Page >
					<Grid>
						<Row style={{}}>
							<Col xs={12} sm={6} smOffset={3}>


								<Form style={{borderRadius:'4px',backgroundColor:'rgba(255,255,255,0.9)', padding:'1em'}}>
									<FormGroup bsSize='small'>
										<FormControl.Static>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tincidunt nunc a tempor. Praesent.
										</FormControl.Static>
									</FormGroup>

									<FormGroup bsSize='large'>
										<FormControl  type='text' placeholder='E-post' value={this.state.vars.email} onChange={this.onChange.bind(this, 'email')} style={textBoxStyle} />
									</FormGroup>
									<FormGroup>
										<FormControl  type='password' label='Lösenord' placeholder='Lösenord' value={this.state.vars.password} onChange={this.onChange.bind(this, 'password')} style={textBoxStyle} />
										<Checkbox>Kom ihåg mig</Checkbox>
									</FormGroup>
									<FormGroup style={{textAlign:'center'}}>
										<Button onClick={this.login.bind(this)}  style={{}}>
											Logga in
										</Button>
									</FormGroup>


								</Form>
							</Col>
						</Row>
					</Grid>
				</Page>
			</div>
		);
	}

};
