import React from 'react';
import { StatusBar, Text, View } from 'react-native';;

export default ({ style }) => {
  return (
    <View
      color="#FFC46B"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text>
        Subscribe to my channel
      </Text>

      <Text>
        youtube.com/react-ui-kit
      </Text>
    </View>
  );
};
