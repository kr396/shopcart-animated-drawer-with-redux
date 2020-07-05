import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const TextField = (props) => {
    return (
        <TextInput
            {...props}
            style={styles.input}
        />
    )
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});
