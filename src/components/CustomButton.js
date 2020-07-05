import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, constants, fonts } from '../config';

export const CustomButton = ({ onPress, label, isRoundButton = true, style }) => {
    const borderRadius = isRoundButton ? 25 : 0;
    return (
        <TouchableOpacity
            style={[styles.button, { borderRadius }, style]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={styles.label}>{label.toUpperCase()}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 50
    },
    label: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fonts.medium,
    },
});
