import React,{useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from 'react-navigation'
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


const SigninScreen = () => {
    const {state,signin,clearErrorMessage} = useContext(Context);
  return (
    <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        text="Dont have an account? Sign up instaed"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 70
  }
});

export default SigninScreen;
