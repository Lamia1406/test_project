import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
import Button from './Partials/Button';
const Facebook = require("../assets/images/icons/facebook.png")
const Google = require("../assets/images/icons/google.png")
import { useState } from 'react';
const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const validateForm = () => {
        let errors = {}
        if (!username) errors.username = "Username is required"
        if (!email) errors.password = "Email is required"
        if (!password) errors.password = "Password is required"
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const handleSubmit = () => {

    }
    return (
        <View style={styles.main}>
            <View style={styles.welcome_container}>
                <Text style={styles.welcome_heading}>Sign Up</Text>
                <View>
                    <Text style={styles.welcome_txt}>One step further to access exclusive features </Text>
                    <Text style={styles.welcome_txt}>and personalized experiences !</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.signin_form}>
                <TextInput placeholder='Username' style={styles.input_field} value={username} onChangeText={(text) => setUsername(text)} />
                {
                    errors.username ? <Text>{errors.username}</Text> : null
                }
                <TextInput placeholder='Email' style={styles.input_field} value={email} onChangeText={(text) => setEmail(text)} />
                {
                    errors.email ? <Text>{errors.email}</Text> : null
                }
                <TextInput placeholder='Password' secureTextEntry style={styles.input_field} value={password} onChangeText={(text) => setPassword(text)} />
                {
                    errors.password ? <Text>{errors.passowrd}</Text> : null
                }
                <View style={styles.btn_container}>
                    <Button title="Sign up" color="white" background="#008080" font_size={20} />
                </View>
            </KeyboardAvoidingView>
            <View style={styles.login_methods}>
                <View style={styles.legend}>
                    <View style={styles.line}></View>
                    <Text style={{ color: "#5B7E7E", fontSize: 14 }}> Or continue with</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.alt_btns}>
                    <Button title="continue with Facebook" color="white" background="#0072BB" icon={Facebook} height={24} width={16} icon_dir="left" />
                    <Button title="continue with Google" color="#233131" background="transparent" icon={Google} height={24} width={24} icon_dir="left" border="#233131" />
                </View>
            </View>
            <View style={styles.signin_alt}>
                <Text style={{ color: "#5B7E7E", fontSize: 14 }}>
                    already have an account ? <Pressable style={{ color: "#D2ACA0" }}><Text>sign in</Text></Pressable>
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
    login_methods: {
        paddingVertical: 36,
        gap: 16
    },
    alt_btns: {
        paddingHorizontal: 64,
        gap: 16
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        justifyContent: "center",
        columnGap: 12
    },
    line: {
        height: 1,
        width: "20%",
        backgroundColor: "#5B7E7EB3"
    },
    signin_alt: {
        paddingVertical: 36,
        alignItems: "center"
    },
})
export default SignUp;
