import React, { createContext, useEffect, useState } from "react";
import app from "../AuthContext/Authenticaiton";

import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
export const ContextCreate = createContext();
const auth = getAuth(app);

const AuthContextProvide = ({ children }) => {
	const GoogleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const gitHubProvider = new GithubAuthProvider();

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [them, setThem] = useState(null);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginWithUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = profile => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const logOut = () => {
		// setLoading(true);
		return signOut(auth);
	};
	const GoogleSignUp = () => {
		setLoading(true);
		return signInWithPopup(auth, GoogleProvider);
	};
	const gitHubLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, gitHubProvider);
	};
	const faceBookLogin = () => {
		return signInWithPopup(auth, facebookProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const authInfo = {
		user,
		createUser,
		loginWithUser,
		updateUserProfile,
		logOut,
		setLoading,
		loading,
		GoogleSignUp,
		faceBookLogin,
		gitHubLogin,
		them,
		setThem,
	};

	return (
		<div>
			<ContextCreate.Provider value={authInfo}>
				{children}
			</ContextCreate.Provider>
		</div>
	);
};

export default AuthContextProvide;
