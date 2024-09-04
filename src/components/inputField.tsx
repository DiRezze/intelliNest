import { StyleSheet,  TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { colors } from '../constants/colors';

type FeatherIconName = keyof typeof Feather.glyphMap;

interface InputFieldProps {
    iconName: FeatherIconName;
    placeholder: string;
    secure: boolean;
}

const InputField:React.FC<InputFieldProps> = ({iconName, placeholder, secure}) => {
    const [text, setText] = useState<String>('');
  return (
    <View style={styles.inputContainer}>
        <Feather name={iconName} size={28} style={styles.icon} />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={setText}
            secureTextEntry={secure}
        />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: colors.ui_white,
        borderRadius: 8,
        borderColor: colors.inputOutline,
        borderWidth: 1,
        maxWidth: '90%',
        marginVertical: 6,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        alignItems:'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    icon: {
        marginVertical: 8,
        marginLeft: 8,
        color: colors.colorTitle
    },
    input: {
        flex: 1,
        margin: 8,
    }
});
