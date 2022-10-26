import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContextProvide from "./AuthContextProvide/AuthContextProvide";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvide>
			<App />
		</AuthContextProvide>
	</React.StrictMode>
);
