import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const LandingTab = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.title}>IntelliNest</Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinText}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LandingTab

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 'auto',
        textAlign: 'center',
    },
    signinButton: {

    },
    signinText: {
        fontSize: 48,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#4EB7AC'
    },
    loginButton:{

    },
    loginText: {
        fontSize: 48,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#FFFFFF'
    },
});
