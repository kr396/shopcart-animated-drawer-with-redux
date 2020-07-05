import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config';
import { color } from 'react-native-reanimated';

export const TextField = (props) => {
    const [isFocused, setisFocused] = useState(false)
    const { label } = props;
    const isActive = isFocused || props.value.trim();
    const color = isActive ? colors.primary : colors.silver;
    const labelStyle = {
        position: 'absolute',
        left: 0,
        top: isActive ? 0 : 18,
        fontSize: isActive ? 14 : 18,
        color: colors.silver
    };
    const inputStyle = {
        borderBottomColor: color,
        color,
    };
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name={props.iconName} size={30} color={color} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    {...props}
                    ref={props.inputRef}
                    style={[styles.input, inputStyle]}
                    onFocus={() => setisFocused(true)}
                    onBlur={() => setisFocused(false)}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        height: 60,
    },
    icon: {
        width: 50,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        paddingTop: 18,
    },
    input: {
        flex: 1,
        fontSize: 16,
        borderBottomWidth: 1,
        padding: 0,
        paddingBottom: 10,
    },
});
