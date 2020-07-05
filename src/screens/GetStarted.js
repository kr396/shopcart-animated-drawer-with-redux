import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { CustomButton } from '../components';

class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <View style={styles.container}>
                    <Text></Text>
                    <CustomButton
                        label={'Get Started'}
                        onPress={() => this.props.navigation.navigate('Login')}
                        isRoundButton={false}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    }
})


export default GetStarted;
