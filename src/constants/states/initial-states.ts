import { Article } from "../../types/article";

export const INITIAL_ARTICLE_FORM_STATE: Article = {
    id: "",
    name: "",
    exhibition: "",
    shelf: "",
    warehouse: "",
    barcode: "",
    createdAt: "",
    updatedAt: "",
} as const;