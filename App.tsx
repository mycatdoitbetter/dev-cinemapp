import "react-native-gesture-handler";

import {
  useFonts,
  RobotoSlab_400Regular as RobotoSlabRegular,
  RobotoSlab_600SemiBold as RobotoSlabSemiBold,
  RobotoSlab_700Bold as RobotoSlabBold,
} from "@expo-google-fonts/roboto-slab";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Router from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlabRegular,
    RobotoSlabSemiBold,
    RobotoSlabBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
