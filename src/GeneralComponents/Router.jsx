import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import BlogApp from "../Components/BlogApp";
import UserApp from "../Components/UserApp";
import ErrorPage from "../Components/ErrorPage";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog/" element={<BlogApp />} />
			<Route path="/blog/child/" element={<p>Child Element Works!</p>} />
			<Route path="/users/" element={<UserApp />} />
			<Route path="/users/" element={<UserApp />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
