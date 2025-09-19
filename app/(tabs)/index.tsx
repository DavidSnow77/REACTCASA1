import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠PAGINA PRINCIPAL ESTAMOS EN RAMA</Text>
      <Pressable>CLICKME</Pressable>
      <Text>NECESITAMOS CONFLICTOS</Text>
      <Text>
        ESTE CAMBIO LO HIZE DESDE MI RAMA RAMA PERO LO FUSIONE EN QA ALV
      </Text>
      <Text>CMABIE EL TEXTO EN RAMA PERO LO VOY A FUSIONAR EN QA S</Text>
    </View>
  );
}
