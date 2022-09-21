import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput, Button } from "@react-native-material/core";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo_corelog_image}
          source={require("./img/logo_corelog.png")}
        />
        <TextInput
          style={styles.text_input}
          color="#3AB449"
          label="Usuário"
          variant="outlined"
          placeholder="Usuário"
        />
        <TextInput
          style={styles.text_input}
          color="#3AB449"
          label="Senha"
          variant="outlined"
          placeholder="Senha"
          secureTextEntry={true}
        />
        <Button
          style={styles.button}
          color={"#3AB449"}
          title="Entrar"
          titleStyle={{ fontSize: 16, color: "#ffffff" }}
        />
        <Text style={styles.text}>Ou Logar com</Text>

        <Button
          style={styles.button2}
          color={"#4867AA"}
          title="Facebook"
          titleStyle={{ fontSize: 16, color: "#ffffff" }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo_corelog_image: {
    width: "70%",
    height: "40%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text_input: {
    width: "70%",
    margin: 0 + 5,
  },
  button: {
    marginTop: 40,
    width: "70%",
    height: 45,
    justifyContent: "center",
  },
  button2: {
    marginTop: 20,
    width: "70%",
    height: 45,
    justifyContent: "center",
  },
  text: {
    marginTop: 80,
    fontSize: 16,
    color: "#c9c9c9",
  },
});
