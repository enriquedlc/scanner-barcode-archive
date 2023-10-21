import { ImageProps } from "@rneui/base";

import { CATEGORY_ICONS } from "../../../assets";

const { TOOL_BOX, SCREWS, GLOVES, POWER_PLANT, LIGHT_BULB, CAR } = CATEGORY_ICONS;

export type CategoryName =
	| "Tornillería"
	| "Herramientas"
	| "Guantes"
	| "Electricidad"
	| "Iluminación"
	| "Coches"
	| "Bicicletas"
	| "Deporte"
	| "Ruedas"
	| "Carteles"
	| "Pesca"
	| "Cutters"
	| "Cordelería"
	| "Pintura"
	| "Jardinería";

interface CategoryItemListIcons {
	readonly categoryName: CategoryName;
	readonly icon: ImageProps["source"];
}

export const CATEGORY_ITEM_LIST_ICONS: CategoryItemListIcons[] = [
	{
		categoryName: "Tornillería",
		icon: SCREWS,
	},
	{
		categoryName: "Herramientas",
		icon: TOOL_BOX,
	},
	{
		categoryName: "Guantes",
		icon: GLOVES,
	},
	{
		categoryName: "Electricidad",
		icon: POWER_PLANT,
	},
	{
		categoryName: "Iluminación",
		icon: LIGHT_BULB,
	},
	{
		categoryName: "Coches",
		icon: CAR,
	},
	{
		categoryName: "Bicicletas",
		icon: CATEGORY_ICONS.BIKE,
	},
	{
		categoryName: "Deporte",
		icon: CATEGORY_ICONS.SPORTS,
	},
	{
		categoryName: "Ruedas",
		icon: CATEGORY_ICONS.TIRE,
	},
	{
		categoryName: "Carteles",
		icon: CATEGORY_ICONS.SIGN,
	},
	{
		categoryName: "Pesca",
		icon: CATEGORY_ICONS.FISHING_ROD,
	},
	{
		categoryName: "Cutters",
		icon: CATEGORY_ICONS.CUTTER,
	},
	{
		categoryName: "Cordelería",
		icon: CATEGORY_ICONS.ROPE,
	},
	{
		categoryName: "Pintura",
		icon: CATEGORY_ICONS.PAINT,
	},
	{
		categoryName: "Jardinería",
		icon: CATEGORY_ICONS.GARDENING,
	},
] as const;
