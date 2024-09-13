import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import BackNavigateButton from "../components/backNavigate";
import { useAuth } from "../contexts/authContext";
import InputField from "../components/inputField";
import PrimaryButton from "../components/primaryButton";

const LoginTab = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        <InputField
          placeholder="E-mail"
          iconName="mail"
          secure={false}
          callback={setEmail}
        />
        <InputField
          placeholder="Senha"
          iconName="key"
          secure={true}
          callback={setPassword}
        />
        <PrimaryButton
          textContent={"Login"}
          action={signIn}
          params={[email, password]}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        
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
    elevation: 2,
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
    textAlign: "center",
  },
});
