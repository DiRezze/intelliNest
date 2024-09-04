import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { colors } from "../constants/colors";
import BackNavigateButton from "../components/backNavigate";
import InputField from "../components/inputField";
import PrimaryButton from "../components/primaryButton";

const LoginTab = () => {
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
        <Text style={styles.title}>Login</Text>
        <InputField iconName={"mail"} placeholder={"E-mail"} secure={false} />
        <InputField iconName={"key"} placeholder={"Senha"} secure={true}/>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <PrimaryButton textContent={"Login"} />
      </View>
    </LinearGradient>
  );
};

export default LoginTab;

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
  forgot: {
    color: colors.colorTitle,
    fontSize: 14,
    margin: 6,
    textAlign: 'center'
  },
});
