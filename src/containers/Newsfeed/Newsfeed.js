import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { getPosts, favorites } from '../../../src/store/actions/newsfeedAction';
import { getMyInfo } from '../../../src/store/actions/authAction';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';
import './Newsfeed.css';
import { openNotification } from '../../components/Notification/notification';
import {
	getAuthToken,
	getCurrentUser,
	setAuth,
	setAuthToken
} from '../../core/services/storageService';
const { Content } = Layout;

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedPost: null
		};
	}
	componentDidMount() {
		const token = getAuthToken();
		const email = getCurrentUser();
		if (token && email) {
			setAuth(token, email);
			setAuthToken();
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
			user: me
		};
		this.props.onFavorites(data);
	};

	render() {
		const { data } = this.props;
		const posts = data && data.length ? data : [];
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
						{item.favorites.length} Likes
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
	me: state.auth.me
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
