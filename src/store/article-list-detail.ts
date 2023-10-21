import { create } from "zustand";

import {
	CATEGORY_ITEM_LIST_ICONS,
	CategoryName,
} from "../constants/category-item-list-icons/category-item-list-icons";

interface State {
	articleCategoryDetailListName: CategoryName;
}

// Ahora, el autocompletado debería funcionar correctamente.
const si: State["articleCategoryDetailListName"] = "";

interface Actions {}

export const useArticleListDetailStore = create<State & Actions>((set, get) => ({}));
