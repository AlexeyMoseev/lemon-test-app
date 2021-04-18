import './App.css'
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import NewsPage from './containers/NewsPage/NewsPage'
import ProfilePage from './containers/ProfilePage/ProfilePage'
import LoginPage from './containers/LoginPage/LoginPage'
import MainPage from './containers/MainPage/MainPage'

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	function setAuthenticated(param) {
		setIsAuthenticated(param)
	}

	let routes = (
		<Switch>
			<Route path='/news' component={NewsPage} />
			<Route path='/login'>
				<LoginPage setAuthenticated={setAuthenticated} />
			</Route>
			<Redirect from='/profile' to='/login' />
			<Route path='/' exact component={MainPage} />
			<Redirect to='/' />
		</Switch>
	)

	if (isAuthenticated) {
		routes = (
			<Switch>
				<Route path='/news' component={NewsPage} />
				<Route path='/login'>
					<LoginPage setAuthenticated={setAuthenticated} />
				</Route>
				<Route path='/profile'>
					<ProfilePage setAuthenticated={setAuthenticated} />
				</Route>
				<Route path='/' exact component={MainPage} />
				<Redirect to='/' />
			</Switch>
		)
	}
	return <Layout>{routes}</Layout>
}

export default App
