import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import Products from './containers/Products/Products';
import 'antd/dist/antd.css';

const { Content } = Layout;

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
const Login = React.lazy(() => import('./containers/Login/Login'));

function App() {
	let routes = (
		<Switch>
			<Route
				path="/auth/login"
				render={() => (
					<Suspense fallback={<div>Loading...</div>}>
						<Login />
					</Suspense>
				)}
			/>
			<Route
				path="/sign-up"
				render={() => (
					<Suspense fallback={<div>Loading...</div>}>
						<Signup />
					</Suspense>
				)}
			/>
			<Route path="/" exact component={Products} />
			<Redirect to="/" />
		</Switch>
	);

	return <>{routes}</>;
}

export default App;
