import React from "react";

const Blog = () => {
	return (
		<div className="py-32 cures-container">
			<section className="dark:bg-gray-800 dark:text-gray-100 text-white">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
					<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
						Frequently Asked Questions
					</h2>
					<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								what is cors in node js?
							</summary>
							<div className="px-4 pb-4">
								<p>
									CORS stands for Cross-Origin Resource Sharing. It allows us to
									relax the security applied to an API,In other words, CORS is a
									browser security feature that restricts cross-origin HTTP
									requests with other servers and specifies which domains access
									your resources.
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								Why are you using firebase? What other options do you have to
								implement authentication?
							</summary>
							<div className="px-4 pb-4">
								<p>
									1.Why are you using firebase?
									<br />
									Firebase Authentication provides backend services, easy-to-use
									SDKs, and ready-made UI libraries to authenticate users to
									your app. It supports authentication using passwords, phone
									numbers, popular federated identity providers like Google,
									Facebook and Twitter, and more.
									<br />
									2.What other options do you have to implement authentication?
									<br />
									There have a multiple option for authentication 3rd party
									1.Auth0, 2.Amazon Cognito, 3.OneLogin, 4.Frontegg,
									5.PingIdentity, 6.Okta, 7.Supabase, 8.Ory, 9.STYTCH
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								How does the private route work?
							</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>
									The constraints for Public and Private routes are that Public
									routes should not be accessed after login and Private routes
									should not be accessible before login. The private route
									component is similar to the public route, the only change is
									that redirect URL and authenticate condition. If the user is
									not authenticated he will be redirected to the login page and
									the user can only access the authenticated routes If he is
									authenticated (Logged in).
								</p>
							</div>
						</details>
						<details>
							<summary className="py-2 outline-none cursor-pointer focus:underline">
								What is Node? How does Node work?
							</summary>
							<div className="px-4 pb-4 space-y-2">
								<p>
									1.What is Node?
									<br />
									Node.js is an open-source backend javascript runtime
									environment. It is a used as backend service where javascript
									works on the server-side of the application. This way
									javascript is used on both frontend and backend. Node.js runs
									on chrome v8 engine which converts javascript code into
									machine code, it is highly scalable, lightweight, fast, and
									data-intensive.
								</p>
								<p>
									2.How does Node work?
									<br />
									Node.js accepts the request from the clients and sends the
									response, while working with the request node.js handles them
									with a single thread. To operate I/O operations or requests
									node.js use the concept of threads. Thread is a sequence of
									instructions that the server needs to perform. It runs
									parallel on the server to provide the information to multiple
									clients. Node.js is an event loop single-threaded language. It
									can handle concurrent requests with a single thread without
									blocking it for one request.
								</p>
							</div>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
