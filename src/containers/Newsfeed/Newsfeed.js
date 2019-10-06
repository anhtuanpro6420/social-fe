import React from 'react';
import { Layout, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getPosts } from '../../../src/store/actions/newsfeedAction';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';
import './Newsfeed.css';
import { openNotification } from '../../components/Notification/notification';
const { Content } = Layout;

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedPost: null
		};
	}
	componentDidMount() {
		this.props.getPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors && nextProps.errors.data) {
			openNotification('error', nextProps.errors.data);
		}
	}

	showMore = id => {
		this.setState({
			clickedPost: id
		});
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
	error: state.errors,
	isLoading: state.newsfeed.isLoading,
	data: state.newsfeed.data
});

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch(getPosts())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Newsfeed);
