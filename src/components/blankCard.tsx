import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "../constants/colors";

interface BlankCard { children: ReactNode; }

const BlankCard: React.FC<BlankCard> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default BlankCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.ui_white,
    borderBlockColor: colors.cardOutline,
    borderBottomWidth: 1,
    borderRadius: 8,
    elevation: 1,
    marginBottom: 16,
    maxWidth: "95%",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 600,
  },
});
