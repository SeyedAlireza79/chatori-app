import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyD_TIerQZ3Pfe3LH0LuKyDWjcgFxtCkUBc',
		authDomain: 'chatori-dc9aa.firebaseapp.com',
		projectId: 'chatori-dc9aa',
		storageBucket: 'chatori-dc9aa.appspot.com',
		messagingSenderId: '907242950924',
		appId: '1:907242950924:web:34873afb6510b5ddf43929',
	})
	.auth();
