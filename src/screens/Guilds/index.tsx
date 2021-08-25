import React from "react";
import { FlatList, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

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
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Guild data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.guilds}
        />
      </View>
    </Background>
  );
}
