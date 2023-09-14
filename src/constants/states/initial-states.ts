import { Article } from "../../types/article";

export const INITIAL_ARTICLE_FORM_STATE: Article = {
    id: "",
    name: "",
    barcode: "",
    createdAt: "",
    updatedAt: "",
    exhibition: 0,
    shelf: 0,
    warehouse: 0,
} as const;