import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import storageService from '../../core/services/storageService';

const { Header } = Layout;

const header = () => (
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
			{storageService.getCurrentUser() ? (
				<Menu.Item key="2">
					<Link to="/auth/login" onClick={storageService.removeAuth}>
						Logout
					</Link>
				</Menu.Item>
			) : (
				<Menu.Item key="2">
					<Link to="/auth/login">Login</Link>
				</Menu.Item>
			)}
			<Menu.Item key="3">
				<Link to="/sign-up">Sign up</Link>
			</Menu.Item>
			<Menu.Item key="4">{storageService.getCurrentUser()}</Menu.Item>
		</Menu>
	</Header>
);

export default header;
