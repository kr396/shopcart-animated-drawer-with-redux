import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { constants, colors } from '../config';

export const Loader = ({
    animating,
    size = 'large',
}) => (
        animating &&
        <View style={styles.background}>
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating || false}
                    size={size}
                    color={colors.primary}
                />
            </View>
        </View>
        || null
    );

const styles = StyleSheet.create({
    background: {
        height: constants.deviceY,
        width: constants.deviceX,
        position: "absolute",
        zIndex: 1,
        // ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});