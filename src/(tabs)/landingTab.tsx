import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const LandingTab = () => {
  return (
    <LinearGradient
        style={styles.tabContainer}
        colors={['#4EB7AC','#A9E5CF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
    >
        <Text style={styles.title}>IntelliNest</Text>
        <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.signinButton}>
                <Text style={styles.signinText}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}

export default LandingTab

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
    },
    buttonsRow: {
        display: 'flex',
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        width: '100%',
        bottom: 0
    },
    title: {
        color: '#FFFFFF',
        marginTop: '60%',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signinButton: {
        flex: 1,
        height: 58,
        justifyContent: 'center',
    },
    signinText: {
        fontSize: 32,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    loginButton:{
        flex: 1,
        height: 58,
        borderTopLeftRadius: 32,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    loginText: {
        fontSize: 32,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: '#4EB7AC'
    },
});
