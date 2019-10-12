import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { shareVideo } from '../../../src/store/actions/shareVideoAction';
import Header from '../../components/Header/Header';
import { PageHeader } from 'antd';
import { removeAuth } from '../../core/services/storageService';
import { openNotification } from '../../components/Notification/notification';

const { Content } = Layout;

class ShareVideo extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const { url } = values;
				const id = url.trim().split('=')[1];
				this.props.shareVideo({ url, id });
			}
		});
	};

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.errors &&
			nextProps.errors.data &&
			nextProps.errors !== this.props.errors
		) {
			if (
				nextProps.errors.status === 401 &&
				nextProps.errors.data === 'Unauthorized'
			) {
				removeAuth();
				this.props.history.push('/auth/login');
			}
			openNotification('error', nextProps.errors.data);
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Layout>
				<Header />
				<Content className="content-form" style={{ padding: '50px' }}>
					<PageHeader title="Share video" />
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
	errors: state.errors,
	success: state.shareVideo.success,
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
