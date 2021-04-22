import { StyleSheet } from 'react-native';

export const appCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        opacity: 0.75,
        alignSelf: "center",
    },
    textIcon: {
        flexDirection: "row",
        marginBottom: 5,
        alignItems: "center",
    },
    infoText: {
        fontSize: 16,
        elevation: 6,
        opacity: 0.7,
    },
})