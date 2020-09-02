import React, { useEffect,useContext } from 'react';
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);
//esto lo sacamos de SignupScreen
    useEffect(() => {
        tryLocalSignin();
      }, []);
    return null
};

export default ResolveAuthScreen;