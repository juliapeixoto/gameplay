import React, { useState } from "react";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Text, View } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { RectButton } from "react-native-gesture-handler";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}> Categoria </Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}></View>
        </RectButton>
      </View>
    </Background>
  );
}
