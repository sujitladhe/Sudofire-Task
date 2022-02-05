import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import { SearchBar } from "../components/SearchBar";
import Bell from "../components/Bell";
import Card from "../components/Card";
import RBSheet from "react-native-raw-bottom-sheet";
import { Foundation } from "@expo/vector-icons";

export const DEVICE_HEIGHT = Dimensions.get("window").height;

const Dashboard = ({ navigation }) => {
  const refRBSheet = useRef();

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View style={{ marginTop: 50, marginLeft: 20, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.open();
          }}
        >
          <Image
            style={styles.image}
            source={require("../../assets/images/doctor4.jpg")}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Hi Dr,</Text>
          <Text style={{ fontSize: 18 }}>How're you today?</Text>
        </View>
        <Bell />
      </View>
      <SearchBar />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", marginVertical: 20 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Tasks </Text>
            <Text style={{ fontSize: 25 }}>for today</Text>
          </View>
          <View style={{ marginHorizontal: 22, marginTop: 10 }}>
            <Text>5 of 9 completed</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
            marginLeft: 30,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              textDecorationLine: "underline",
              color: "#0CB5B5",
            }}
          >
            5
          </Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Card title="Schedule" icon="calendar" />
          <Card title="Consult History" icon="smartphone" />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Card title="Patient Management" icon="folder" />
          <Card title="Free consults 150+ new" icon="message-circle" />
        </View>
      </View>

      {/* model code */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#E0E0E0",
          },
          container: {
            height: DEVICE_HEIGHT - 220,
          },
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              marginLeft: 25,
            }}
          >
            Private Video Call Request
          </Text>
          <View
            style={{
              borderBottomColor: "#E0E0E0",
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F6F6F6",
              marginTop: 30,
              marginHorizontal: 30,
              paddingVertical: 20,
              borderRadius: 15,
              paddingLeft: 20,
            }}
          >
            <View>
              <Image
                style={{ height: 50, width: 50, marginRight: 20 }}
                source={require("../../assets/images/temp.jpg")}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>Ethel Howard</Text>
              <Text style={{ fontSize: 12, marginVertical: 2 }}>
                Female 28 years old
              </Text>

              <Text style={{ fontSize: 12 }}>
                <Foundation name="telephone" size={15} color="#ED587D" />{" "}
                542-430-3167
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../../assets/images/splash.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Text>I'm not ready to consult. </Text>
            <TouchableOpacity>
              <Text style={{ textDecorationLine: "underline" }}>
                Cancle Request
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 25,
              justifyContent: "center",
            }}
          >
            <View>
              <TouchableOpacity style={styles.view}>
                <Text style={styles.viewText}>View Detail</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.callNow}>
                <Text style={styles.callNowText}>Call Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  view: {
    borderWidth: 1,
    borderColor: "#A4A4B5",
    borderRadius: 15,
  },
  callNow: {
    borderWidth: 1,
    borderColor: "#50DCDD",
    backgroundColor: "#3ED0D0",
    borderRadius: 15,
    marginLeft: 20,
  },
  viewText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    color: "#A4A4B5",
  },
  callNowText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 15,
    color: "#FFFFFF",
  },
});
export default Dashboard;
