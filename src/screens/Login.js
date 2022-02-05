import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

const Login = ({ navigation }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#4AD8D9", "#4AC8E9", "#4AD8A9"]}
    >
      <View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/doctor4.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View>
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                navigation.navigate("Dashboard");
              }}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signup}
              onPress={() => {
                navigation.navigate("Dashboard");
              }}
            >
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ alignSelf: "center", marginTop: 30, flexDirection: "row" }}
        >
          <Text style={{ color: "#E4FCFE" }}>Are you a patient? </Text>
          <Text style={{ textDecorationLine: "underline", color: "#E4FCFE" }}>
            Get Here!
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    height: DEVICE_HEIGHT - 200,
    width: DEVICE_WIDTH,
    borderBottomLeftRadius: 50,
  },
  login: {
    borderWidth: 1,
    borderColor: "#E4FCFE",
    borderRadius: 15,
    marginLeft: 40,
  },
  signup: {
    borderWidth: 1,
    borderColor: "#50DCDD",
    backgroundColor: "#E4FCFE",
    borderRadius: 15,
    marginLeft: 20,
  },
  loginText: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    fontSize: 18,
    color: "#E4FCFE",
  },
  signupText: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    fontSize: 18,
    color: "#50DCDD",
  },
});

export default Login;
