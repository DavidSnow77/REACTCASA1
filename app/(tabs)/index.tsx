import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠ESTA ES LA PAGINA PRINCIPAL</Text>
      <Pressable>CLICKME</Pressable>
    </View>
  );
}
