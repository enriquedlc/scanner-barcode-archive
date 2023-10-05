import { create } from "zustand";

import { getArticlesByUserId } from "../services/articles";
import { Article } from "../types/article";
import { User } from "./user-auth";

interface State {
	articles: Article[];
}

interface Actions {
	setArticles: (articles: Article[]) => void;
	getArticles: () => Article[];
	fetchArticles: (userId: User["id"]) => Promise<void>;
}

export const useArticlesStore = create<State & Actions>((set, get) => ({
	articles: [],

	setArticles: (articles: Article[]) => set({ articles }),

	getArticles: () => get().articles,

	fetchArticles: async (userId: User["id"]) => {
		const response = await getArticlesByUserId(userId);
		set({ articles: response?.articles });
	},
}));
