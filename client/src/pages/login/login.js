import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';
import {BackgroundImage, MainToolBar} from '../../components/ui.js'

require('./login.less');





module.exports = class Page extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
		this.state.vars = {};
		this.onChange = this.onChange.bind(this);
	};


	onChange(event) {
		var input = parseInt(event.target.value);

		if (isNaN(input))
			input = '';

		var vars = {};
		vars['username'] = input;

		this.setState({vars:vars})
	}


	render() {

		var rootStyle = {};
		rootStyle.padding  = '1em';
		rootStyle.position = 'absolute';
		rootStyle.left     = 0;
		rootStyle.top      = 0;
		rootStyle.right    = 0;
		rootStyle.bottom   = 0;

		return (
			<div id='login'>
				<BackgroundImage image={require('../home/images/bg.jpg')} >
					<MainToolBar/>
					<br/>
					<br/>
					<Grid>
						<Row>
							<Col sm={8} smOffset={2} md={6} mdOffset={3} lg={6}>

								<div style={{borderRadius:'4px',backgroundColor:'rgba(255,255,255,0.9)', padding:'1em', fontSize:'110%'}}>
									<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tincidunt nunc a tempor. Praesent.
									</p>
									<FormControl  type='text' placeholder='E-post' value={this.state.vars['Omkrets']} onChange={this.onChange} style={{color:'black', fontSize:'inherit'}} >
									</FormControl>
									<br/>
									<FormControl  type='password' placeholder='Lösenord' value={this.state.vars['Omkrets']} onChange={this.onChange} style={{color:'black', fontSize:'inherit'}} >
									</FormControl>
									<div style={{padding:'1em', textAlign:'center'}}>
										<Button href='#' bsStyle="warning" style={{fontSize:'inherit'}}>
											Logga in
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</Grid>


				</BackgroundImage>
			</div>
		);
	}

};
