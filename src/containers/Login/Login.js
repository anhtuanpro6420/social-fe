import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../../src/store/actions/loginAction';

class Login extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.login(values);
			}
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.success && nextProps.success !== this.props.success) {
			this.props.history.push('/');
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
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
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = state => ({
	success: state.login.success,
	error: state.login.error,
	isLoading: state.login.isLoading,
	data: state.login.data
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
