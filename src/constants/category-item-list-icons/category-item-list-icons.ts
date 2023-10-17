import { CATEGORY_ICONS } from "../../../assets";

const { TOOL_BOX, SCREWS, GLOVES, POWER_PLANT, LIGHT_BULB, CAR } = CATEGORY_ICONS;

interface CategoryItemListIcons {
	readonly name: string;
	readonly icon: "*.png";
}

export const CATEGORY_ITEM_LIST_ICONS: CategoryItemListIcons[] = [
	{
		name: "Tornillería",
		icon: SCREWS,
	},
	{
		name: "Herramientas",
		icon: TOOL_BOX,
	},
	{
		name: "Guantes",
		icon: GLOVES,
	},
	{
		name: "Electricidad",
		icon: POWER_PLANT,
	},
	{
		name: "Iluminación",
		icon: LIGHT_BULB,
	},
	{
		name: "Coches",
		icon: CAR,
	},
	{
		name: "Bicicletas",
		icon: CATEGORY_ICONS.BIKE,
	},
	{
		name: "Deporte",
		icon: CATEGORY_ICONS.SPORTS,
	},
	{
		name: "Ruedas",
		icon: CATEGORY_ICONS.TIRE,
	},
	{
		name: "Carteles",
		icon: CATEGORY_ICONS.SIGN,
	},
	{
		name: "Pesca",
		icon: CATEGORY_ICONS.FISHING_ROD,
	},
	{
		name: "Cutters",
		icon: CATEGORY_ICONS.CUTTER,
	},
	{
		name: "Cordelería",
		icon: CATEGORY_ICONS.ROPE,
	},
	{
		name: "Pintura",
		icon: CATEGORY_ICONS.PAINT,
	},
	{
		name: "Jardinería",
		icon: CATEGORY_ICONS.GARDENING,
	},
] as const;
