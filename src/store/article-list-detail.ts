import { create } from "zustand";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { CategoryName } from "../constants/category-item-list-icons/category-item-list-icons";

interface State {
	articleCategoryDetailListName: CategoryName;
}

interface Actions {
	setArticleCategoryDetailListName: (categoryName: CategoryName) => void;
	getArticleCategoryDetailListName: () => CategoryName;
}

export const useArticleListDetailStore = create<State & Actions>()(
	persist(
		(set, get) => ({
			articleCategoryDetailListName: "All",

			setArticleCategoryDetailListName: (categoryName) =>
				set({ articleCategoryDetailListName: categoryName }),

			getArticleCategoryDetailListName: () => get().articleCategoryDetailListName,
		}),
		{
			name: "article-list-detail-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
