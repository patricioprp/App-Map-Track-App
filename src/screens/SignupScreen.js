import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const SignupScreen = ({navigation}) => {
    return(
        <>
        <Text style={{ fontSize:40 }}>SignupScreen</Text>
        <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}/>
        <Button title="Go to Main Flow" onPress={() => navigation.navigate('mainFlow')}/>
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;