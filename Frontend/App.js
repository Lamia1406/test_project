import { View } from "react-native";
import LandingPage1 from "./Pages/LandingPage1";
import Login from "./Pages/Login";
import LandingPage2 from "./Pages/LandingPage2";
import SignUp from "./Pages/SignUp";
export default function App() {
  return <View style={{ flex: 1 }}>
    <Login />
  </View>;
}