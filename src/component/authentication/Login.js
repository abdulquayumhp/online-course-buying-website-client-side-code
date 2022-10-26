import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";
import "../../Customcss/Register.css";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const { loginWithUser, setLoading } = useContext(ContextCreate);
	const [userInfo, setUserInfo] = useState({
		password: "",
		email: "",
	});

	const [error, setError] = useState({
		general: "",
	});

	const handleRegisterDataSubmit = e => {
		e.preventDefault();
		loginWithUser(userInfo.email, userInfo.password)
			.then(update => {
				console.log(update.user);
				Swal.fire("Good job!", "Successfully login", "success");
				navigate(from, { replace: true });
			})
			.catch(error => {
				console.log(error);
				setError({ ...error, general: error.message });
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const emailSubmit = e => {
		const email = e.target.value;
		setUserInfo({ ...userInfo, email: e.target.value });
	};
	const passwordSubmit = e => {
		const password = e.target.value;
		setUserInfo({ ...userInfo, password: e.target.value });
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

						<div className="flex justify-end text-xs dark:text-gray-400">
							<Link rel="noopener noreferrer" href="#">
								Forgot Password?
							</Link>
						</div>
					</div>
					<button className="block w-full bg-white p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Sign in
					</button>
					{error.general && <p className="error-message">{error.general}</p>}
				</form>
			</div>
		</div>
	);
};

export default Login;
