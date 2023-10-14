import { create } from "zustand";

import { Category, getAllCategories } from "../services/category";

interface State {
	categories: Category[];
}

interface Actions {
	setCategories: (categories: Category[]) => void;
	getCategories: () => Category[];
	fetchCategories: () => Promise<void>;
}

export const useCategoriesStore = create<State & Actions>((set, get) => ({
	categories: [],

	setCategories: (categories: Category[]) => set({ categories }),

	getCategories: () => get().categories,

	fetchCategories: async () => {
		const response = await getAllCategories();
		if (response?.categories) set({ categories: response.categories });
	},
}));
