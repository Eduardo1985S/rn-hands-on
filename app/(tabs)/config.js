import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Config() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Configurações" }} />
      <Text>Aba de Configurações</Text>
    </View>
  );
}