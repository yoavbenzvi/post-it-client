import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { getAllPosts } from '../actions'
import baseURL from '../api';
import Feed from '../components/Feed/Feed';

const renderInputField = ({ input }) => {
	return(
		<div>
			<div className='flex justify-center'>
				<textarea 
					{...input}
					maxLength='60'
					className='lg:w-1/2 md:w-4/5 self-center border-2 border-md border-gray-600 bg-white text-center h-10 px-8 lg:px-16 text-sm focus:outline-none' 
					type='text' 
					placeholder="Write a new post..." 
				/>
			</div>
			<div className='flex justify-center'>
				<button 
					className='m-2 w-1/6 rounded shadow-md shadow bg-blue-500 text-white hover:bg-blue-400'
					type='submit'
				>
					Post
				</button>
			</div>
		</div>
	)
}

const Home = ({ getAllPosts, resetForm, handleSubmit, reset, currentUser }) => {

	const publishPost = (formValues) => {
		//change url later

		baseURL.post('/posts', {
			
				"email": currentUser.email,
				"id": 9,
				"name": currentUser.name,
				"created": new Date(),
				content: formValues.content,
				"likes": []
			
		})
			//Should respond with all posts -
			// and change the feed in the store!
			.then(() => {
					reset('writePost');
					getAllPosts();
				}
			)
	}

	return(
		<div className='w-full flex justify-center p-2'>
			<div className='w-full flex flex-col'>
				<form
					onSubmit={handleSubmit(publishPost)}
				>
					<Field name='content' component={renderInputField}/>
				</form>
				<Feed/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUserReducer.data
})

const mapDispatchToProps = {
	reset,
	getAllPosts
}

const WrappedHome = reduxForm({
	form: 'writePost',
	//validate
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHome)