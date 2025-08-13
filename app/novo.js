import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Stack, router } from "expo-router";

export default function Novo() {
  const [nome, setNome] = useState("");

  function salvar() {
    if (!nome.trim()) return alert("Informe um nome");
    router.push(`/item/${encodeURIComponent(nome)}`);
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center" }}>
      <Stack.Screen options={{ title: "Novo Item" }} />
      <Text>Nome do item</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
