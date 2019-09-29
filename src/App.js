import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Newsfeed from './containers/Newsfeed/Newsfeed';
import storageService from './core/services/storageService';

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
const Login = React.lazy(() => import('./containers/Login/Login'));
const ShareVideo = React.lazy(() =>
	import('./containers/ShareVideo/ShareVideo')
);

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
			{storageService.getCurrentUser() ? (
				<Route
					path="/share"
					render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<ShareVideo />
						</Suspense>
					)}
				/>
			) : null}
			<Route path="/" exact component={Newsfeed} />
			<Redirect to="/" />
		</Switch>
	);

	return <>{routes}</>;
}

export default App;
