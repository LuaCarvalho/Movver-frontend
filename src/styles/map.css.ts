import { StyleSheet } from 'react-native';

const css=StyleSheet.create({
    map: {
        height: "50%",
        width: "100%"
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
       marginLeft: 5,
       width: 30,
       height: "100%",
       justifyContent: "center",
       alignItems:"center"
    }

})

export default css;