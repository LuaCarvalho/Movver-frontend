import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Routes from "./Routes";

import appCss from "./styles/app.css"

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaView style={appCss.container}>
      <Routes />
    </SafeAreaView>
  );
};
export default AppRoutes;
