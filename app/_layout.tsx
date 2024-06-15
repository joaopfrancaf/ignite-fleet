import { Slot, Stack } from "expo-router";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Loading from "@/components/Loading";
import { StatusBar } from "expo-status-bar";
import {AppProvider, UserProvider} from "@realm/react"
import SignIn from "./SignIn";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  if(!fontsLoaded) {
    return (
      <Loading/>
    )
  }

  const realmAppId = process.env.EXPO_PUBLIC_REALM_APP_ID || ""; // Provide a default value for process.env.EXPO_PUBLIC_REALM_APP_ID if it is undefined

  return (
    <AppProvider id={realmAppId}>
      <StatusBar
        style="light"
      />
      <UserProvider fallback={SignIn}>
        <Stack>
          <Stack.Screen name="(home)"/>
        </Stack>
      </UserProvider>
    </AppProvider>
  );
}
