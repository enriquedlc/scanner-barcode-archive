import { StyleSheet } from 'react-native'

import { FONT_SIZES } from '../../constants/font';

export const articleFormStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: FONT_SIZES.LARGE,
        fontWeight: "bold",
        paddingBottom: 30,
    },
    textInput: {
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        width: "80%",
        marginBottom: 25,
    },
});
