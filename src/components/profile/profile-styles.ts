import { StyleSheet } from 'react-native'
import { BLUE_PALLETE } from '../../constants/colors/colors'

export const profileStyles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    profileCard: {
        width: "90%",
        height: "17%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    photo: {
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 100,
        width: 100,
        height: 100,
        marginTop: 15,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
})