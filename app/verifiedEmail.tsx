import { styles } from "@/styles/globalStyles";
import { Text, Pressable, View, Image, useColorScheme } from "react-native";

export default function VerifiedEmail() {
  const tema = useColorScheme() === "dark";
  const style = styles(tema);

  return (
    <View style={style.containerPrincipal}>
      <Image
        source={require("../assets/images/OK.png")}
        style={style.image2}
      ></Image>
      <Text style={style.titulos}>Email Verificado!</Text>
      <Text style={style.subtitulos}>
        Tu cuenta ha sido verificada exitosamente. Ahora puedes acceder a todas
        las funciones.
      </Text>
      <Pressable style={style.botones}>
        <Text style={style.textoBoton}>CONTINUAR</Text>
      </Pressable>
    </View>
  );
}
