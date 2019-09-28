import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from '../../axios';
import Header from '../../components/Header/Header';

const { Content } = Layout;

class Products extends Component {
	componentDidMount() {
		axios.get('/profile/test').then(res => {
			console.log(res);
		});
	}
	render() {
		return (
			<Layout>
				<Header />
				<Content style={{ padding: '50px', marginTop: 64 }}>
					Home page
				</Content>
			</Layout>
		);
	}
}

export default Products;
