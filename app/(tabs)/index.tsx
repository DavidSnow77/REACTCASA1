import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠ESTA ES LA PAGINA PRINCIPAL ESTAMOS EN RAMA</Text>
      <Pressable>CLICKME</Pressable>
      <Text>NECESITAMOS CONFLICTOS</Text>
      <Text>
        ESTE CAMBIO LO HIZE DESDE MI RAMA RAMA PERO LO FUSIONE EN QA ALV
      </Text>
    </View>
  );
}
