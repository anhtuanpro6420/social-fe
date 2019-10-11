import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { getPosts, favorites } from '../../../src/store/actions/newsfeedAction';
import { getMyInfo } from '../../../src/store/actions/authAction';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';
import './Newsfeed.css';
import { openNotification } from '../../components/Notification/notification';
import storageService from '../../core/services/storageService';
const { Content } = Layout;

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedPost: null
		};
	}
	componentDidMount() {
		const token = storageService.getAuthToken();
		const email = storageService.getCurrentUser();
		if (token && email) {
			storageService.setAuth(token, email);
			storageService.setAuthToken();
		}
		this.props.getMyInfo();
		this.props.getPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.errors &&
			nextProps.errors.data &&
			nextProps.errors !== this.props.errors
		) {
			openNotification('error', nextProps.errors.data);
		}
	}

	showMore = id => {
		this.setState({
			clickedPost: id
		});
	};

	favoritesHandler = id => {
		const { me } = this.props;
		const data = {
			postId: id,
			userId: me ? me : null
		};
		this.props.onFavorites(data);
	};

	render() {
		const posts =
			this.props.data && this.props.data.length ? this.props.data : [];
		const postRender = posts.map(item => {
			return (
				<Row key={item._id} gutter={12} style={{ paddingBottom: 24 }}>
					<Col lg={12} md={12} sm={24}>
						<ReactPlayer
							controls={true}
							width="100%"
							height="300px"
							url={item.url}
							playing={false}
						/>
					</Col>

					<Col lg={12} md={12} sm={24}>
						<h3 className="title">{item.title}</h3>
						<h4>
							Share by:{' '}
							{item && item.user ? item.user.email : null}
						</h4>
						<Button
							onClick={() => this.favoritesHandler(item._id)}
							type="primary"
							shape="circle"
							icon="star"
						/>
						<h4>Description: </h4>
						{item.description.length > 600 ? (
							<>
								{this.state.clickedPost === item._id ? (
									item.description
								) : (
									<>
										{item.description.slice(0, 600)}
										<span
											onClick={() =>
												this.showMore(item._id)
											}
											className="show-more"
										>
											...Show more
										</span>
									</>
								)}
							</>
						) : (
							item.description
						)}
					</Col>
				</Row>
			);
		});
		return (
			<Layout>
				<Header />
				<Content style={{ padding: '50px' }}>{postRender}</Content>
			</Layout>
		);
	}
}

const mapStateToProps = state => ({
	success: state.newsfeed.success,
	errors: state.errors,
	isLoading: state.newsfeed.isLoading,
	data: state.newsfeed.data,
	auth: state.auth.me
});

const mapDispatchToProps = dispatch => {
	return {
		getMyInfo: () => dispatch(getMyInfo()),
		getPosts: () => dispatch(getPosts()),
		onFavorites: data => dispatch(favorites(data))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Newsfeed);
