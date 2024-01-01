import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './Partials/Button';
const arrowRight = require("../assets/images/icons/arrow_right.png")
const disussionImg = require("../assets/images/discussion_img.png")
const swipeRight = require("../assets/images/icons/swipe_right.png")
const LandingPage2 = () => {
    return (
        <View style={[styles.main]}>
            <View style={styles.hero_img}>
                <Image source={swipeRight} style={{ height: 5, width: 40 }} resizeMode="contain" />
                <Image source={disussionImg} style={{ height: 288.184, width: 338.529,transform: [{rotate: "-12.5deg"}]}} resizeMode="contain" />
            </View>
            <View style={styles.hero_container}>
                <Text style={[styles.hero_heading]}>Let's start !</Text>   
            </View>
            <View style={styles.btn_container}>
                <Button title="I'm new here" color="#0ABAB5" background="white" font_size={20} />
                <Button title="Sign In" color="#008080" background="transparent" font_size={20}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 36,
        backgroundColor: "#0ABAB5",
        justifyContent: "space-between"
    },
    hero_img: {
        alignItems: "center",
    },
    hero_container: {
        alignItems: 'center'
    },
    hero_heading: {
        color: "white",
        fontSize: 32,
        fontWeight: 700
    },
    btn_container: {
        paddingVertical: 36,
        alignItems: 'center',
        gap: 16
    },


})
export default LandingPage2;
