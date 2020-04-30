import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { getAllPosts } from '../../actions';
import Post from '../Post/Post';

class Feed extends React.Component {

	componentDidMount() {
		if (history.location.pathname === '/main/home') {
			this.props.getAllPosts()
		}
	}

	render() {
		return(
			<div className='w-full'>
				{
					this.props.feed.map(post => {
						return <Post 
							key={post.id}
							id={post.id}
							name={post.name}
							created={post.created}
							content={post.content}
							likes={post.likes}
							email={post.email}
						/>
					})
				}
			</div>
		)
	}
	
}

const mapStateToProps = (state) => ({
	viewedUser: state.viewedUserReducer.viewedUser,
	feed: state.feedReducer.feed
})

const mapDispatchToProps = {
	getAllPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);