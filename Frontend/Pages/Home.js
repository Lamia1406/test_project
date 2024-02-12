import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
 const ChatbotImg = require("../assets/images/chatbot.png")
 const startRecordingSound = require("../assets/sounds/startRecording.mp3");
 import axios from 'axios';
import { Audio } from 'expo-av';

 import { useState, useEffect} from 'react';

 const Home = () => {
  const recording= false
  const startRecordingAudio = new Audio.Sound()
  const loadSounds = async () => {
    try {
      await startRecordingAudio.loadAsync(startRecordingSound);
    } catch (error) {
      console.error('Error loading sounds:', error);
    }
  };
  useEffect(() => {
    loadSounds();
    return () => {
      startRecordingAudio.unloadAsync();

    };
  }, []);
  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        await startRecordingAudio.replayAsync();
        const response = await axios.post('http://127.0.0.1:8000/api/virtual_assistant', {
        });
        console.log('Server response:', response.data);
      }
    } catch (err) {
      console.error('Error sending POST request:', err);
    }
  }

  

 
  return (
    <View style={styles.main}>
       <Image source={ChatbotImg} style={styles.bot_img} resizeMode="contain" />
      <Pressable style={styles.button} onPress={startRecording} >

                <Text style={[styles.btn_txt]}>
                     
                         "How can I help you?"
                     
                 </Text>

      </Pressable>
    </View>
  );
                    }

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


 

  

 

 
