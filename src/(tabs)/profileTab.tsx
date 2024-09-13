import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import React from "react";
import BlankCard from "../components/blankCard";
import { colors } from "../constants/colors";

const ProfileTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.tabContainer}>
      <View style={styles.profile}>
        <View style={styles.userIco}>
          <Feather name="user" size={48} color={'#000000'}/>
        </View>
        <Text>User name</Text>
      </View>
      <BlankCard>
        <Text>Início</Text>
      </BlankCard>
    </ScrollView>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 16,
    flex: 1,
    alignItems: 'center'
  },
  userIco: {
    marginRight: 6,
    padding: 16,
    borderRadius: 256,
    color: colors.ui_white,
    backgroundColor: colors.colorTitle,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 16,
    width: '95%'
  },
});
