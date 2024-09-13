import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import BackNavigateButton from "../components/backNavigate";
import { useAuth } from "../contexts/authContext";
import OrDivider from "../components/orDivider";

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
            placeholder={"Senha"}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={()=>signIn(email, password)}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

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
    textAlign: "center",
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
  btnContainer: {
    margin: 4,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 42,
    backgroundColor: colors.mainButton,
    width: "auto",
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: "40%",
  },
  btnText: {
    textAlign: "center",
    fontWeight: "semibold",
    color: colors.ui_white,
  },
});
