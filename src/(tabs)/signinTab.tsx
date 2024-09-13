import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import BackNavigateButton from "../components/backNavigate";
import { auth } from "../config/firebaseConfig";
import PrimaryButton from "../components/primaryButton";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import InputField from "../components/inputField";

const SigninTab = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repass, setRepass] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignup = async () => {
    if (password !== repass){
      setErrorMessage("As senhas não coincidem.");
      //TODO: Criar um toast que exiba as mensagens de erro
      return;
    }
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(error){
      console.log("Erro ao criar usuário: ", error);
    }

  }

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
        <InputField
          placeholder="E-mail"
          iconName="mail"
          callback={setEmail}
          secure={false}
        />
        <InputField
          placeholder="Crie uma senha"
          iconName="key"
          callback={setPassword}
          secure={true}
        />
        <InputField
          placeholder="Repita a senha"
          iconName="key"
          callback={setRepass}
          secure={true}
        />
        <PrimaryButton textContent={"Criar conta"} action={handleSignup}/>
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
