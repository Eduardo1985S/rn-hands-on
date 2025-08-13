import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Início" }} />
      <Text style={styles.text}>Olá, Expo Router!</Text>

      <Link href="/sobre">Ir para Sobre →</Link>

      <Link href="/item/1">Item 1</Link>

<Link href="/item/2">Item 2</Link>

<Link href="/novo">Novo item</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});