import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Drawer from "./Drawer";
import { colors } from "../config";
import HotOffer from "../screens/HotOffer";
import MyCart from "../screens/MyCart";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsList from "../screens/ProductsList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const HomeStack = () => (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
    </Stack.Navigator>
);
export default function TabBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Hot Offer':
                            iconName = 'percent';
                            break;

                        case 'Hot Offer':
                            iconName = 'percent';
                            break;
                        case 'My Cart':
                            iconName = 'shopping-bag';
                            break;
                        case 'Search':
                            iconName = 'search';
                            break;
                        case 'Profile':
                            iconName = 'user';
                            break;

                        default:
                            iconName = 'home';
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: colors.white,
                inactiveTintColor: colors.white,
                activeBackgroundColor: colors.primary,
                inactiveBackgroundColor: colors.dimgray,
            }}
        >
            <Tab.Screen name="Home" options={{ title: 'Home' }} component={HomeStack} />
            <Tab.Screen name="Hot Offer" options={{ title: 'Home' }} component={HotOffer} />
            <Tab.Screen name="My Cart" options={{ title: 'Home' }} component={MyCart} />
            <Tab.Screen name="Search" options={{ title: 'Search' }} component={Search} />
            <Tab.Screen name="Profile" options={{ title: 'Profile' }} component={Profile} />
        </Tab.Navigator>
    );
}