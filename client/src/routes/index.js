import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, hashHistory, Router, Route} from 'react-router';


require('../less/styles.less');


var App = React.createClass({
  render: function() {


    return (
		<div className='app'>
			{this.props.children}
    	</div>
    );
  }
})


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={require('../pages/home/home.js')} />
			<Route path="home"          component={require('../pages/home/home.js')} />
			<Route path="about"         component={require('../pages/about/about.js')} />
			<Route path="login"         component={require('../pages/login/login.js')} />
			<Route path="users"         component={require('../pages/users/users.js')} />
			<Route path="user/:id"      component={require('../pages/user/user.js')} />

		</Route>
	</Router>
), document.getElementById('app'))
