import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Card = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Feather name={icon} size={60} color="#2ABFF7" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default Card;
