import '../_mockLocation';//en el caso de que se quiera saber la unicacion real solo se comenta esta linea
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";
//Los permisos se los debe solicitar cada vez que se carga la pantalla

const TrackCreateScreen = () => {
    const [err,setErr] = useState(null);
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //se debe actualizar cada segundo
            distanceInterval:10 //cada 10 metros

          },(location) => {
            console.log(location);
          });
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

  useEffect(() => {
      startWatching();
  },[]);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err?<Text>Please enable location services</Text>: null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
