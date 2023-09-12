import { StyleSheet } from 'react-native';
import { FONT_SIZES } from '../../constants/font';
import { BLUE_PALLETE } from '../../constants/colors/colors';

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
        gap: 15,
    },
    articleHeaderIcon: {
        width: 50,
        height: 50,
    },
    articleItemHeaderDescription: {
        flex: 1,
        gap: 5,
    },
    articleItemTitle: {
        fontSize: FONT_SIZES.MEDIUM,
        fontWeight: 'bold',
    },
    articleItemBarcode: {
        fontSize: FONT_SIZES.SMALL,
        backgroundColor: BLUE_PALLETE.BLUE,
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        width: "55%",
        paddingVertical: 1
    },
    articleItemDescription: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 15,
        paddingBottom: 10,
    }
});
