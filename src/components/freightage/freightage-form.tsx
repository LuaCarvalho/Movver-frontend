import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../context/LocalizationContext";
import { appCss } from "../../styles/app.css";
import colorCss, * as Colors from "../../styles/color.css";
import Select from "../widgets/select/index";

type option = {
  value: string;
  label: string;
  icon: string;
};

const services: Array<option> = [
  { value: "Mudança", label: "", icon: "truck" },
  { value: "Transporte de Materiais", label: "", icon: "dump-truck" },
];

export const FreightageForm: React.FC = () => {
  const { origin, destination } = useLocalizationContext();

  const [description, setDescription] = useState<boolean>();
  const [service, setService] = useState<string>();
  const [weight, setWeight] = useState<number>();

  /* <Icon name="arrow-expand-up" size={15} color={Colors.grey.darken3} /> */
  return (
    <View style={styles.container}>
      <View style={styles.expand2}></View>
      <View style={styles.expand}></View>
      <View style={styles.form}>
        <View style={styles.serviceOptions}>
          {services.map(({ icon, value, label }) => (
            <TouchableHighlight
              underlayColor={colorCss.grey.lighten3}
              onPress={() => {}}
              key={value}
              style={styles.serviceOption}
            >
              <View style={styles.serviceCard}>
                <Icon name={icon} size={35} color={Colors.grey.darken3} />
                <Text style={appCss.subtitle}>{value}</Text>
                <Text style={appCss.infoText}>{label}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
        <View style={styles.fields}>
          <View style={styles.field}>
            <Icon name="weight-kilogram" color={Colors.grey.darken3} size={25} />
            <Text style={appCss.subtitle}>Peso estimado (opcional): </Text>
            <Select setValue={setWeight} items={[500, 1000, 2000, 4000, 6000, 8000, 10000]} />
          </View>
          <View style={styles.field}>
            <Icon name="comment-text-outline" color={Colors.grey.darken3} size={25} />
            <Text onPress={() => setDescription(!description)} style={appCss.subtitle}>
              Enviar comentario (opcional):
            </Text>
          </View>
          {description && (
            <TextInput
              numberOfLines={4}
              multiline
              style={styles.descriptionInput}
              placeholder="Escrever algo aqui..."
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  form: {
    paddingTop: 10,
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
  serviceOptions: {
    flexDirection: "row",
  },
  serviceOption: {
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 3,
  },
  serviceCard: {
    alignItems: "center",
  },
  fields: {
    height: "60%",
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
  },
  field: {
    flexDirection: "row",
    margin: 15,
  },
});
