import React from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';

// Styles
import styles from './Login.module.css';

// Images
import googleLogo from './../assets/icons/google.svg';

const Login = () => {
	return (
		<div className={styles.loginPage}>
			<div className={styles.loginCard}>
				<h2>
					Welcome to <span className={styles.nameApp}>Chatori</span>
				</h2>
				<div className={styles.loginBtn} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
					<img src={googleLogo} alt="logo" />
					<span>Sign in with Google</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
