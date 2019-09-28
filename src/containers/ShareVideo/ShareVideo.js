import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { shareVideo } from '../../../src/store/actions/shareVideoAction';
import Header from '../../components/Header/Header';
const { Content } = Layout;

class ShareVideo extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				const { url } = values;
				const id = url.trim().split('=')[1];
				this.props.shareVideo({ url, id });
				// https://www.youtube.com/watch?v=VZiVePJCpZI
			}
		});
	};

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.success && nextProps.success !== this.props.success) {
	// 		const token = nextProps.data.token;
	// 		const email = nextProps.data.user.email;
	// 		storageService.setAuth(token, email);
	// 		this.props.history.push('/');
	// 	}
	// }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Layout>
				<Header />
				<Content style={{ padding: '50px', marginTop: 64 }}>
					<Form
						onSubmit={this.handleSubmit}
						className="shareVideo-form"
					>
						<Form.Item>
							{getFieldDecorator('url', {
								rules: [
									{
										required: true,
										message: 'Please input your url video!'
									}
								]
							})(<Input type="text" placeholder="Url's video" />)}
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="shareVideo-form-button"
							>
								ShareVideo
							</Button>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		);
	}
}

const WrappedNormalShareVideoForm = Form.create({ name: 'normal_shareVideo' })(
	ShareVideo
);

const mapStateToProps = state => ({
	success: state.shareVideo.success,
	error: state.shareVideo.error,
	isLoading: state.shareVideo.isLoading,
	data: state.shareVideo.data
});

const mapDispatchToProps = dispatch => {
	return {
		shareVideo: data => dispatch(shareVideo(data))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(WrappedNormalShareVideoForm));
