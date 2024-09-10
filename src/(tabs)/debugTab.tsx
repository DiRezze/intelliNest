import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { doSignOut } from '../config/auth'
import { colors } from '../constants/colors'

const DebugTab = () => {
  return (
    <View style={styles.container}> 
      <Text>DebugTab</Text>
      <TouchableOpacity 
        style={styles.logout}
        onPress={()=>doSignOut()}
      >
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DebugTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logout: {
    padding: 12,
    borderRadius: 4,
    width: 'auto',
    backgroundColor: 'grey'
  },
  btnText : {
    color: 'white'
  },
})