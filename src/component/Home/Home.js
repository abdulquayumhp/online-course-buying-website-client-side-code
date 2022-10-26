import React from "react";

import "../../Customcss/Home.css";
import Category from "./Category";

const Home = () => {
	return (
		<div>
			{/* <div className="home-container">
				<div className="flex md:flex-row flex-col ">
					<div className="pt-36  text-white text-center md:text-left ">
						<div className=" md:my-36 md:ml-36 text-center md:text-left ">
							<h1 className="text-3xl  md:pl-8 ">
								learn and bright your future
							</h1>
							<div className="flex items-center justify-center md:justify-start  pb-5 ">
								<FaForumbee className="text-8xl md:text-9xl text-orange-200 px-6" />
								<h1 className="text-3xl md:text-8xl font-medium ">
									Future Heros
								</h1>
							</div>
							<div className="flex items-center md:justify-start justify-center">
								<Link
									className="md:ml-8 py-3 text-black px-16  bg-orange-200"
									to="/courses">
									Enroll Course
								</Link>
								<FaArrowRight className="-ml-10 text-black" />
							</div>
						</div>
					</div>
					<div>
						<div className="w-full  md:mt-56 ">
							<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 text-white ">
								<h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
									Get Our Updates
								</h1>
								<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
									Find out about events and other news
								</p>
								<div className="flex flex-row">
									<input
										type="text"
										placeholder="example@email.com"
										className="w-5/5 p-3 rounded-l-lg sm:w-2/3 outline-none"
									/>
									<button
										type="button"
										className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-orange-200 
                                text-black dark:text-gray-900">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* end  */}
				</div>
				<Category />
			</div> */}
		</div>
	);
};

export default Home;
