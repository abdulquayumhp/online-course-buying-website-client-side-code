import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";
import "../../Customcss/Register.css";

const Register = () => {
	const navigate = useNavigate();

	const {
		createUser,
		updateUserProfile,
		GoogleSignUp,
		faceBookLogin,
		gitHubLogin,
	} = useContext(ContextCreate);
	const [userInfo, setUserInfo] = useState({
		fullName: "",
		password: "",
		photoUrl: "",
		email: "",
	});

	const [error, setError] = useState({
		fullName: "",
		password: "",
		photoUrl: "",
		email: "",
		general: "",
	});
	// console.log(userInfo.fullName);

	const handleRegisterDataSubmit = e => {
		e.preventDefault();
		createUser(userInfo.email, userInfo.password)
			.then(update => {
				console.log(update.user);
				handleUpdateUserProfile(userInfo.fullName, userInfo.photoUrl);
				navigate("/");
			})
			.catch(error => {
				console.log(error);
				setError({ ...error, general: error.message });
			});
		// console.log(userInfo.fullName);
		// console.log(userInfo.photoUrl);
		// console.log(userInfo.email);
		// console.log(userInfo.password);
	};
	const handleUpdateUserProfile = (fullName, photoUrl) => {
		const profile = {
			displayName: fullName,
			photoURL: photoUrl,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch(error => console.error(error));
	};

	const fullNameSubmit = e => {
		const fullName = e.target.value;

		if (!/[ ]{1,}/.test(fullName)) {
			setError({ ...error, fullName: "please provide a valid name" });
			setUserInfo({ ...userInfo, fullName: "" });
		}
		// console.log(fullName);
		else {
			setError({ ...error, fullName: "" });
			setUserInfo({ ...userInfo, fullName: e.target.value });
		}
	};
	const photoUrlSubmit = e => {
		const photUrl = e.target.value;
		setUserInfo({ ...userInfo, photoUrl: e.target.value });
	};
	const emailSubmit = e => {
		const email = e.target.value;

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError({ ...error, email: "prease provide a valid email" });
			setUserInfo({ ...userInfo, email: "" });
		} else {
			setError({ ...error, email: "" });
			setUserInfo({ ...userInfo, email: e.target.value });
		}
	};
	const passwordSubmit = e => {
		const password = e.target.value;

		const lengthError = password.length < 6;
		const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);

		const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

		if (lengthError) {
			setError({ ...error, password: "Must be at least 6 characters" });
			setUserInfo({ ...userInfo, password: "" });
		} else if (noSymbolError) {
			setError({ ...error, password: "Must be at least 1 spacial symbol" });
			setUserInfo({ ...userInfo, password: "" });
		} else if (noCapitalLetterError) {
			setError({ ...error, password: "Must be at least 1 Capital Letter" });
			setUserInfo({ ...userInfo, password: "" });
		} else {
			setError({ ...error, password: "" });
			setUserInfo({ ...userInfo, password: e.target.value });
		}
	};
	const handleGoogleSignUser = () => {
		GoogleSignUp()
			.then(update => {
				console.log(update.user);
				navigate("/");
			})
			.catch(error => console.error(error));
	};

	const handleFacebookSignIn = () => {
		faceBookLogin()
			.then(update => {
				const user = update.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => console.error(error));
	};
	const handleGitHubSignIn = () => {
		gitHubLogin()
			.then(update => {
				const user = update.user;
				console.log(user);
				navigate("/");
			})
			.catch(error => console.error(error));
	};
	return (
		<div className="py-36">
			<div className="w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 bg-orange-200 dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form
					onSubmit={handleRegisterDataSubmit}
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-1 text-sm">
						<label for="username" className="block dark:text-gray-400">
							Enter Your Full Name
						</label>
						<input
							type="text"
							name="fullName"
							onChange={fullNameSubmit}
							id="username"
							placeholder="Enter Your Full name"
							className="w-full px-4 py-3 outline-none rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
						{error.fullName && (
							<p className="error-message">{error.fullName}</p>
						)}
					</div>
					<div className="space-y-1 text-sm">
						<label
							for="username"
							className="block outline-none dark:text-gray-400">
							Enter Your Photo Url
						</label>
						<input
							type="text"
							name="photoUrl"
							onChange={photoUrlSubmit}
							id="username"
							placeholder="Enter Your Photo Url"
							className="w-full px-4 py-3 rounded-md outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label for="username" className="block  dark:text-gray-400">
							Gmail
						</label>
						<input
							type="email"
							name="email"
							onChange={emailSubmit}
							id="username"
							placeholder="Enter Your Email"
							className="w-full px-4 py-3 rounded-md outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
						{error.email && <p className="error-message">{error.email}</p>}
					</div>
					<div className="space-y-1 text-sm">
						<label for="password" className="block dark:text-gray-400">
							Password
						</label>
						<input
							type="password"
							name="password"
							onChange={passwordSubmit}
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
						{error.password && (
							<p className="error-message">{error.password}</p>
						)}
						<div className="flex justify-end text-xs dark:text-gray-400">
							<Link rel="noopener noreferrer" href="#">
								Forgot Password?
							</Link>
						</div>
					</div>
					<button className="block w-full bg-white p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Sign in
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">
						Login with social accounts
					</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<Link aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaGoogle onClick={handleGoogleSignUser} />
					</Link>

					<Link aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaGithub onClick={handleGitHubSignIn} />
					</Link>
					<Link aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaFacebook onClick={handleFacebookSignIn} />
					</Link>
					<Link aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaTwitter />
					</Link>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to="/login" className="underline dark:text-gray-100">
						Log In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
