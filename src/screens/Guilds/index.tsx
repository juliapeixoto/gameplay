import React from "react";
import { FlatList, Text, View } from "react-native";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export function Guilds() {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <Background>
      <View style={styles.container}>
        <FlatList data={guilds} keyExtractor={(item) => item.id} renderItem={({ item }) => (
            
        )} />
      </View>
    </Background>
  );
}
