import { useEffect } from "react";
import StudentService from "../services/StudentService";

export default function Home() {
	useEffect(() => {
		StudentService.GetAllStudents()
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => {
				console.log("finshed");
			});
	}, []);
	return <p>Home Page Works!</p>;
}
