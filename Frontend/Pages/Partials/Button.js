import { Pressable, Text, StyleSheet, Image } from "react-native"
const Button = ({ title, color, background, font_size, icon, height, width, icon_dir, border }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: background,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 50,
            borderColor: border,
            borderWidth: border ? 1 : 0,
            flexDirection: icon ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: 20
        },
        btn_txt: {
            color: color,
            fontSize: font_size,

        },
        img: {
            height: height,
            width: width
        },

    })
    return (
        <Pressable style={styles.button} onPress={() => console.log("hello")}>
            {
                icon_dir == "left" && icon &&
                <Image source={icon} style={styles.img} resizeMode="contain" />

            }
            <Text style={[styles.btn_txt]}>{title}</Text>
            {
                icon_dir == "right" && icon &&
                <Image source={icon} style={styles.img} resizeMode="contain" />

            }
        </Pressable>
    )
}



export default Button;