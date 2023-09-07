import { StyleSheet } from 'react-native'

import { BLUE_PALLETE } from '../../constants/colors/colors'

// TODO: refactor colors to constants 

export const profileStyles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    profileCard: {
        flexDirection: "row",
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
        width: 95,
        height: 95,
        marginTop: 15,
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
        left: 75,
        top: 55,
    },
    infoLabelContainer: {
        flexDirection: "column",
        marginLeft: 30,
        marginTop: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: BLUE_PALLETE.PRIMARY_BLACK,
        // color: "darkblue"
    },
    email: {
        fontSize: 15,
        color: BLUE_PALLETE.SECONDARY_BLACK,
        // color: "darkblue"
        paddingTop: 3,
        paddingLeft: 1,
    },


})