import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
	BLUE_PALLETE,
	GREEN_PALLETE,
	ORANGE_PALLETE,
	PURPLE_PALLETE,
} from "../constants/colors/colors";

export type ColorPalette =
	| typeof BLUE_PALLETE
	| typeof GREEN_PALLETE
	| typeof PURPLE_PALLETE
	| typeof ORANGE_PALLETE;

type Language = "en" | "es";

interface State {
	userPreferences: {
		colorScheme: ColorPalette;
		lang: Language;
	};
}

type Actions = {
	setUserPreferences: (userPreferences: State["userPreferences"]) => void;
	getUserPreferences: () => State["userPreferences"];

	setColorScheme: (color: ColorPalette) => void;
	setLang: (lang: Language) => void;

	getLang: () => Language;
	getColorScheme: () => ColorPalette;
};

export const useUserPreferencesStore = create<State & Actions>()(
	persist(
		(set, get) => ({
			userPreferences: {
				colorScheme: BLUE_PALLETE,
				lang: "en",
			},

			setUserPreferences: (userPreferences) => set({ userPreferences }),

			getUserPreferences: () => get().userPreferences,

			setColorScheme: (color) =>
				set({ userPreferences: { ...get().userPreferences, colorScheme: color } }),

			setLang: (lang) => set({ userPreferences: { ...get().userPreferences, lang: lang } }),

			getColorScheme: () => get().userPreferences.colorScheme,
			getLang: () => get().userPreferences.lang,
		}),
		{
			name: "user-preferences-storage",
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
