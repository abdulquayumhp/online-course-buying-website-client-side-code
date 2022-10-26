import { createBrowserRouter } from "react-router-dom";
import Login from "../component/authentication/Login";
import Register from "../component/authentication/Register";
import Blog from "../component/Home/Blog";
import ChechkOut from "../component/Home/ChechkOut";
import Courses from "../component/Home/Courses";
import CurseDetails from "../component/Home/CurseDetails";
import ErrorPage from "../component/Home/ErrorPage";
import Faq from "../component/Home/Faq";
import Home from "../component/Home/Home";
import PrivetRoute from "../component/privetRoute/PrivetRoute";
import Main from "../Render/Main";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/courses",
				element: <Courses />,
				loader: () => fetch("https://assaignment-eleven.vercel.app/courses"),
			},
			{
				path: "/faq",
				element: <Faq />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/signIn",
				element: <Register />,
			},

			{
				path: "/courses/:id",
				element: <CurseDetails />,
				loader: ({ params }) =>
					fetch(`https://assaignment-eleven.vercel.app/courses/${params.id}`),
			},
			{
				path: "/checkout/:id",
				element: (
					<PrivetRoute>
						<ChechkOut />
					</PrivetRoute>
				),
				loader: ({ params }) =>
					fetch(`https://assaignment-eleven.vercel.app/courses/${params.id}`),
			},
		],
	},
]);
