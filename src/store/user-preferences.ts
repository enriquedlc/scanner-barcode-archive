import { create } from "zustand";

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

export const useUserPreferencesStore = create<State & Actions>((set, get) => ({
	userPreferences: {
		colorScheme: BLUE_PALLETE,
		lang: "es",
	},

	setUserPreferences: (userPreferences) => set({ userPreferences }),
	getUserPreferences: () => get().userPreferences,

	setColorScheme: (colorScheme) =>
		set({ userPreferences: { ...get().userPreferences, colorScheme } }),
	setLang: (lang) => set({ userPreferences: { ...get().userPreferences, lang } }),

	getLang: () => get().userPreferences.lang,
	getColorScheme: () => get().userPreferences.colorScheme,
}));
