import React from 'react';
import { connect } from 'react-redux';
import { setViewedUser } from '../../actions';


const UserCard = ({ id, email, name, setViewedUser }) => {

	const handleClick = () => {
		setViewedUser(email);
	}

	return(
		<div className="bg-white shadow p-8 m-4 rounded">
			<div className="text-center mt-4">
				<p className="text-gray-600 font-bold">
					{name}
				</p>
			</div>
			<div className="flex justify-center mt-4">
				<svg className="shadow w-16 h-16 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
			</div>
			<div className="mt-6">
				<button 
					onClick={handleClick}
					className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
				>
					Go to profile
				</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	setViewedUser
}

export default connect(null, mapDispatchToProps)(UserCard);