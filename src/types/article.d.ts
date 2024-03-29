import { Category } from "../services/category";
import { Prettify } from "./types";

export interface Article {
	id: string;
	createdAt: string;
	updatedAt: string;
	articleName: string;
	barcode: string;
	exhibition: number;
	shelf: number;
	warehouse: number;
	categoryName: Category["categoryName"];
}

type ArticleForm = Omit<Article, "id" | "createdAt" | "updatedAt"> & {
	category: {
		categoryName: string;
	};
};

export type ArticleFormP = Prettify<ArticleForm>;
