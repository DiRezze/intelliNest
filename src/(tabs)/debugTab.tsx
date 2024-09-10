import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { doSignOut } from '../config/auth'
import { colors } from '../constants/colors'
import BlankCard from '../components/blankCard'

const DebugTab = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.tabTitle}>DebugTab</Text>

      <BlankCard>
        <Text style={styles.cardTitle}>handleAuthentication</Text>
        <TouchableOpacity 
          style={styles.logout}
          onPress={()=>doSignOut()}
        >
          <Text style={styles.btnText}>LogOut</Text>
        </TouchableOpacity>
      </BlankCard>

      <BlankCard>
        <Text style={styles.cardTitle}>handleXMLHttpRequest</Text>
        <TouchableOpacity 
          style={styles.logout}
        >
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </BlankCard>

      <BlankCard>
        <Text style={styles.cardTitle}>handleColorScheme</Text>
        <TouchableOpacity 
          style={styles.logout}
        >
          <Text style={styles.btnText}>Change to Dark</Text>
        </TouchableOpacity>
      </BlankCard>
    </View>
  )
}

export default DebugTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 32
  },
  cardTitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 2,
    fontWeight: '700',
    marginBottom: 12
  },
  logout: {
    padding: 12,
    borderRadius: 4,
    minWidth: 72,
    backgroundColor: 'grey'
  },
  btnText : {
    color: 'white',
    textAlign: 'center'
  },
  tabTitle: {
    fontSize: 48,
    fontWeight: '600',
    marginVertical: 8
  },
})