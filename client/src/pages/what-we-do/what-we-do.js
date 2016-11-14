import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl} from 'react-bootstrap';
import {extend, isString, isObject, isArray} from 'yow';
import {Page} from '../../components/page.js'

import {sprintf} from 'yow';

require('./what-we-do.less');


module.exports = class AboutPage extends React.Component {


	constructor(...args) {

		super(...args);

	};

	renderBox() {

		return (
			<Form style={{borderRadius:'0.75em',backgroundColor:'rgba(255,255,255,0.9)', padding:'1em'}}>
				<FormGroup style={{borderBottom:'1px solid black'}}>
					<h2 >
						Vad gör vi?
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

		return (
			<Page>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							{this.renderBox()}
						</Col>
					</Row>
				</Grid>
			</Page>
		);
	}

};
