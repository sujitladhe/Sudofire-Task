import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name="search"
        size={30}
        color="#9593A7"
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search patient, health issue, ..."
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0F0F0",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
