import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { useAuth } from "../contexts/authContext";

interface PrimaryButtonProps {
  textContent: String;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ textContent }) => {
  const { signIn } = useAuth();
  return (
    <TouchableOpacity style={styles.container} onPress={() => signIn()}>
      <Text style={styles.text}>{textContent}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 42,
    backgroundColor: colors.mainButton,
    width: "auto",
    minWidth: "40%",
  },
  text: {
    textAlign: "center",
    fontWeight: "semibold",
    color: colors.ui_white,
  },
});
