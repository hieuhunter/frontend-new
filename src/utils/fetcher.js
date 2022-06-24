import { getCookie } from "./cookies";
import http from "./http";

const fetcher = async (url) => {
	const response = await http.get({
		url: url,
		token: getCookie('token')
	});
	return response.data;
};

export default fetcher;
