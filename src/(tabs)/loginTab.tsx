import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { colors } from '../constants/colors'
import BackNavigateButton from '../components/backNavigate'
import InputField from '../components/inputField'

const LoginTab = () => {
  return (
    <LinearGradient
    style={styles.tabContainer}
    colors={['#4EB7AC','#A9E5CF']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
  >
    <BackNavigateButton />
    <View style={styles.formContainer}>
      <Text style={styles.title}>Login</Text>
      <InputField iconName={'mail'} placeholder={'E-mail'}/>
      <InputField iconName={'key'} placeholder={'Senha'}/>
    </View>
  </LinearGradient>
  )
}

export default LoginTab

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#F1F1F1',
    elevation: 1,
    alignItems: 'center',
    marginTop: 92,
    borderRadius: 32,
    height: '100%',
  },
  title: {
    margin: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.colorTitle
  },
})
