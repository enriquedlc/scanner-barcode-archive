import axios from "axios";
import { ImageProps } from "react-native";

import { AXIOS_BASE_URL } from "../../credentials";

type CategoryId = `${string}-${string}-${string}-${string}-${string}`;

export interface Category {
	id: CategoryId;
	categoryName: string;
	icon: ImageProps["source"];
}

interface CategoriesResponse {
	message: string;
	categories: Category[];
}

export const getAllCategories = async () => {
	try {
		const response = await axios.get<CategoriesResponse>(`${AXIOS_BASE_URL}/categories/`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
