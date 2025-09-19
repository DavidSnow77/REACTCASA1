import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠PAGINA PRINCIPAL DE RAMA</Text>
      <Pressable>CLICK</Pressable>
      <Pressable>ESTAMOS EN RAMA</Pressable>
      <Text>ESTE CAMBIO LO HIZE DESDE MI RAMA PERO VAMOS A QA</Text>
      <Text>CMABIE EL TEXTO EN RAMA PERO LO VOY A FUSIONAR EN QA SIIUU</Text>
      <Text>
        VAMOS AVER QUE SUCEDE CON ESTE CAMBIO QUE LO HICE EN RAMA Y LO FUSIONE
        EN QA
      </Text>
      <Text>CCCAMBIO QUE HICE EN RAMA Y LO FUSIONE EN QAAAAAAAAAA</Text>
      <Text>CAMBIO DE RAMA Y LO FSIONE EN QA ALV</Text>
    </View>
  );
}
