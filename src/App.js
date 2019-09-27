import React, { Suspense } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import './App.css';
import Products from './containers/Products/Products';
import auth from './containers/Auth/Auth';
import 'antd/dist/antd.css';
// import Signup from './containers/Signup/Signup';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
// import Signup from './containers/Signup/Signup';

function App() {
	let routes = (
		<Switch>
			<Route path="/auth/login" component={auth} />
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
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1">
						<Link to="/products">Home</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/auth/login">Login</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/sign-up">Sign up</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '50px', marginTop: 64 }}>
				<div>{routes}</div>
			</Content>
		</Layout>
	);
}

export default App;
