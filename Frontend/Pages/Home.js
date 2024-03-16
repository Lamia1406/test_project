import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import BACKEND from './backend_url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Audio } from 'expo-av';

import { useState, useEffect } from 'react';
const ChatbotImg = require('../assets/images/chatbot.png');
const startRecordingSound = require('../assets/sounds/startRecording.mp3');

const Home = ({ navigation }) => {
  const [sound, setSound] = useState(null);
  const startRecordingAudio = new Audio.Sound();
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
  async function startRecording () {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        await startRecordingAudio.replayAsync();
        const response = await axios.post(`${BACKEND}/api/virtual_assistant`, {
        });
        const mp3Data = response.data.mp3_data;
        const { sound } = await Audio.Sound.createAsync(
          { uri: `data:audio/mp3;base64,${mp3Data}` },
          { shouldPlay: true }
        );
        setSound(sound);
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setSound(null);
          }
        });
      }
    } catch (err) {
      console.error('An Error occured, please try again');
    }
  }
  const handleLogout = async () => {
    try {
      await axios.post(`${BACKEND}/api/logout`);
      navigation.navigate('Login');
      await AsyncStorage.removeItem('isAuthenticated');
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred');
      console.error('Error response:', error.response.data);
      throw error;
    }
  };
  const stopDisplayingSound = async () => {
    await sound.stopAsync();
    setSound(null);
  };

  return (
    <View style={styles.main}>
      <View style={styles.logoutButtonContainer}>
        <Pressable onPress={handleLogout}>
          <FontAwesome name='sign-out' size={32} color='#008080' />
        </Pressable>
      </View>
      <Image source={ChatbotImg} style={styles.bot_img} resizeMode='contain' />
      {!sound && <Pressable style={styles.button} onPress={startRecording}>

        <Text style={[styles.btn_txt]}>

          How can I help you?

        </Text>

      </Pressable>}
      {
        sound && <Pressable style={styles.stop} onPress={stopDisplayingSound}>
          <Ionicons name='md-stop-circle' size={72} color='red' />
        </Pressable>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 36,
    backgroundColor: 'white',
    justifyContent: 'center',
    gap: 64,
    alignItems: 'center'
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 5
  },
  bot_img: {
    height: 152,
    width: 152
  },

  button: {

    paddingVertical: 20,
    paddingHorizontal: 64,
    borderRadius: 50,
    borderColor: '#008080',
    borderWidth: 1,
    justifyContent: 'center'
  },
  stop: {
    paddingVertical: 20,
    paddingHorizontal: 64
  },
  btn_txt: {
    color: '#008080',
    fontSize: 18

  }

});
export default Home;
