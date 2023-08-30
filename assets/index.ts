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

export { LOGOS, TOOLS, LANDING, BARCODE }
