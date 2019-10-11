import React from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../../src/store/actions/authAction';
import storageService from '../../core/services/storageService';
import Header from '../../components/Header/Header';
import { PageHeader } from 'antd';
import { openNotification } from '../../components/Notification/notification';

const { Content } = Layout;

class Login extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.login(values);
			}
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.success && nextProps.success !== this.props.success) {
			const token = nextProps.data.token;
			const email = nextProps.data.user.email;
			storageService.setAuth(token, email);
			storageService.setAuthToken();
			this.props.history.push('/');
		}
		if (
			nextProps.errors &&
			nextProps.errors.data &&
			nextProps.errors !== this.props.errors
		) {
			openNotification('error', nextProps.errors.data);
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Layout>
				<Header />
				<Content className="content-form" style={{ padding: '50px' }}>
					<PageHeader title="Login" />
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('email', {
								rules: [
									{
										required: true,
										message: 'Please input your Email!'
									}
								]
							})(
								<Input
									type="email"
									prefix={
										<Icon
											type="user"
											style={{ color: 'rgba(0,0,0,.25)' }}
										/>
									}
									placeholder="Email"
								/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [
									{
										required: true,
										message: 'Please input your Password!'
									}
								]
							})(
								<Input
									prefix={
										<Icon
											type="lock"
											style={{ color: 'rgba(0,0,0,.25)' }}
										/>
									}
									type="password"
									placeholder="Password"
								/>
							)}
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								Login
							</Button>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = state => ({
	success: state.auth.success,
	errors: state.errors,
	isLoading: state.auth.isLoading,
	data: state.auth.data
});

const mapDispatchToProps = dispatch => {
	return {
		login: userData => dispatch(login(userData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(WrappedNormalLoginForm));
