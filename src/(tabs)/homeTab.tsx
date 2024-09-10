import { StyleSheet, Text, View } from 'react-native';
import { getGreeting } from '../scripts/greetings';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { colors } from '../constants/colors';

const Home = () => {

  const greeting = getGreeting();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="user" color={'#000000'} size={24} style={styles.userIco}/>
        <Text>{greeting}</Text>
      </View>
      <Text>Você está logado :D</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  header: {
    top: 0,
    width: '100%',
    height: 72,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  container: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  userIco: {
    marginRight: 6,
    padding: 4,
    borderRadius: 32,
    color: colors.ui_white,
    backgroundColor: colors.colorTitle,
  },
});