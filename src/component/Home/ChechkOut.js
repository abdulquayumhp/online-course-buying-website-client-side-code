import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";

const ChechkOut = () => {
	const navigate = useNavigate();
	const coursePricing = useLoaderData();
	const { user } = useContext(ContextCreate);
	console.log(user);
	const { displayName, email, photoURL, phoneNumber } = user;
	console.log(coursePricing);
	const {
		picture,
		Duration,
		Quiz,
		balance,
		category,
		details,
		id,
		lecture,
		rating,
		title,
		totalView,
		Language,
	} = coursePricing;
	console.log(details);

	const handelSubmitPrice = () => {
		Swal.fire(
			"Good job!",
			"Thank you to purchase our courses! You will get a email on this email as soon as possible",
			"success"
		);
		navigate("/Courses");
	};
	return (
		<div className="bg-blue-900 text-black">
			<div className="flex  justify-center py-36">
				<section className="border-2 bg-orange-200 text-black ">
					<div className=" md:w-[800px] ">
						<div className="">
							<p className="text-center text-4xl py-5">{category}</p>
							<div className=" w-full text-center">
								<img className="mx-auto" src={picture} alt="" />
							</div>
							<h1 className="text-4xl font-semibold px-10 py-10">{details}</h1>
							<p className="px-10">{details}</p>
							<div className="text-center">
								<p className="text-3xl py-5">Fee : {balance}</p>
								<p className="text-3xl py-5">Duration : {Duration}</p>
								<p className="text-3xl py-5">Lecture : {lecture}</p>
							</div>
							<div className="mx-5 ">
								<button
									className=" border-2 my-2 py-2  w-full bg-orange-200 text-black  hover:bg-blue-300"
									onClick={handelSubmitPrice}>
									Bye This Corse
								</button>
							</div>
						</div>
					</div>
				</section>

				<div className="h-full ">
					<p className="text-center text-4xl py-5 text-orange-200">USER INFO</p>
					<div className="max-w-md border-2  ml-5 p-8 sm:flex sm:space-x-6 bg-orange-200 dark:text-gray-100">
						<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
							<img
								src={photoURL}
								alt=""
								className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<div>
								<h2 className="text-2xl font-semibold">{displayName}</h2>
								<span className="text-sm dark:text-gray-400">{email}</span>
							</div>
							<div className="space-y-1">
								<span className="flex items-center space-x-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										aria-label="Email address"
										className="w-4 h-4">
										<path
											fill="currentColor"
											d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
									</svg>
									<span className="dark:text-gray-400">address : "N/A"</span>
								</span>
								<span className="flex items-center space-x-2">
									<span className="dark:text-gray-400">
										Phone : {phoneNumber ? phoneNumber : "N/A"}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChechkOut;
