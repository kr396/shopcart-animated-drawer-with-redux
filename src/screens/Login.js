import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton, Loader, TextField } from '../components';
import { logIn } from '../redux/operations/operations';
import { connect } from 'react-redux';
import { constants } from '../config';

class Login extends Component {

    inputTextArray = [
        {
            id: 'email',
            label: constants.email,
            iconName: 'envelope',
            ref: null,
        },
        {
            id: 'password',
            label: constants.password,
            iconName: 'lock',
            secureTextEntry: true,
            ref: null,
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onSubmitEditing = (field, i) => {
        if (this.inputTextArray.length - 1 === i) return;
        this.inputTextArray[i + 1].ref.focus();
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.title}>{constants.signIn}</Text>
                    {
                        this.inputTextArray.map((field, i) =>

                            <TextField
                                inputRef={ref => field.ref = ref}
                                value={this.state[field.id]}
                                label={field.label}
                                iconName={field.iconName}
                                onChangeText={(value) => this.setState({ [field.id]: value })}
                                secureTextEntry={field.secureTextEntry}
                                onSubmitEditing={() => this.onSubmitEditing(field, i)}
                            />
                        )
                    }

                    <CustomButton
                        label={'Login'}
                        onPress={() => this.props.logIn()}
                        style={styles.loginBtn}
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
    },
    title: {
        fontSize: 34,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        borderRadius: 20,
        paddingBottom: 10,
        marginBottom: 20
    },
    loginBtn: {
        marginBottom: 60
    }
});

const mapStateToProps = ({ requestState }) => ({
    loading: requestState.loading,
});

const mapDispatchToProps = {
    logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
