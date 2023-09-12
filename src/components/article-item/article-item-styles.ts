import { StyleSheet } from 'react-native'

export const articleItemStyles = StyleSheet.create({
    articleItemContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    articleItem: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        height: 100,
        minWidth: '90%',
        borderRadius: 10,
        alignSelf: 'center',

    },
    iconContainer: {
        alignSelf: "flex-end",
        position: "absolute",
        top: "40%",
        right: 15,
    },
    articleItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        gap: 15

    },
    articleHeaderIcon: {
        width: 50,
        height: 50,
    },
    articleItemHeaderDescription: {
        flexDirection: 'column',
        gap: 5,
    }
});

