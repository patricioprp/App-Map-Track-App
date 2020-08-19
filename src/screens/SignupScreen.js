import React, {useState} from 'react';
import { StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    return(
        <View style={styles.container}>
        <Spacer>
        <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer>
        <Input 
        label='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        </Spacer>
        <Spacer>
        <Input 
        secureTextEntry={true}
        label='Password'
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        </Spacer>
        <Spacer>
        <Button title="Sign Up"/>
        </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
   return{
    header: () => false,
   }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:50
    }
});

export default SignupScreen;