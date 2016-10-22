import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader, Panel} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import api from '../../scripts/api.js';

require('./user.less');


module.exports = class Page extends React.Component {


	constructor(props) {

		super(props);

		this.state = {user:{}};
	};



	componentDidMount() {
		var self = this;

		api.request('GET', 'users/:id', {id:self.props.params.id}).then(function(user) {
			console.log(user);
			self.setState({user:user});
		})
		.catch(function(error) {
			console.log(error);
		});

	}

	render() {

		return (
			<div id='user'>
				<Grid>
					<PageHeader>Användare</PageHeader>
					{JSON.stringify(this.state.user)}
				</Grid>
			</div>
		);
	}

};
