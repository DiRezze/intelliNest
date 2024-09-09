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

        <View style={styles.inputContainer}>
          <Feather name="mail" size={28} style={styles.icon} />
          <TextInput
            value={email}
            style={styles.input}
            placeholder={"E-mail"}
            onChangeText={setEmail}
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="key" size={28} style={styles.icon} />
          <TextInput
            value={password}
            style={styles.input}
            placeholder={"Crie uma senha"}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="key" size={28} style={styles.icon} />
          <TextInput
            value={repass}
            style={styles.input}
            placeholder={"Confirme sua senha"}
            onChangeText={setRepass}
            secureTextEntry={true}
          />
        </View>

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
  inputContainer: {
    backgroundColor: colors.ui_white,
    borderRadius: 8,
    borderColor: colors.inputOutline,
    borderWidth: 1,
    maxWidth: "90%",
    marginVertical: 6,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  icon: {
    marginVertical: 8,
    marginLeft: 8,
    color: colors.colorTitle,
  },
  input: {
    flex: 1,
    margin: 8,
  },
});
