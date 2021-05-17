import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFreightContext } from "../../context/freight-context";
import { useLocationContext } from "../../context/location-context";
import { Freight } from "../../domain/model/classes/Freight";
import { iFreight, service } from "../../domain/model/interfaces/iFreight";
import { appCss } from "../../styles/app.css";
import { blue, grey } from "../../styles/color.css";
import { MvModal } from "../widgets/mv-modal";
import Select from "../widgets/select/index";

type serviceOption = {
  serviceName: service;
  label?: string;
  icon: string;
};

const services: Array<serviceOption> = [
  { serviceName: "Mudança", icon: "truck" },
  { serviceName: "Transporte de Materiais", icon: "dump-truck" },
];

export type freightItems = {
  service: string;
  weight: number;
  description?: string;
};

export const FreightageForm = () => {
  const { addFreight } = useFreightContext();
  const { destination, origin } = useLocationContext();

  const [service, setService] = useState<service>({} as service);
  const [weight, setWeight] = useState<number>(0);
  const [description, setDescription] = useState("");

  const optionSelectedColor = (value: string): string => {
    return service == value ? blue.darken : grey.darken;
  };

  useEffect(() => {
    const freight: iFreight = {
      service,
      weight,
      origin,
      destination,
      price: 0,
      status: "Aguardando",
      date: new Date(),
      description,
    };
    addFreight(freight);
  }, [service, weight, description]);

  const SendCommentVisible: React.FC = () => (
    <View style={appCss.textIcon}>
      <Icon style={styles.fieldIcon} name="comment-text-outline" color={grey.darken} size={25} />
      <Text style={appCss.subtitle}>Enviar comentario</Text>
    </View>
  );

  const SetWeight: React.FC = () => (
    <View style={appCss.textIcon}>
      <Icon style={styles.fieldIcon} name="weight-kilogram" color={grey.darken} size={25} />
      <Text style={appCss.subtitle}>Peso estimado: {weight} kg</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.expand, styles.expand2]}></View>
      <View style={[styles.expand]}></View>
      <View style={styles.form}>
        <View style={styles.serviceOptions}>
          {services.map(({ icon, serviceName, label }) => (
            <TouchableHighlight
              onPress={() => setService(serviceName)}
              style={service == serviceName ? styles.serviceOptionSelected : styles.serviceOption}
              underlayColor={grey.lighten3}
              key={serviceName}
            >
              <View style={styles.serviceCard}>
                <Icon name={icon} size={35} color={optionSelectedColor(serviceName)} />
                <Text
                  style={[
                    appCss.subtitle,
                    { textAlign: "center", color: optionSelectedColor(serviceName) },
                  ]}
                >
                  {serviceName}
                </Text>
                <Text style={appCss.infoText}>{label}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
        <View style={styles.fields}>
          <Select
            VisibleElement={SetWeight}
            setValue={setWeight}
            items={[500, 1000, 2000, 4000, 6000, 8000, 10000]}
          />
          <MvModal VisibleElement={SendCommentVisible}>
            <View style={styles.sendComment}>
              <View style={styles.sendCommentText}>
                <Text style={appCss.subtitle}>Enviar comentario</Text>
                <Text style={appCss.infoText2}>
                  Há algum detalhe importante que você gostaria de acrescentar?
                </Text>
                import {Freight} from '../../domain/model/classes/Freight';
              </View>
              <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                numberOfLines={3}
                multiline
                style={styles.sendCommentInput}
              />
            </View>
          </MvModal>
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
    borderBottomWidth: 3,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    borderColor: grey.lighten,
  },
  expand2: {
    width: "20%",
    borderBottomWidth: 2,
  },
  descriptionInput: {
    padding: 10,
    backgroundColor: grey.lighten4,
  },
  serviceOptions: {
    flexDirection: "row",
  },
  serviceOption: {
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 5,
  },
  serviceOptionSelected: {
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 5,
    borderColor: blue.lighten3,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  sendComment: {
    flex: 1,
    padding: 10,
  },
  sendCommentText: {
    justifyContent: "center",
    alignItems: "center",
  },
  sendCommentInput: {
    flexGrow: 1,
    backgroundColor: grey.lighten3,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  serviceCard: {
    alignItems: "center",
  },
  fields: {
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    padding: 10,
  },
  fieldIcon: {
    marginRight: 10,
  },
});
