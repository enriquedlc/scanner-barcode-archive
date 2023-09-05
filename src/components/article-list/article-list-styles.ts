import { StyleSheet, Platform } from 'react-native'

export const articleListStyles = StyleSheet.create({
    articleListContainer: {
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                color: 'blue', // Estilo específico de iOS
            },
            android: {
                color: 'green', // Estilo específico de Android
            },

        }),
    },
})