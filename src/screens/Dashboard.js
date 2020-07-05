import React from 'react';
import { StatusBar, Text, View } from 'react-native';
// import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <View
      // color="#88B04B"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <StatusBar />
      <Text>
        New video comming soon
      </Text>
    </View>
  );
};
