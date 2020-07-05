import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton, Loader } from '../components';
import { logIn } from '../redux/operations/operations';
import { connect } from 'react-redux';
import { constants } from '../config';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <CustomButton
                        label={'Login'}
                        onPress={() => this.props.logIn()}
                    />
                </View>
                <Loader animating={this.props.loading} />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: constants.large
    }
});

const mapStateToProps = ({ requestState }) => ({
    loading: requestState.loading,
});

const mapDispatchToProps = {
    logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
