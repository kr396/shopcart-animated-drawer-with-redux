import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CustomButton, Loader } from '../components';
import { logOut } from '../redux/operations/operations';

class Home extends Component {
    render() {
        return (
            <>
                <Loader animating={this.props.loading} />
                <View style={styles.container}>
                    <CustomButton
                        label={'Logout'}
                        onPress={() => this.props.logOut()}
                    />
                </View>
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 40
    }
});

const mapStateToProps = ({ requestState }) => ({
    loading: requestState.loading,
});

const mapDispatchToProps = {
    logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
