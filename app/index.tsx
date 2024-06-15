import { Text, View, StyleSheet, ImageBackground } from "react-native";
import tema from "../constants/Colors";
import backgroundimage from "../assets/images/background.png"
import Button from "@/components/Button";
import {GoogleSignin} from "@react-native-google-signin/google-signin"
import { useState } from "react";
import {Realm, useApp} from "@realm/react"
import { Redirect } from "expo-router";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID
})
export default function Index() {
  const [isAuth, setIsAuth] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuth(true)

      const { idToken } = await GoogleSignin.signIn() //aqui pega as credencias do google

      if(idToken){
        //aqui salva as credencias no meu banco mongodb
        const credentials = Realm.Credentials.jwt(idToken)
        await app.logIn(credentials)
      }


    } catch {
      setIsAuth(false)
    }
  }

  return (
    <ImageBackground style={style.container} source={backgroundimage}>
      <Text style={style.title}>Ignite Fleet</Text>
      <Text style={style.slogan}>Gestão de uso de veiculos</Text>
      <Button title="Entrar com o google" isLoading={isAuth} onPress={handleGoogleSignIn}/>
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
