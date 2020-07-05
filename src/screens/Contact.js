import React from 'react';
import { StatusBar, Text, View } from 'react-native';;

export default ({ style }) => {
  return (
    <View
      color="#41D5FB"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text >
        Contact me at
      </Text>
      <Text >contact@react-ui-kit.com</Text>
    </View>
  );
};
