import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { setTopLevelNavigator } from "../services";
import { connect } from 'react-redux';
import GetStarted from '../screens/GetStarted';
import SignUp from '../screens/SignUp';
import Drawer from './Drawer';
import TabBar from './Tab';

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator >
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ header: () => null }} />
        <Stack.Screen name="Login" component={Login} options={{ headerTitle: "ShopCart", headerLeft: null, headerTransparent: true }} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

const Router = ({ isLoggedIn }) => {
    const initialRouteName = isLoggedIn ? 'home' : 'auth';
    return (
        <NavigationContainer ref={ref => setTopLevelNavigator(ref)}>
            <Stack.Navigator
                initialRouteName={initialRouteName}
                headerMode={'none'}
            >
                <Stack.Screen name="home" component={Drawer} />
                <Stack.Screen name="auth" component={AuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = ({ userState }) => ({
    isLoggedIn: userState.isloggedIn,
})

export default connect(mapStateToProps, null)(Router);