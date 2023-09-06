import { StyleSheet } from 'react-native'

export const articleItemStyles = StyleSheet.create({
    articleItemContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    articleItem: {
        height: 100,
        minWidth: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 50,
    },
    iconContainer: {
        height: 100,
        minWidth: 100,
        position: 'absolute',
        right: "10%",
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
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
    deleteButton: {
        backgroundColor: 'red',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cancelButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    cancelText: {
        color: 'gray',
        fontWeight: 'bold',
    },
});
