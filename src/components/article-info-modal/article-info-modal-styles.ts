import { StyleSheet, Platform, Dimensions } from 'react-native';
import { FONT_SIZES } from '../../constants/font';

const WINDOW_HEIGHT = Dimensions.get("window").height;

export const articleInfoModalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        minWidth: '70%',
        maxWidth: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: FONT_SIZES.EXTRA_LARGE,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },

    editButton: {
        backgroundColor: 'blue',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
    deleteButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red',
    },
    cancelText: {
        color: 'red',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    closeModalButton: {
        position: "absolute",
        right: "13%",
        ...Platform.select({
            ios: {
                top: WINDOW_HEIGHT - WINDOW_HEIGHT * 0.7,
            },
            android: {
                top: WINDOW_HEIGHT - WINDOW_HEIGHT * 0.715,
            },
        }),
        zIndex: 10,
        backgroundColor: "red",
        borderRadius: 100,
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});
