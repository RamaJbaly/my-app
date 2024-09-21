// import StoreProvider from "@/store/StoreProvider";
import StoreProvider from "@/store/StoreProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>

      <Stack>

        <Stack.Screen name="index" />
        <Stack.Screen name="Home" options={{ headerShown: false }} />
        <Stack.Screen name="screen2" />
        <Stack.Screen name="cart" />

      </Stack>
    </StoreProvider>


  );

}
