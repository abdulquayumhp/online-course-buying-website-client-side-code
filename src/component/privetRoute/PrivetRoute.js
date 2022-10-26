import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextCreate } from "../../AuthContextProvide/AuthContextProvide";

const PrivetRoute = ({ children }) => {
	const { user, loading } = useContext(ContextCreate);

	const location = useLocation();

	if (loading) {
		return (
			<div className="py-36">
				<div className="w-16 h-16 border-4 border-dashed mx-auto rounded-full animate-spin bg-black "></div>
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;
};
export default PrivetRoute;
