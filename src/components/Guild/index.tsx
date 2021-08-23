import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Background } from "../../components/Background";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  return (
    <Background>
      <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
        <GuildIcon />

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{data.name}</Text>

            <Text style={styles.type}>
              {data.owner ? "Administrador" : "Convidado"}
            </Text>
          </View>
        </View>

        <Feather name="chevron-right" color={theme.colors.heading} size={24} />
      </TouchableOpacity>
    </Background>
  );
}
