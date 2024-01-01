import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
import {colors, font_sizes} from "../Styles/main"
import Button from './Partials/Button';
import { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const validateForm = () => {
        let errors = {}

        if (!username) errors.username = "Username is required"
        if (!password) errors.password = "Password is required"
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const handleSubmit = () => {
        
    }
    return (
        <View style={[colors.background1, styles.main]}>
            <View style={styles.welcome_container}>
                <Text style={[styles.welcome_heading, font_sizes.H1]}>Sign In</Text>
                <View>
                <Text style={[styles.welcome_txt, font_sizes.body_S]}>Welcome back !</Text>
                <Text style={[styles.welcome_txt, font_sizes.body_S]}>You've been missed</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.signin_form}>
                <TextInput placeholder='Username' style={[styles.input_field, font_sizes.body_L]} value = {username} onChangeText={(text) => setUsername(text)}/>
                {
                    errors.username ? <Text>{errors.username}</Text> : null
                }
                <TextInput placeholder='Password' secureTextEntry style={[styles.input_field, font_sizes.body_L]} value={password} onChangeText={(text) => setPassword(text)}/>
                {
                    errors.password ? <Text>{errors.passowrd}</Text> : null
                }
                <View style={styles.btn_container}>
                <Button title="Sign in" color="white" background="#008080" font_size={20} />
                </View>
            </KeyboardAvoidingView>
            <View style={styles.signup_alt}>
                <Text style={[font_sizes.body_S, {color: "#5B7E7E"}]}>
                    don't have an account ? <Pressable style={{color: "#D2ACA0"}}><Text>sign up</Text></Pressable>
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main : {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    welcome_container: {
        paddingVertical: 36,
        gap: 16,
        alignItems: 'center'
    },
    welcome_heading : {
        color: "#008080", 
    },
    welcome_txt : {
        color: "#5B7E7E", 
        textAlign: "center"
    },
    signin_form : {
        paddingVertical: 36, 
        gap: 16,
    
    },
    input_field : {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        color: "#5E7171", 
        borderRadius: 50,
        
    },
    btn_container : {
        marginHorizontal: 112
    },
    
    signup_alt : {
       paddingVertical : 36,
       alignItems: "center"
    },
})
export default Login;
