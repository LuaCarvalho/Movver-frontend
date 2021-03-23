import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor: "white",
        width: "95%",
        elevation: 3,
        padding: 5,
    },
    title: {
        fontSize: 18,
        opacity: 0.75,
        alignSelf: "center",
    },
    textIcon: {
        flexDirection: "row",
        marginBottom: 5
    },
    infoText: {
        fontSize: 16,
        elevation: 6,
        opacity: 0.7,
    },
})

export default css;