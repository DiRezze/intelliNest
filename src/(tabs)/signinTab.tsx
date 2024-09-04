import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { colors } from "../constants/colors";
import BackNavigateButton from "../components/backNavigate";
import InputField from "../components/inputField";
import PrimaryButton from "../components/primaryButton";

const SigninTab = () => {
  return (
    <LinearGradient
      style={styles.tabContainer}
      colors={["#4EB7AC", "#A9E5CF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BackNavigateButton />
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/squarePattern.png")}
      ></ImageBackground>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <InputField iconName={"hash"} placeholder={"Nome"} secure={false} />
        <InputField iconName={"mail"} placeholder={"E-mail"} secure={false} />
        <InputField iconName={"key"} placeholder={"Senha"} secure={true} />
        <InputField iconName={"key"} placeholder={"Confirmar senha"} secure={true} />
        <PrimaryButton textContent={"Criar conta"} />
      </View>
    </LinearGradient>
  );
};

export default SigninTab;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
  formContainer: {
    backgroundColor: "#F1F1F1",
    elevation: 1,
    alignItems: "center",
    marginTop: 92,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title: {
    margin: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    color: colors.colorTitle,
  },
});
