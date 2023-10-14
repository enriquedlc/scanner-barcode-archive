import axios from "axios";

import { AXIOS_BASE_URL } from "../../credentials";

type CategoryId = `${string}-${string}-${string}-${string}-${string}`;

interface Category {
	id: CategoryId;
	categoryName: string;
}

interface CategoriesResponse {
	categories: Category[];
}

export const getCategories = async () => {
	try {
		const response = await axios.get<CategoriesResponse>(`${AXIOS_BASE_URL}/categories/`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
