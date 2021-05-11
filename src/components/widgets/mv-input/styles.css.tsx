import { StyleSheet } from "react-native";
import { blue, grey, red } from "../../../styles/color.css";


export enum stylesEnum {
  container = "container",
  icon = "icon",
  input = "input",
  cardInput = "cardInput",
  cardIcon = "cardIcon",
  containerFocus = "containerFocus",
  inputPlaceholder = "inputPlaceholder"
}

export const styleSuccess = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 5,
    flexDirection: "row",
    height: 70,
    padding: 5,
    width: "95%",
    borderBottomWidth: 1,
    borderColor: grey.lighten2,
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    fontSize: 16,
    color: "black"
  },
  cardInput: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 5,
  },
  cardIcon: {
    justifyContent: "flex-end",
  },
  containerFocus: {
    backgroundColor: "#fff",
    elevation: 1,
    shadowRadius: 10,
    shadowColor: grey.lighten5,
    borderColor: blue.lighten2,
  },
  inputPlaceholder: {
    opacity: 0.5,
    fontSize: 12,
    fontWeight: "bold",
    color: blue.darken2,
  },
});

export const styleError = StyleSheet.create({
  ...styleSuccess,
  container: {
    ...styleSuccess.container,
    borderColor:  red.lighten2,
  },
  containerFocus: {
    ...styleSuccess.containerFocus,
    shadowColor: red.lighten2,
    borderColor: red.lighten2,
  },
  inputPlaceholder: {
    ...styleSuccess.inputPlaceholder,
    color: red.c
  },
  input: {
    ...styleSuccess.input,
    color: red.c
  }
});