/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, SectionList, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,

} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
// import { Feather, AntDesign } from '@expo/vector-icons';
// import { Block, Button, Text } from 'expo-ui-kit';
// import { LinearGradient } from 'expo-linear-gradient';

// screens
import Dashboard from '../screens/Dashboard';
import ProductsList from '../screens/ProductsList';
import Messages from '../screens/Messages';
import Contact from '../screens/Contact';
import { colors } from '../config';

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
]

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button title={"toggle"} onPress={() => navigation.openDrawer()}>
              {/* <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} /> */}
            </Button>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
        <Stack.Screen name="ProductsList">{props => <ProductsList {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

function renderDrawerSection(section, props) {
  console.log("Section", section);
  const onPress = section.data.length > 0 ? {} : props.navigation.navigate(section.routName)
  return (
    <TouchableOpacity
      onPress={() => onPress}
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <DrawerItem
        label={section.label}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}

      // onPress={() => onPress}
      // icon={() => <AntDesign name="dashboard" color="white" size={16} />}
      />
      <Text style={styles.drawerLabel}>+</Text>
    </TouchableOpacity>
  )
}
function renderDrawerItem(item, props) {
  return (
    <DrawerItem
      label={item.label}
      labelStyle={styles.drawerLabel}
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate(item.routName)}
    // icon={() => <AntDesign name="dashboard" color="white" size={16} />}
    />
  )
}

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
      // renderItem={({ item }) => renderDrawerItem(item, props)}
      // renderSectionHeader={({ section }) => renderDrawerSection(section, props)}
      renderItem={({ item }) => {
        return (
          <>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
              <DrawerItem
                label={item.label}
                labelStyle={styles.drawerLabel}
                // style={styles.drawerItem}
                activeBackgroundColor={colors.royalBlue}
                onPress={() => {
                  setselectedLabel(item.label)
                  if (item.routName) props.navigation.navigate(item.routName)
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
    // renderSectionHeader={({ section }) => {
    //   const onPress = section.data.length > 0 ? {} : props.navigation.navigate(section.routName)
    //   return (
    //     <TouchableOpacity
    //       onPress={() => onPress}
    //       style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    //     >
    //       <DrawerItem
    //         label={section.label}
    //         labelStyle={styles.drawerLabel}
    //         style={styles.drawerItem}
    //       />
    //       <Text style={styles.drawerLabel}>+</Text>
    //     </TouchableOpacity>
    //   )
    // }}
    ></FlatList>
    // <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>

    //   {/* <View>
    //     <DrawerItem
    //       label="Dashboard"
    //       labelStyle={styles.drawerLabel}
    //       style={styles.drawerItem}
    //       onPress={() => props.navigation.navigate('Home')}
    //     // icon={() => <AntDesign name="dashboard" color="white" size={16} />}
    //     />
    //     <DrawerItem
    //       label="Messages"
    //       labelStyle={{ color: 'white', marginLeft: -16 }}
    //       style={{ alignItems: 'flex-start', marginVertical: 0 }}
    //       onPress={() => props.navigation.navigate('Messages')}
    //     // icon={() => <AntDesign name="message1" color="white" size={16} />}
    //     />
    //     <DrawerItem
    //       label="Contact us"
    //       labelStyle={{ color: 'white', marginLeft: -16 }}
    //       style={{ alignItems: 'flex-start', marginVertical: 0 }}
    //       onPress={() => props.navigation.navigate('Contact')}
    //     // icon={() => <AntDesign name="phone" color="white" size={16} />}
    //     />
    //   </View>

    //   <View >
    //     <DrawerItem
    //       label="Logout"
    //       labelStyle={{ color: 'white' }}
    //       // icon={() => <AntDesign name="logout" color="white" size={16} />}
    //       onPress={() => alert('Are your sure to logout?')}
    //     />
    //   </View> */}
    // </DrawerContentScrollView>
  );
};

export default () => {
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
        // hideStatusBar
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
  drawerStyles: { flex: 1, width: '50%', backgroundColor: colors.primary },
  drawerItem: { flex: 1, marginVertical: 0 },
  drawerLabel: { color: 'white', /* marginLeft: -16 */ },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.white,
  }
});
