import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠PAGINA PRINCIPAL DE QA</Text>
      <Pressable>CLICKME NO?</Pressable>
      <Pressable>ESTAMOS EN QA ME PARECE</Pressable>
      <Text>ESTE CAMBIO LO HIZE DESDE MI RAMA PERO VAMOS A QA</Text>
      <Text>
        SERA QUE ESTE CAMBIO QUE HAGA EN RAMA ME TRAERA UN CONFLICTO AL FUSIONAR
        EN QA?
      </Text>
      <Text>CMABIE EL TEXTO EN RAMA PERO LO VOY A FUSIONAR EN QA S</Text>
    </View>
  );
}
