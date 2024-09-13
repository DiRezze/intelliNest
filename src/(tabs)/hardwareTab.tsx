import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TabScroll from '../components/tabScroll'
import PrimaryButton from '../components/primaryButton'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { HardwareTabNavigationProp, RootStackParamList } from '../types/nodeNav'

type HardwareScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Hardware'>;

const Hardware = () => {
  const navigation = useNavigation<HardwareTabNavigationProp>();

  const [moduleList, setModuleList] = useState([]); 

  return (
    <TabScroll>
      <Text style={styles.title}>Hardware</Text>
      <PrimaryButton
        textContent="Adicionar novo módulo"
        action={() => navigation.navigate('AddModule')}
      />
      { moduleList.length == 0 ?
        <Text>Você ainda não tem módulos cadastrados</Text> : <Text>Lista</Text>
      }
    </TabScroll>
  )
}

export default Hardware

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
  }
})