import { ScrollView, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface TabScroll { children: ReactNode; }

const TabScroll: React.FC<TabScroll> = ({children}) => {
  return (
    <ScrollView contentContainerStyle={styles.tabContainer} showsVerticalScrollIndicator={false}>
        {children}
    </ScrollView>
  )
}

export default TabScroll

const styles = StyleSheet.create({
    tabContainer: {
        marginTop: 16,
        flexGrow: 1,
        alignItems: 'center'
    },
});
