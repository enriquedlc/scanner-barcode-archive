import { create } from "zustand";

import { CategoryName } from "../constants/category-item-list-icons/category-item-list-icons";

interface State {
	articleCategoryDetailListName: CategoryName;
}

interface Actions {
	setArticleCategoryDetailListName: (categoryName: CategoryName) => void;
	getArticleCategoryDetailListName: () => CategoryName;
}

export const useArticleListDetailStore = create<State & Actions>((set, get) => ({
	articleCategoryDetailListName: "",

	setArticleCategoryDetailListName: (categoryName: CategoryName) =>
		set({ articleCategoryDetailListName: categoryName }),

	getArticleCategoryDetailListName: () => get().articleCategoryDetailListName,
}));
