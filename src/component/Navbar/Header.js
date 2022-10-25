import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<header className="p-4 fixed w-full dark:bg-gray-800 dark:text-gray-100 text-orange-200">
				<div className="container flex justify-between h-16 w-full mx-auto">
					<Link
						to="/"
						aria-label="Back to homepage"
						className="flex items-center p-2">
						<img
							className="w-32 object-cover "
							src="https://www.eatlogos.com/education_logos/png/book_sun_education_vector_logo_inspiration.png"
							alt=""
						/>
					</Link>

					<div
						className={`flex m-0 p-0  text-white text-center md:text-cyan-700 absolute   lg:static  duration-500 ease-in-out z-10   bg-blue-800  md:w-0 w-full md:bg-white   ${
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
									to="/courses"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Faq
								</Link>
							</li>
							<li className="flex">
								<Link
									to="/courses"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Blog
								</Link>
							</li>
							<li className="flex">
								<Link
									to="/courses"
									className="flex items-center px-4 md:-mb-1 border-b-2 dark:border-transparent text-orange-200">
									Courses
								</Link>
							</li>
						</ul>
					</div>

					<div className="items-center flex-shrink-0 hidden lg:flex">
						<label
							for="Toggle1"
							className="inline-flex items-center space-x-4 cursor-pointer  dark:text-gray-100">
							<span className="relative">
								<input id="Toggle1" type="checkbox" className="hidden peer" />
								<div className="w-10 h-6 bg-white rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
								<div className="absolute bg-black inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
							</span>
						</label>
						<button className="self-center px-8 py-3 rounded">Log In</button>
						<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
							Sign In
						</button>
					</div>
					<div className="p-4 lg:hidden z-10" onClick={() => setOpen(!open)}>
						{!open ? <FaBars /> : <FaTimes />}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
