import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../constants/colors';

interface BlankCard{
    children: ReactNode;
}

const BlankCard: React.FC <BlankCard> = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default BlankCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.ui_white,
        width: 600,
        maxWidth: '95%',
        padding: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        marginBottom: 16
    },
})