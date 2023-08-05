import { BrowserRouter } from "react-router-dom";
import InterseptoprContextProvider from "./contexts/InterseptoprContext";
import MainPage from "./Components/MainPage";

export default function App() {
	return (
		<InterseptoprContextProvider>
			<BrowserRouter>
				<MainPage />
			</BrowserRouter>
		</InterseptoprContextProvider>
	);
}
