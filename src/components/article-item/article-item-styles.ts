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
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        bottom: 20,
    }
});

