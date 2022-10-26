import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
				<img
					src="https://cdn3.iconfinder.com/data/icons/emoji/100/Emoji_Sorry-512.png"
					alt=""
				/>
				<p className="text-3xl text-red-600">
					Sorry We Can Provide Any Type of valid information Because it's not a
					valid root
				</p>
				<Link
					to="/"
					className="px-8 py-3 text-white bg-red-600 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
					Back to homepage
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
