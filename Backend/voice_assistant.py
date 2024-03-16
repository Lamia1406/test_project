"""
This module provides functionalities for a virtual speech assistant,
including text-to-speech, speech recognition,
and interaction with Google's Generative AI models.
"""
from gtts import gTTS
import speech_recognition as sr
import os
from playsound import playsound
import google.generativeai as palm
palm.configure(api_key="")
models = [
    m for m in palm.list_models()
    if "generateText" in m.supported_generation_methods
    ]
for m in models:
    print(f"Model Name: {m.name}")
model = models[0].name
model


def speak_girly_voice(text, voice_file):
    """
    Convert text to speech using gTTS and play the generated voice.
    """
    tts = gTTS(text=text, lang='en', tld='com', slow=False)
    tts.save(voice_file)
    playsound(voice_file)
    os.remove(voice_file)


def recognize_speech(timeout=5):
    """
    Recognize speech from the microphone input
    """
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something:")
        audio = recognizer.listen(source, timeout=timeout)
    try:
        text = recognizer.recognize_google(audio)
        return text
    except sr.UnknownValueError:
        speak_girly_voice(
            "Sorry, I could not understand what you said.",
            "error.mp3"
            )
        return ""
    except sr.RequestError as e:
        print("Could not request results from "
              f"Google Speech Recognition service; {e}"
              )
        return ""
