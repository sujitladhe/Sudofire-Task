import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from "@expo/vector-icons";

const Bell = () => {
  return (
    <TouchableOpacity
          style={{
            marginLeft: 45,
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
          }}
        >
          <Feather
            name="bell"
            size={24}
            color="#F44169"
            style={{ margin: 15 }}
          />
        </TouchableOpacity>
  );
};

export default Bell;
