import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Home/Blog";
import Courses from "../component/Home/Courses";
import Faq from "../component/Home/Faq";
import Home from "../component/Home/Home";
import Main from "../Render/Main";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
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
				path: "/",
				element: <Home />,
			},
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);
