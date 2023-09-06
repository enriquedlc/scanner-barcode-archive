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
        shadowColor: "darkblue",
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
        borderColor: "darkblue",
        backgroundColor: "#fff",
        borderRadius: 100,
        width: 105,
        height: 105,
        marginTop: 10,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "darkblue",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    editPhotoButton: {
        position: "absolute",
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: "darkblue",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        left: 85,
        top: 60,
    },
})