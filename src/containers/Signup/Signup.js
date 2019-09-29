import React from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register } from '../../../src/store/actions/registerAction';
import Header from '../../components/Header/Header';

const { Content } = Layout;

class Signup extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.register(values);
			}
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.success) {
			this.props.history.push('/auth/login');
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Layout>
				<Header />
				<Content style={{ padding: '50px', marginTop: 64 }}>
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
								Register
							</Button>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_signup' })(Signup);

const mapStateToProps = state => ({
	success: state.register.success,
	error: state.register.error,
	isLoading: state.register.isLoading,
	data: state.register.data
});

const mapDispatchToProps = dispatch => {
	return {
		register: userData => dispatch(register(userData))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(WrappedNormalLoginForm));
