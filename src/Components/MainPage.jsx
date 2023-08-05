import { Link } from "react-router-dom";
import Router from "../GeneralComponents/Router";

export default function MainPage() {
	return (
		<div>
			<div id="sidebar">
				<nav>
					<ul>
						<li>
							<Link to={`/`}>Home</Link>
						</li>
						<li>
							<Link to={`/blog`}>Blogs</Link>
						</li>
						<li>
							<Link to={`/users`}>Users</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Router />
		</div>
	);
}
