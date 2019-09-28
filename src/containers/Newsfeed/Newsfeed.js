import React from 'react';
import { Layout, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getPosts } from '../../../src/store/actions/newsfeedAction';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';
const { Content } = Layout;

class Newsfeed extends React.Component {
	componentDidMount() {
		this.props.getPosts();
	}
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
						<p>
							<strong className="title">{item.title}</strong>
						</p>
						<p>
							<strong>Share by:</strong>{' '}
							{item.userId && item.userId.email}
						</p>
						<strong>Description: </strong>
						<p style={{ wordBreak: 'break-word' }}>
							{item.description}
						</p>
					</Col>
				</Row>
			);
		});
		return (
			<Layout>
				<Header />
				<Content style={{ padding: '50px', marginTop: 64 }}>
					{console.log(this.props.data)}
					{postRender}
				</Content>
			</Layout>
		);
	}
}

const mapStateToProps = state => ({
	success: state.newsfeed.success,
	error: state.newsfeed.error,
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
