import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
const ChatbotImg = require("../assets/images/chatbot.png")
const Home = () => {
    return (
        <View style={[styles.main]}>
            <Image source={ChatbotImg} style={styles.bot_img} resizeMode="contain" />


            <Pressable style={styles.button} onPress={() => console.log("hello")}>

                <Text style={[styles.btn_txt]}>How can I help you?</Text>

            </Pressable>
        </View>


    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 36,
        backgroundColor: "white",
        justifyContent: "center",
        gap: 64,
        alignItems: 'center'
    },
    bot_img: {
        height: 152,
        width: 152
    },

    button: {

        paddingVertical: 20,
        paddingHorizontal: 64,
        borderRadius: 50,
        borderColor: "#008080",
        borderWidth: 1,
        justifyContent: "center",
    },
    btn_txt: {
        color: "#008080",
        fontSize: 18,

    },




})
export default Home;
