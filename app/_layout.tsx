import { COLORS } from "@/styles/theme";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.surface }}>
        <Stack screenOptions={{ headerShown: false }}>
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
