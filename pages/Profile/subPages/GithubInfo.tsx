import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";

/**
 * 个人 github 信息
 */
const GithubInfo = () => {
  return (
    <View style={styles.layout}>
      <Card.Title style={{ fontSize: 20 }}>Github Popular With RN</Card.Title>
      <Card.Divider />
      <View>
        <Text style={styles.textStyle}>
          https://github.com/Zeekg-zk/Github-Popular-with-RN
        </Text>
        <Text style={styles.textStyle}>Author: Zeekg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default GithubInfo;
