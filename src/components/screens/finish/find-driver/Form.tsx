import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../../../context/LocalizationContext";
import appCss from "../../../../styles/app.css";
import * as Colors from "../../../../styles/color.css";
import Select from "../../../widgets/select/Select";
import SelectCard, { Option } from "../../../widgets/select-card/SelectCard";


const services: Array<Option> = [
  { value: "Mudança", icon: "truck" },
  { value: "Outros", icon: "dump-truck" },
  { value: "Transporte de Materiais", icon: "dump-truck" },
];

const Form: React.FC = () => {
  const { origin, destination } = useLocalizationContext();

  const [description, setDescription] = useState<boolean>();
  const [service, setService] = useState<string>();
  const [weight, setWeight] = useState<number>();

  /* <Icon name="arrow-expand-up" size={15} color={Colors.grey.darken3} /> */
  return (
    <View style={cStyle.container}>
      <View style={cStyle.expand2}></View>
      <View style={cStyle.expand}></View>
      <View style={cStyle.form}>
        <View style={appCss.textIcon}>
          <Icon name="package-variant" color={Colors.grey.darken3} size={25} />
          <Text style={appCss.infoText}>Tipo da carga: </Text>
          <SelectCard setValue={setService} options={services} />
        </View>
        <View style={appCss.textIcon}>
          <Icon name="weight-kilogram" color={Colors.grey.darken3} size={25} />
          <Text style={appCss.infoText}>Peso estimado (opcional): </Text>
          <Select setValue={() => {setWeight}} items={[500, 1000, 2000, 4000, 6000, 8000, 10000]} />
        </View>
        <View style={appCss.textIcon}>
          <Icon name="comment-text-outline" color={Colors.grey.darken3} size={25} />
          <Text onPress={() => setDescription(!description)} style={appCss.infoText}>
            Enviar comentario (opcional):
          </Text>
        </View>
        {description && (
          <View>
            <TextInput
              numberOfLines={4}
              multiline
              style={cStyle.descriptionInput}
              placeholder="Escrever algo aqui..."
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Form;

const cStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    padding: 5,
    justifyContent: "space-evenly",
  },
  expand: {
    width: "40%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: 5,
    borderColor: Colors.grey.lighten,
  },
  expand2: {
    width: "20%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: Colors.grey.lighten,
  },
  descriptionInput: {
    padding: 10,
    backgroundColor: Colors.grey.lighten4,
  },
});
