import React, { useEffect, useState, useContext } from 'react';
import { auth } from './../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Context
import { AuthContext } from '../context/AuthContextProvider';

// Component
import Navbar from './Navbar';

// Styles
import styles from './Chats.module.css';

const Chats = () => {
	const [loading, setLoading] = useState(true);
	const user = useContext(AuthContext);

	const history = useHistory();

	useEffect(() => {
		if (!user) {
			history.push('/');
			return;
		}

		axios
			.get('https://api.chatengine.io/users/me', {
				headers: {
					'project-id': '4b09d48e-e151-4c2e-8f2c-6ce9001fc62d',
					'user-name': user.email,
					'user-secret': user.uid,
				},
			})
			.then(() => setLoading(false))
			.catch(() => {
				let formdata = new FormData();
				formdata.append('email', user.email);
				formdata.append('username', user.email);
				formdata.append('secret', user.uid);
				getFile(user.photoURL).then((avatar) => {
					formdata.append('avatar', avatar, avatar.name);
				});
				axios
					.post('https://api.chatengine.io/users/', formdata, {
						headers: {
							'private-key': 'd57159f1-4e99-4fd8-9711-d429a3722b92',
						},
					})
					.then(() => setLoading(false))
					.catch((error) => console.log(error));
			});
	}, [user, history]);

	const getFile = async (url) => {
		const response = await fetch(url);
		const data = await response.blob();
		console.log(data);
		return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
	};

	const logoutHandler = async () => {
		await auth.signOut();
		history.push('/');
	};

	if (!user || loading) return 'Loading...';

	return (
		<div className={styles.container}>
			<Navbar logoutHandler={logoutHandler} />

			<ChatEngine
				height="calc(100vh - 60px)"
				projectID="4b09d48e-e151-4c2e-8f2c-6ce9001fc62d"
				userName={user.email}
				userSecret={user.uid}
			/>
		</div>
	);
};

export default Chats;
