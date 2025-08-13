import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Sobre() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Sobre" }} />
      <Text>Tela Sobre</Text>
    </View>
  );
}