/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, SectionList, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

// screens
import Dashboard from '../screens/Dashboard';
import ProductsList from '../screens/ProductsList';

import { colors } from '../config';
import { logOut } from '../redux/operations/operations';
import { connect } from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerRoutes = [
  {
    label: 'Men\'s wear',
    data: [
      {
        label: 'Top wear',
        routName: "ProductsList",
      },
      {
        label: 'Bottom wear',
        routName: "ProductsList",
      },
      {
        label: 'Foot wear',
        routName: "ProductsList",
      },
    ]
  },
  {
    label: 'Women\'s wear',
    data: [
      {
        label: 'Wallet & Bags',
        routName: "ProductsList",
      },
      {
        label: 'Western wear',
        routName: "ProductsList",
      },
      {
        label: 'Jewellery',
        routName: "ProductsList",
      },
    ]
  },
  {
    label: 'Accesories',
    data: [],
  },
  {
    label: 'Track order',
    routName: "ProductsList",
  },
  {
    label: 'Account details',
    routName: "ProductsList",
  },
  {
    label: 'Settings',
    routName: "ProductsList",
  },
  {
    label: 'Sign Out',
    routName: "ProductsList",
  },
];

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button title={"toggle"} onPress={() => navigation.openDrawer()} />
          ),
        }}>
        <Stack.Screen name="ProductsList">{props => <ProductsList {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};


function renderSeparatorComponent() {
  return (<View style={styles.separator} />)
}

const DrawerContent = props => {
  const [selectedLabel, setselectedLabel] = useState('');
  const ITEM_HEIGHT = 60;
  return (
    <FlatList
      data={drawerRoutes}
      keyExtractor={(item, index) => item.label}
      renderItem={({ item }) => {
        return (
          <>
            <View style={styles.drawerItemWrap}>
              <DrawerItem
                label={item.label}
                labelStyle={styles.drawerLabel}
                style={styles.drawerItem}
                activeBackgroundColor={colors.royalBlue}
                onPress={() => {
                  setselectedLabel(item.label)
                  if (item.label == 'Sign Out') props.logOut();
                  if (item.routName) props.navigation.navigate(item.routName);
                }}

              />
              {
                item.data
                &&
                <Text style={styles.drawerLabel}>{item.label === selectedLabel ? '-' : "+"}</Text>
              }
            </View>
            {item.label === selectedLabel
              && item.data
              && <FlatList
                data={item.data}
                style={{ marginStart: 20 }}
                renderItem={({ item }) => {
                  return (
                    <DrawerItem
                      label={item.label}
                      labelStyle={styles.drawerLabel}
                      style={styles.drawerItem}
                      onPress={() => {
                        props.navigation.navigate(item.routName)
                      }}
                    />)
                }}
                keyExtractor={(item, index) => item.label}
                getItemLayout={(data, index) => (
                  { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
                )}
              />
            }
          </>
        )
      }}
      ItemSeparatorComponent={renderSeparatorComponent}
      getItemLayout={(data, index) => (
        { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
      )}
    />
  );
};

export const DrawerMenu = ({ logOut }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1 }} >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: colors.royalBlue,
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: colors.primary }}
        drawerContent={props => {
          setProgress(props.progress);
          props = { ...props, logOut }
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 20,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles:
  {
    flex: 1,
    width: '50%',
    backgroundColor: colors.primary
  },
  drawerItem: {
    flex: 1,
    marginVertical: 0
  },
  drawerItemWrap: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drawerLabel: {
    color: 'white',
    /* marginLeft: -16 */
},
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.white,
  }
});

const mapStateToProps = ({ requestState }) => ({
  loading: requestState.loading,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
