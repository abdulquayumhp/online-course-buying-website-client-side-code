import React from "react";

const Faq = () => {
	return (
		<div className="details-container text-white pt-36">
			<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
				<div className="container p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold">OUR BEST TEACHER</h2>
					</div>
					<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
						<article className="flex flex-col dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="#"
								aria-label="Te nulla oportere reprimique his dolorum">
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src={
										"https://www.scholastic.com/content/dam/scholastic/educators/articles/sample-lesson-plan-new-teachers-lesson-plan_ART_4-3.jpg"
									}
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								<a
									rel="noopener noreferrer"
									href="#"
									aria-label="Te nulla oportere reprimique his dolorum"></a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
									Abdul Quayum
								</a>
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									react developer
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 1, 2020</span>
									<span>2.1K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="#"
								aria-label="Te nulla oportere reprimique his dolorum">
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src={
										"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkCJGf1H5VMPwibT0Qo3uSnllSiphrTosUA&usqp=CAU"
									}
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								<a
									rel="noopener noreferrer"
									href="#"
									aria-label="Te nulla oportere reprimique his dolorum"></a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
									nishinta khannan
								</a>
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									web designer
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 2, 2020</span>
									<span>2.2K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="#"
								aria-label="Te nulla oportere reprimique his dolorum">
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src={
										"https://www.minnpost.com/wp-content/uploads/2022/09/JamesCannon828.png?strip=all"
									}
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								<a
									rel="noopener noreferrer"
									href="#"
									aria-label="Te nulla oportere reprimique his dolorum"></a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
									abdul rashid
								</a>
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									network specialist
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 3, 2020</span>
									<span>2.3K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="#"
								aria-label="Te nulla oportere reprimique his dolorum">
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src={
										"https://internationalteacherstraining.com/blog/wp-content/uploads/2017/07/20.03.2020-10-Essential-Needs-for-Teacher-Training-728x370.jpg"
									}
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								<a
									rel="noopener noreferrer"
									href="#"
									aria-label="Te nulla oportere reprimique his dolorum"></a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
									alia khatun jamanna
								</a>
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									graphis desginer
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 4, 2020</span>
									<span>2.4K views</span>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Faq;
