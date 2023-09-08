// logos
import SPLASH_LOGO from "./splash-scanner.png";

// LANDING
// tools
import work_tools from "./tools/work-tools.png";
import hammer from "./tools/hammer.png";
import saw from "./tools/saw.png";

import box from "./landing/box.png";
import scanner from "./landing/scanner.png";

// navbar icons
import SCANNABLE_BARCODE from "./barcode/scannable-barcode.png";

// user profile photos
import BLUE_GRADIENT_USER from "./users/blue-gradient-user.png";

// language flags
import SPANISH_SPAIN from "./languages/spain.png";
import ENGLISH_USA from "./languages/usa.png";

const LOGOS = {
    SPLASH_LOGO
} as const;

const TOOLS = {
    work_tools,
    hammer,
    saw
} as const;

const LANDING = {
    box,
    scanner
} as const;

const BARCODE = {
    SCANNABLE_BARCODE
} as const;

const USER_PROFILE_IMAGES = {
    BLUE_GRADIENT_USER
} as const;

const LANGUAGE_FLAGS = {
    SPANISH_SPAIN,
    ENGLISH_USA
} as const;

export { LOGOS, TOOLS, LANDING, BARCODE, USER_PROFILE_IMAGES, LANGUAGE_FLAGS }
