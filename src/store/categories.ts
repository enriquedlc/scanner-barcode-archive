import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Category, getAllCategories } from "../services/category";

interface State {
	categories: Category[];
}

interface Actions {
	setCategories: (categories: Category[]) => void;
	getCategories: () => Category[];
	fetchCategories: () => Promise<void>;
}

export const useCategoriesStore = create<State & Actions>()(
	persist(
		(set, get) => ({
			categories: [],

			setCategories: (categories: Category[]) => set({ categories }),

			getCategories: () => get().categories,

			fetchCategories: async () => {
				const response = await getAllCategories();
				set({ categories: response?.categories });
			},
		}),
		{
			name: "categories-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
