import "react-native-gesture-handler";

// import {
//   useFonts,
//   Inter_400Regular,
//   Inter_600SemiBold,
//   Inter_700Bold,
// } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Router from "./src/routes";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
