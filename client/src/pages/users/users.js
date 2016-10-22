import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader, Panel} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import RestAPI from 'rest-request';
import api from '../../scripts/api.js';

require('./users.less');


module.exports = class Page extends React.Component {


	constructor(props) {

		super(props);

		this.state = {users:[]};
	};



	componentDidMount() {
		var self = this;

		api.request('GET', 'users').then(function(users) {
			console.log(users);
			self.setState({users:users});
		})
		.catch(function(error) {
			console.log(error);
		});

	}

	renderList() {
		var children = this.state.users.map(function(user, index) {

			return (
				<ListGroupItem key={index} header={user.name} href={sprintf('#/user/%s', user.id)}>
					{user.id}
				</ListGroupItem>
			);
		});
		return (
			<ListGroup>
				{children}
			</ListGroup>
		);
	}

	render() {

		return (
			<div id='users'>
				<Grid>
					<PageHeader>Användare</PageHeader>
					{this.renderList()}
				</Grid>
			</div>
		);
	}

};
