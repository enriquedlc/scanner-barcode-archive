import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { getArticlesByUserId } from "../services/article";
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

export const useArticlesStore = create<State & Actions>()(
	persist(
		(set, get) => ({
			articles: [],

			setArticles: (articles: Article[]) => set({ articles }),

			getArticles: () => get().articles,

			fetchArticles: async (userId: User["id"]) => {
				const response = await getArticlesByUserId(userId);
				set({ articles: response?.articles });
			},
		}),
		{
			name: "articles-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
