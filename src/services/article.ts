import axios from "axios";

import { User } from "../store/user-auth";
import { Article, ArticleFormP } from "../types/article";
import { ScannedData } from "../types/types";

interface ArticlesResponse {
	message: string;
	articles: Article[];
}

const AXIOS_BASE_URL = "https://article-scanner-server-dev-dzcf.3.us-1.fl0.io";

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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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

interface UpdateArticleResponse {
	message: string;
	updated: boolean;
	article: Article;
}

export const updateArticle = async (article: Article, articleId: Article["id"]) => {
	try {
		const response = await axios.put<UpdateArticleResponse>(
			`${AXIOS_BASE_URL}/articles/${articleId}`,
			{
				...article,
				category: {
					categoryName: article.categoryName,
				},
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

interface DeleteArticleResponse {
	message: string;
	deleted: boolean;
}

export const deleteArticle = async (articleId: Article["id"]) => {
	try {
		const response = await axios.delete<DeleteArticleResponse>(
			`${AXIOS_BASE_URL}/articles/${articleId}`,
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
