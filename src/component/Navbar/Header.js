import React, { useContext, useState } from "react";
import { FaBars, FaLandmark, FaStar, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [themeToggle, setThemeToggle] = useState(false);

	const { user, logOut, setThem, them } = useContext(ContextCreate);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error => console.error(error));
	};

	return (
		<div>
			<header
				className={`p-4 fixed w-full ${them}  dark:bg-gray-800 dark:text-gray-100 text-orange-200 `}>
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
						<div
							onClick={() => {
								setThemeToggle(!themeToggle);
							}}>
							{themeToggle ? (
								<button
									onClick={() => setThem("bg-gray-900")}
									title=" Dark Mode"
									className="flex  p-2 w-full items-center gap-1 font-bold">
									{" "}
									<FaStar className="font-bold mt-1 dark:text-white text-lg" />{" "}
									Dark Mode
								</button>
							) : (
								<button
									onClick={() => setThem("bg-blue-600")}
									title=" Light Mode">
									<FaLandmark className="font-bold mt-1 dark:text-white	text-lg" />{" "}
									Light Mode
								</button>
							)}
						</div>

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
