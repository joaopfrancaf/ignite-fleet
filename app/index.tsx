import { Text, View, StyleSheet, ImageBackground } from "react-native";
import tema from "../constants/Colors";
import backgroundimage from "../assets/images/background.png"
import Button from "@/components/Button";

export default function Index() {
  return (
    <ImageBackground style={style.container} source={backgroundimage}>
      <Text style={style.title}>Ignite Fleet</Text>
      <Text style={style.slogan}>Gestão de uso de veiculos</Text>
      <Button title="Entrar com o google"/>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 52,
    backgroundColor: tema.COLORS.GRAY_800
  },

  title: {
    color: tema.COLORS.BRAND_LIGHT,
    fontSize: tema.FONT_SIZE.XXXL,
    fontFamily: tema.FONT_FAMILY.BOLD,
    textAlign: "center"
  },

  slogan: {
    color: tema.COLORS.GRAY_100,
    fontSize: tema.FONT_SIZE.MD,
    fontFamily: tema.FONT_FAMILY.REGULAR,
    textAlign: "center",

    marginBottom: 32
  },
})
