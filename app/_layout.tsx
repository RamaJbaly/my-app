// import StoreProvider from "@/store/StoreProvider";
import StoreProvider from "@/store/StoreProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>

      <Stack />

    </StoreProvider>


  );

}
