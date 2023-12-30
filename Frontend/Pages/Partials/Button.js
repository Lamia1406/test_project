import { Pressable, Text, StyleSheet , Image} from "react-native"
const Button = ({title, color, background, font_size, icon}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: background,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            gap: 20
            
        },
        btn_txt : {
            color: color,
            fontSize: font_size,
        },
        img : {
            height: 24 ,
            width: 24
        }
    })
    return (
        <Pressable style={styles.button} onPress={()=> console.log("hello")}>
        <Text style={[styles.btn_txt]}>{title}</Text>
        {
            icon &&  <Image source = {icon} style = {styles.img}/>
        }
      </Pressable>
    )
}



export default Button;