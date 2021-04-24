import { StyleSheet } from 'react-native';

export const appCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
    },
    subtitle: {
        fontSize: 18,
        elevation: 6,
        opacity: 0.7
    },
    infoText: {
        fontSize: 15,
        elevation: 6,
        opacity: 0.6,
        flexWrap: "wrap-reverse"
    },
    textIcon: {
        flexDirection: "row",
        marginBottom: 5,
        alignItems: "center",
    },
})