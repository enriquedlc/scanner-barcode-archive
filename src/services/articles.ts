import axios from "axios";

import { AXIOS_BASE_URL } from "../../credentials";

import { Article } from "../types/article";
import { User } from "../store/user-auth";
import { ScannedData } from "../types/types";

interface ArticlesResponse {
    message: string;
    articles: Article[];
}

export const getArticlesByUserId = async (userId: string) => {
    try {
        const response = await axios.get<ArticlesResponse>(
            `${AXIOS_BASE_URL}/articles/user/${userId}/`
        );
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

interface CreateArticleResponse {
    message: string;
    created: boolean;
    article: Article;
}

export const createArticle = async (article: Article, userId: User["id"], scannedBarcode: ScannedData["data"]) => {
    try {
        console.info('createArticle', scannedBarcode)
        const response = await axios.post<CreateArticleResponse>(
            `${AXIOS_BASE_URL}/articles`,
            {
                userId: userId,
                article: {
                    ...article,
                    barcode: scannedBarcode,
                    category: {
                        categoryName: article.categoryName
                    }
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}; 
