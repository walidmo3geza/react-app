import axios from "axios";
import getApiBaseUrl from "../Helpers/getApiBaseUrl";

const baseUrl = getApiBaseUrl() + "Home/";

export default class StudentService {
	static GetAllStudents() {
		return axios.get(baseUrl + "get-all-students");
	}
}
