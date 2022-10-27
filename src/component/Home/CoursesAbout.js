import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesAbout = ({ curse }) => {
	const { picture, balance, category, title, totalView, id } = curse;
	// console.log(curse);
	return (
		<section className="py-6 bg-orange-200 dark:bg-gray-800 dark:text-gray-100 ">
			<div className=" w-full  p-5 ">
				<div className="   ">
					<article className="flex flex-col dark:bg-gray-900 bg-white w-full">
						<Link
							rel="noopener noreferrer"
							to="/"
							aria-label="Te nulla oportere reprimique his dolorum">
							<img
								alt=""
								className="object-cover w-full md:w-[400px]  h-52 dark:bg-gray-500"
								src={picture}
							/>
						</Link>
						<div className="flex flex-col flex-1 p-6">
							<Link
								rel="noopener noreferrer"
								href="#"
								aria-label="Te nulla oportere reprimique his dolorum">
								<p className="text-xl font-medium">{category}</p>
							</Link>

							<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
								{title ? title.slice(0, 20) + "..." : title}
							</h3>
							<div className="flex flex-wrap justify-between items-center pt-3 space-x-2 text-xs dark:text-gray-400">
								<span className="text-xl">{balance}</span>
								<Link className="bg-slate-100 py-2 px-4" to={`/courses/${id}`}>
									Know More
								</Link>
								<span className="flex items-center">
									<FaRegEye className="mr-2" /> {totalView}
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default CoursesAbout;
