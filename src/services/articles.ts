import axios from "axios";

import { AXIOS_BASE_URL } from "../../credentials";

import { Article } from "../types/article";

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