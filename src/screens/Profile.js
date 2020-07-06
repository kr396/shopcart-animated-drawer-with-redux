import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Loader } from '../components';

class Profile extends Component {
    render() {
        return (
            <>
                <Loader animating={this.props.loading} />
                <View style={styles.container}>
                    <Text style={{ alignSelf: 'center' }}>{this.props.route.name}</Text>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
