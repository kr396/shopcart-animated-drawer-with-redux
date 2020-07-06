import React from 'react';
import { StatusBar, Text, View } from 'react-native';
// import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
    return (
        <View
            // color="#88B04B"
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                ...style,
            }}>
            <StatusBar />
            <Text>Product List</Text>
        </View>
    );
};
