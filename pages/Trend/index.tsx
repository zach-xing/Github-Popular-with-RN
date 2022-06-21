import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalDropdown from "react-native-modal-dropdown";

const Trend = () => {
  const changeSelected = (index: string, value: string) => {
    console.log(index, value);
  };

  return (
    <View>
      <ModalDropdown
        options={["今天", "本周", "本月"]}
        defaultValue="今天"
        textStyle={{
          width: "100%",
          fontSize: 16,
          backgroundColor: "white",
          padding: 10,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
        }}
        dropdownStyle={{
          marginTop: 0,
          marginLeft: "10%",
          marginRight: "10%",
          width: "80%",
        }}
        dropdownTextStyle={{ fontSize: 14 }}
        onSelect={changeSelected}
      />
    </View>
  );
};

export default Trend;

const styles = StyleSheet.create({});
