# Virtual Speech Assistant Documentation

## 1. Introduction

Welcome to the documentation for our Virtual Speech Assistant application. This document serves as a guide for understanding the features, installation process, and usage instructions for the application. Our speech assistant integrates advanced techniques in automatic speech recognition and natural language processing to provide users with a multifunctional virtual assistant.

---

## 2. Project Overview

The aim of this project is to develop a virtual speech assistant application for the Android platform. The application allows users to register and dictate their requests using speech. The assistant employs a strategy for receiving requests with a controlled delay to manage memory consumption effectively. It utilizes a speech recognition engine to transcribe user input and follows up on requests using natural language processing techniques.

### Key Features:

- User registration
- Speech recognition and transcription
- Natural language processing for request handling

---

## 3. Installation Guide

### Backend (Django):

1. Clone the repository:
   git clone https://github.com/Lamia1406/Virtual-Speech-Assistant
2. Navigate to the Backend directory:
   cd backend
3. Install dependencies:
   pip install -r requirements.txt
4. Run Django migrations:
   python manage.py migrate
5. Start the Django server:
   python manage.py runserver

### Frontend (React Native):

1. Navigate to the Frontend directory:
   cd frontend
2. Install dependencies:
   npm install
3. Start the Expo development server:
   npm start

---

## 4. Usage Instructions

1. **User Registration**:
   - Launch the application and navigate to the registration screen.
   - Enter the required details to create an account.

2. **Dictate Requests**:
   - After registration, access the speech assistant interface.
   - Press the microphone button and dictate your request.

3. **Speech Recognition Strategy**:
   - The assistant respects a predefined delay or timer to manage memory consumption effectively.

4. **Natural Language Processing**:
   - Once transcribed, the assistant processes the user's request using natural language processing techniques.

---

## 5. Technical Details

### Technologies Used:

- Backend:
  - Django (Python)
  - Django REST Framework
- Frontend:
  - React Native
  - Expo
- Speech Recognition:
  - Python SpeechRecognition library
- Text-to-Speech:
  - Google Text-to-Speech (gtts)
- Natural Language Processing:
  - Palm API
- Authentication:
  - Django Authentication

---

## 6. Conclusion

Our Virtual Speech Assistant application provides a convenient and efficient way for users to interact with their Android devices using speech commands. By integrating advanced speech recognition and natural language processing techniques, the assistant offers a seamless user experience for performing various tasks and receiving responses in real-time. We hope this documentation serves as a helpful guide for understanding and using the application effectively.

For any inquiries or support, please contact lamia.hamdi1406@gmail.com.

Thank you for choosing our Virtual Speech Assistant!
