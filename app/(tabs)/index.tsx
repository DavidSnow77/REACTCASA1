import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠ESTA ES LA PAGINA PRINCIPAL QA</Text>
      <Pressable>CLICKME NO?</Pressable>
      <Pressable>ESTAMOS EN QA ME PARECE</Pressable>
    </View>
  );
}
