import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const SigninTab = () => {
  return (
    <LinearGradient
      style={styles.tabContainer}
      colors={['#4EB7AC','#A9E5CF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
    >
      <Text>Olá mundo</Text>
    </LinearGradient>
  )
}

export default SigninTab

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
})
