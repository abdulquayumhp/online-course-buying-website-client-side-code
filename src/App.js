import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { routes } from "./Layout/Routes";

function App() {
	return (
		<div className="App">
			<RouterProvider router={routes}></RouterProvider>
			<Toaster />
		</div>
	);
}

export default App;
