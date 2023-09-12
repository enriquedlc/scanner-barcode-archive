import { StyleSheet } from 'react-native';
import { FONT_SIZES } from '../../constants/font';
import { BLUE_PALLETE } from '../../constants/colors/colors';

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
        marginBottom: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: FONT_SIZES.MEDIUM,
        color: BLUE_PALLETE.PRIMARY_BLACK,
        fontWeight: 'bold',
    }, value: {
        fontSize: FONT_SIZES.MEDIUM,
        color: BLUE_PALLETE.SECONDARY_BLACK,
        fontWeight: 'normal'
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
    }
});
