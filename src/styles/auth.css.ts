import { StyleSheet } from "react-native"
import * as colors from "./color.css"

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.grey.lighten5,
    },
    mainView: {
      width: "95%",
      backgroundColor: colors.grey.lighten5,
      justifyContent: "space-between",
      margin: 10,
      elevation: 5,
      flexGrow: 5,
    },
    form: {
      maxHeight: "80%",
      marginBottom: 10,
    },
    loginButton: {
      height: 40,
      width: "70%",
      alignSelf: "center",
      borderRadius: 10,
      justifyContent: "center",
    },
    cardRegister: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      padding: 5,
    },
    registerText: {
      fontSize: 16,
      color: "white",
      textTransform: "uppercase",
    },
    alreadyExistOrNo: {
      color: colors.blue.darken2,
      fontSize: 16
    }
  }
)