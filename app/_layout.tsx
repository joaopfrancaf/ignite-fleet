import { Stack } from "expo-router";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Loading from "@/components/Loading";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  if(!fontsLoaded) {
    return (
      <Loading/>
    )
  }

  return (
    <>
      <StatusBar
        style="light"
      />
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
