import axios from "axios";
import { createContext } from "react";

const InterseptoprContext = createContext();

export default function InterseptoprContextProvider(props) {
	axios.interceptors.request.use(
		function (config) {
			// Do something before request is sent
			const accessToken = JSON.parse(localStorage.getItem("token"));

			// ** If token is present add it to request's Authorization Header
			// if (accessToken) {
			if (config.headers) config.headers.token = accessToken;
			// }
			return config;
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	axios.interceptors.response.use(
		function (response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function (error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		}
	);
	return (
		<InterseptoprContext.Provider value={null}>
			{props.children}
		</InterseptoprContext.Provider>
	);
}
