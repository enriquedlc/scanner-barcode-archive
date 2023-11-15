import { BARCODE_SCANNER, CATEGORY_ICONS } from "../../../assets";

const generateRandomId = () => Math.floor(Math.random() * 1000000);

const {
	TOOL_BOX,
	SCREWS,
	GLOVES,
	POWER_PLANT,
	LIGHT_BULB,
	CAR,
	BIKE,
	SPORTS,
	CUTTER,
	FISHING_ROD,
	GARDENING,
	PAINT,
	ROPE,
	SIGN,
	TIRE,
} = CATEGORY_ICONS;

export const ATTRIBUTION_DATA = [
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/tornillo",
		image: SCREWS,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/caja-de-herramientas",
		image: TOOL_BOX,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/guantes",
		image: GLOVES,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/electricidad",
		image: POWER_PLANT,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/foco",
		image: LIGHT_BULB,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/coche",
		image: CAR,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/bicicleta",
		image: BIKE,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/pelota",
		image: SPORTS,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/neumatico",
		image: TIRE,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/cartel",
		image: SIGN,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/cana-de-pescar",
		image: FISHING_ROD,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/construccion-y-herramientas",
		image: ROPE,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/construccion-y-herramientas",
		image: CUTTER,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/pintura",
		image: PAINT,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/jardineria",
		image: GARDENING,
	},
	{
		id: generateRandomId(),
		link: "https://www.flaticon.es/iconos-gratis/escaner-de-codigo-de-barras",
		image: BARCODE_SCANNER,
	},
];
