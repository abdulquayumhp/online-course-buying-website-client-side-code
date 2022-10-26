import React, { useRef } from "react";
import { FaEye, FaFileDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "../../Customcss/details-container.css";

const CurseDetails = () => {
	const curseDetails = useLoaderData();
	console.log(curseDetails);
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
	} = curseDetails;

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: "emp-data",
	});

	return (
		<div className="details-container pb-20">
			<div ref={componentRef} style={{ width: "100%" }} className="pt-36">
				<h1 className="text-center text-4xl font-medium pb-5 text-white">
					Course Details
				</h1>
				<div className="container text-white bg-blue-800 flex flex-col w-full md:w-[1000px] p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
					<div className="flex justify-center ">
						<div>
							<img
								className="w-full h-[500px] object-cover rounded-lg pr-2"
								src={picture}
								alt=""
							/>
						</div>
						<div>
							<div className="tooltip " data-tip="Download Pdf ">
								<FaFileDownload
									className="cursor-pointer text-5xl p-2 rounded-lg bg-blue-600"
									onClick={handlePrint}
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between p-4">
						<div className="flex space-x-4">
							<div>
								<h4 className="font-bold">{title}</h4>
								<div className="flex items-center pt-2">
									<FaEye className="mr-2 " />
									<span className="text-xs dark:text-gray-400">
										{totalView}
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center space-x-2 dark:text-yellow-500">
							<span className="text-xl font-bold">{rating}</span>
						</div>
					</div>
					<div className="p-4 space-y-2 text-sm dark:text-gray-400">
						<p>{details}</p>
					</div>
					<div className="">
						<div className="flex items-center justify-between md:px-20  divide-y w-full py-2 ">
							<p className="text-xl font-medium">Duration</p>
							<p className="text-xl">{Duration}</p>
						</div>
						<div className="flex items-center justify-between md:px-20  divide-y w-full py-2 ">
							<p className="text-xl font-medium">Lecture</p>
							<p className="text-xl">{lecture}</p>
						</div>
						<div className="flex items-center justify-between  divide-y w-full py-2 md:px-20  ">
							<p className="text-xl font-medium">Quiz</p>
							<p className="text-xl">{Quiz}</p>
						</div>
						<div className="flex items-center justify-between  divide-y w-full py-2 md:px-20  ">
							<p className="text-xl font-medium">Language</p>
							<p className="text-xl">{Language}</p>
						</div>
						<div className="flex items-center justify-between  divide-y w-full py-2 md:px-20  ">
							<p className="text-xl font-medium">Total Fee</p>
							<p className="text-xl">{balance}</p>
						</div>
					</div>
					<Link
						to={`/pricing/${id}`}
						className="bg-blue-700 py-2 rounded-lg text-center">
						Buy This Course
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CurseDetails;
