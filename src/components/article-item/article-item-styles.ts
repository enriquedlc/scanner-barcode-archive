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
