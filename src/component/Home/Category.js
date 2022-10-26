import React from "react";
import {
	FaArrowRight,
	FaBookOpen,
	FaLaptop,
	FaRegAddressBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
	return (
		<div className="flex flex-wrap h-full justify-evenly py-20">
			<div className="flex items-center my-10 w-[300px] bg-orange-200 px-4 py-5 mx-5 rounded-sm">
				<FaLaptop className="text-6xl mr-2 " />
				<div className="">
					<h1 className="text-2xl font-medium">LEARN ONLINE</h1>
					<div className="flex item-center ">
						<Link to="/courses">
							View More
							<span>
								<FaArrowRight className="inline " />
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="rounded-sm flex items-center my-10 w-[300px] bg-orange-200 px-4 py-5 mx-5">
				<FaRegAddressBook className="text-6xl mr-2 " />
				<div className="">
					<h1 className="text-2xl font-medium">BEST TEACHER</h1>
					<div className="flex item-center ">
						<Link to="/courses">
							View More
							<span>
								<FaArrowRight className="inline " />
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="rounded-sm flex items-center my-10 w-[300px] bg-orange-200 px-4 py-5 mx-5">
				<FaBookOpen className="text-6xl mr-2 " />
				<div className="">
					<h1 className="text-2xl font-medium">ONLINE LIBRARY</h1>
					<div className="flex item-center ">
						<Link to="/courses">
							View More
							<span>
								<FaArrowRight className="inline " />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
