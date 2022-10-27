import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut, setThem, thems } = useContext(ContextCreate);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error => console.error(error));
	};

	return (
		<div>
			<header className="p-4 fixed w-full dark:bg-gray-800 dark:text-gray-100 text-orange-200">
				<div className="container flex justify-between h-16 w-full mx-auto">
					<Link
						to="/"
						aria-label="Back to homepage"
						className="flex items-center p-2">
						<img
							className="md:w-32 w-24 object-cover "
							src="https://www.eatlogos.com/education_logos/png/book_sun_education_vector_logo_inspiration.png"
							alt=""
						/>
					</Link>

					<div
						className={`flex m-0 p-0  text-blue-200 text-center md:text-cyan-700 absolute   lg:static  duration-500 ease-in-out z-10   bg-orange-800  md:w-0 w-full md:bg-white   ${
							open ? "top-0" : "top-[-280px]"
						}`}>
						<ul className={` md:p-0 p-5  lg:flex-row flex-col flex mx-auto`}>
							<li className="flex">
								<Link
									to="/courses"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Courses
								</Link>
							</li>
							<li className="flex">
								<Link
									to="/faq"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Faq
								</Link>
							</li>
							<li className="flex">
								<Link
									to="/blog"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className=" flex lg:flex items-center">
						<label className="swap swap-rotate ">
							<input type="checkbox" />

							<svg
								className="swap-on fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
							</svg>

							<svg
								className="swap-off fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
							</svg>
						</label>

						<div>
							<>
								{user?.uid ? (
									<>
										<div className="flex items-center">
											<button
												onClick={handleLogOut}
												to="/logOut"
												className="self-center px-2 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
												LogOut
											</button>
											<div>
												<div
													className="tooltip tooltip-bottom"
													data-tip={user.displayName}>
													<img
														alt=""
														src={user?.photoURL}
														className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
													/>
												</div>
											</div>
										</div>
									</>
								) : (
									<>
										<Link to="/login" className="self-center px-2 py-3 rounded">
											Log In
										</Link>
										<Link
											to="/signIn"
											className="self-center px-2 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
											Sign Up
										</Link>
									</>
								)}
							</>
						</div>
					</div>
					<div
						className="p-4 lg:hidden z-10 text-red-900"
						onClick={() => setOpen(!open)}>
						{!open ? <FaBars /> : <FaTimes />}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
