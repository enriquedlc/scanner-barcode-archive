import { StyleSheet } from 'react-native'

import { FONT_SIZES } from '../../constants/font';
import { LOGIN_COLORS, TEXT_COLOR } from '../../constants/colors';

export const loginStyles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 100,
        gap: 25,
    },
    inputContainer: {
        borderColor: "black",
        minWidth: "65%",
    },
    inputLabel: {
        fontSize: FONT_SIZES.LARGE,
        color: TEXT_COLOR.PRIMARY_WHITE,
        fontWeight: "800",
        paddingBottom: 5,
    },
    input: {
        fontSize: FONT_SIZES.LARGE,
        color: TEXT_COLOR.SECONDARY_WHITE,
        backgroundColor: LOGIN_COLORS.LIGHT_BLUE_BACKGROUND,
        fontWeight: "500",
        paddingVertical: 7,
        borderRadius: 5,
        paddingLeft: 10,
    },
});
