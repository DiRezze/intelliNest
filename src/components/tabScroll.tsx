import { ScrollView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import BlankCard from './blankCard';

interface TabScroll { children: ReactNode; }

const TabScroll: React.FC<BlankCard> = ({children}) => {
  return (
    <ScrollView contentContainerStyle={styles.tabContainer}>
        {children}
    </ScrollView>
  )
}

export default TabScroll

const styles = StyleSheet.create({
    tabContainer: {
        marginTop: 16,
        flex: 1,
        alignItems: 'center'
    },
});
