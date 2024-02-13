import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable, SafeAreaView } from 'react-native';
import Button from './Partials/Button';
import { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState([])
    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                await register();
                setUsername("");
                setEmail("");
                setPassword("");
                setErrors({});
               
            } catch (error) {
                console.error(error.response.data.message);
                let err = {}
                err.account_exist = error.response.data.message
                setErrors(err)
                toast.error(error.response.data.message || 'An error occurred');
            }
        }
    };

    const register = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/register/',
                {
                    username: username,
                    email: email,
                    password: password,
                }
            );
            navigation.navigate("Home");
        } catch (error) {
            let err = {}
                err.account_exist = error.response.data.message
                setErrors(err)
                toast.error(error.response.data.message || 'An error occurred');
            throw error; 
        }
    };

    const validateForm = () => {
        let errors = {}
            if (!username) errors.username = "Username is required"
            else if (user.length != 0) errors.username = "Username already exists"
            else if (username.length < 3 || username.length > 20) errors.username = "Username must be between 3 and 20 characters"
            else if (!/^[a-zA-Z0-9]+$/.test(username)) errors.username = "Username can only contain letters and numbers"
            else if (!/^[a-zA-Z]/.test(username)) errors.username = "Username should start with a letter"
            if (!email) errors.email = "Email is required"
            else if (!/^[^\s@]+@univ-constantine2\.dz$/.test(email)) errors.email = "Only university emails are allowed"
            if (!password) errors.password = "Password is required"
            else if (password.length < 8) errors.password = "Password must be at least 8 characters"
            else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(password)) errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            setErrors(errors)
        return Object.keys(errors).length === 0;
    };
        
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.main}>
                <View style={styles.welcome_container}>
                    <Text style={styles.welcome_heading}>Sign Up</Text>
                    <View>
                        <Text style={styles.welcome_txt}>One step further to access exclusive features </Text>
                        <Text style={styles.welcome_txt}>and personalized experiences !</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.signin_form}>
                {
                        errors.account_exist ? <Text style={styles.error}>{errors.account_exist}</Text> : null
                    }
                    <TextInput placeholder='Username' style={styles.input_field} value={username} onChangeText={(text) => setUsername(text)} />
                    {
                        errors.username ? <Text style={styles.error}>{errors.username}</Text> : null
                    }
                    <TextInput placeholder='Email' style={styles.input_field} value={email} onChangeText={(text) => setEmail(text)} />
                    {
                        errors.email ? <Text style={styles.error}>{errors.email}</Text> : null
                    }

                    <TextInput placeholder='Password' secureTextEntry style={styles.input_field} value={password} onChangeText={(text) => setPassword(text)} />
                    {
                        errors.password ? <Text style={styles.error}>{errors.password}</Text> : null
                    }
                    <View style={styles.btn_container}>
                        <Button title="Sign up" color="white" background="#008080" font_size={20} onPress={handleSubmit} />
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.signin_alt}>
                    <Text style={{ color: "#5B7E7E", fontSize: 14 }}>
                        already have an account ? <Pressable style={{ color: "#D2ACA0" }} onPress={() => navigation.navigate("Login")}><Text>sign in</Text></Pressable>
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: "#B3EBE9",
        paddingVertical: 32,
        gap: 32
    },
    welcome_container: {
        gap: 16,
        alignItems: 'center',

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
        marginHorizontal: "auto",
        maxWidth: 240
    },

    signin_alt: {
        paddingVertical: 36,
        alignItems: "center"
    },
    error: {
        color: "red",
        paddingHorizontal: 16,
    }
})
export default SignUp;
