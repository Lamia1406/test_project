import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
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
        <View style={[styles.main]}>
            <View style={styles.welcome_container}>
                <Text style={styles.welcome_heading}>Sign In</Text>
                <View>
                    <Text style={styles.welcome_txt}>Welcome back !</Text>
                    <Text style={styles.welcome_txt}>You've been missed</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.signin_form}>
                <TextInput placeholder='Username' style={styles.input_field} value={username} onChangeText={(text) => setUsername(text)} />
                {
                    errors.username ? <Text>{errors.username}</Text> : null
                }
                <TextInput placeholder='Password' secureTextEntry style={styles.input_field} value={password} onChangeText={(text) => setPassword(text)} />
                {
                    errors.password ? <Text>{errors.passowrd}</Text> : null
                }
                <View style={styles.btn_container}>
                    <Button title="Sign in" color="white" background="#008080" font_size={20} />
                </View>
            </KeyboardAvoidingView>
            <View style={styles.signup_alt}>
                <Text style={{ color: "#5B7E7E", fontSize: 14 }}>
                    don't have an account ? <Pressable style={{ color: "#D2ACA0" }}><Text>sign up</Text></Pressable>
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: "#B3EBE9"
    },
    welcome_container: {
        paddingVertical: 36,
        gap: 16,
        alignItems: 'center'
    },
    welcome_heading: {
        color: "#008080",
        fontSize: 32
    },
    welcome_txt: {
        color: "#5B7E7E",
        textAlign: "center",
        fontSize: 14
    },
    signin_form: {
        paddingVertical: 36,
        gap: 16,

    },
    input_field: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        color: "#5E7171",
        borderRadius: 50,
        fontSize: 18

    },
    btn_container: {
        marginHorizontal: 112
    },

    signup_alt: {
        paddingVertical: 36,
        alignItems: "center"
    },
})
export default Login;
