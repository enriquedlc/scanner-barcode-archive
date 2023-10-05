import axios from "axios";

import { AXIOS_BASE_URL } from "../../credentials";

import { User } from "../store/user-auth";
import { Article, ArticleFormP } from "../types/article";
import { ScannedData } from "../types/types";

interface ArticlesResponse {
	message: string;
	articles: Article[];
}

export const getArticlesByUserId = async (userId: string) => {
	try {
		if (!userId) return;
		const response = await axios.get<ArticlesResponse>(
			`${AXIOS_BASE_URL}/articles/user/${userId}/`,
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

interface CreateArticleResponse {
	message: string;
	created: boolean;
	article: Article;
}

interface CreateArticleData {
	userId: User["id"];
	article: ArticleFormP;
}

export const createArticle = async (
	article: Article,
	userId: User["id"],
	scannedBarcode: ScannedData["data"],
) => {
	try {
		console.info("createArticle", scannedBarcode);
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		const response = await axios.post<CreateArticleResponse, any, CreateArticleData>(
			`${AXIOS_BASE_URL}/articles`,
			{
				userId: userId,
				article: {
					...article,
					barcode: scannedBarcode,
					category: {
						categoryName: article.categoryName,
					},
				},
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
