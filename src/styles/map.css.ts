import { StyleSheet } from 'react-native';

const css=StyleSheet.create({
    search: {
        height: "40%",
        justifyContent: 'flex-start',
    },
    map: {
        height: "60%",
    },
    searchMap: {
        flexDirection: "row",
        alignSelf:"center",
        width: "95%",
        borderRadius: 5,
        marginTop: 5,
    },
    searchMapAction: {
       backgroundColor: "black",
       color: "white",
       marginLeft: 3,
       width: 20,
        height: "90%",
       borderRadius: 100,
       justifyContent: "center",
       alignItems:"center"
    }

})

export default css;