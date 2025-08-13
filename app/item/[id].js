import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ItemDetalhe() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: `Item #${id}` }} />
      <Text>Detalhes do item {id}</Text>
    </View>
  );
}