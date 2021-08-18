import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://static.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest/scale-to-width-down/250?cb=20150402234343";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
