import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <AuthForm 
    headerText="Sign Up for Tracker"
    errorMessage={state.errorMessage}
    submitButtonText="Sign up"
    onSubmit={signup} //Es equivalente a esto onoSubmit={({email,password}) => signup({email,password})}
    />
     <NavLink 
     text="Already have an account? Sign in instead"
     routeName="Signin"
     />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 70,
  }
});

export default SignupScreen;

