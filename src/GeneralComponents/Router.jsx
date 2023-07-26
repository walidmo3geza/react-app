import { createBrowserRouter } from "react-router-dom";

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <div>Dashboard</div>,
		},
	]);

	// {navigation.state === "loading" && <GlobalSpinner />}
}
