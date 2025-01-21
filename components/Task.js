import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>

        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  itemLeft: {},
  square: {},
  text: {},
  circular: {},
});

export default Task;
