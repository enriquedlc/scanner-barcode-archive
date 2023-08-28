import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../constants/font";
import { BLUE_PALLETE } from "../../constants/colors";

export const landingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    splashLogo: {
        width: "60%",
        height: "30%",
        top: "8%",
        position: "absolute",
        objectFit: "contain",
    },
    title: {
        top: "35%",
        position: "absolute",
        fontWeight: "bold",
        fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
    },
    firstBubble: {
        zIndex: -10,
        width: "130%",
        backgroundColor: BLUE_PALLETE.PRIMARY,
        height: "30%",
        borderTopEndRadius: 400,
        borderTopStartRadius: 400,
        position: "absolute",
        bottom: -50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonsContainer: {
        bottom: 15,
        justifyContent: "space-between",
        gap: 20,
    },
    secondBubble: {
        zIndex: -20,
        width: "130%",
        backgroundColor: BLUE_PALLETE.TERTIARY,
        height: "30%",
        borderTopEndRadius: 400,
        borderTopStartRadius: 400,
        position: "absolute",
        bottom: 80,
    },
    thridBubble: {
        zIndex: -30,
        width: "130%",
        backgroundColor: BLUE_PALLETE.QUATERNARY,
        height: "30%",
        borderTopEndRadius: 400,
        borderTopStartRadius: 400,
        position: "absolute",
        bottom: 210,
    },
});

export const toolStyles = StyleSheet.create({
    hammer: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 160,
        right: 40,
    },
    saw: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 170,
        alignSelf: "center",
    },
    work_tools: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 160,
        left: 40,
    },
});
