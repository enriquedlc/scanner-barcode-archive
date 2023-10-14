// logos
import SPLASH_LOGO from "./splash-scanner.png";

// LANDING
// tools
import hammer from "./tools/hammer.png";
import saw from "./tools/saw.png";
import toolBox from "./tools/tool-box.png";
import workTools from "./tools/work-tools.png";

import box from "./landing/box.png";
import scanner from "./landing/scanner.png";

// navbar icons
import SCANNABLE_BARCODE from "./barcode/scannable-barcode.png";

// user profile photos
import BLUE_GRADIENT_USER from "./users/blue-gradient-user.png";

// language flags
import SPANISH_SPAIN from "./languages/spain.png";
import ENGLISH_USA from "./languages/usa.png";

// navbar icons
import FILE_EXPORT from "./navbar/file-export.png";

// category icons
import CHEVRON_CIRCLE_DOWN from "./category-list/circle-chevron-down.png";
import CHEVRON_CIRCLE_UP from "./category-list/circle-chevron-up.png";

const LOGOS = {
	SPLASH_LOGO,
} as const;

const TOOLS = {
	workTools,
	hammer,
	saw,
	toolBox,
} as const;

const LANDING = {
	box,
	scanner,
} as const;

const BARCODE = {
	SCANNABLE_BARCODE,
} as const;

const USER_PROFILE_IMAGES = {
	BLUE_GRADIENT_USER,
} as const;

const LANGUAGE_FLAGS = {
	SPANISH_SPAIN,
	ENGLISH_USA,
} as const;

const NAVBAR_ICONS = {
	FILE_EXPORT,
} as const;

const CATEGORY_ICONS = {
	CHEVRON_CIRCLE_DOWN,
	CHEVRON_CIRCLE_UP,
} as const;

export {
	BARCODE,
	CATEGORY_ICONS,
	LANDING,
	LANGUAGE_FLAGS,
	LOGOS,
	NAVBAR_ICONS,
	TOOLS,
	USER_PROFILE_IMAGES,
};
