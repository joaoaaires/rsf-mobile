import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-[#0b0b10]">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}
