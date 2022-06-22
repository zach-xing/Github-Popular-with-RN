import { StyleSheet, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { ListItem, Text } from "@rneui/themed";

/**
 * 布局
 */
const ProfileLayout = ({ navigation, route }: any) => {
  return (
    <View>
      {/* Github 信息 */}
      <ListItem>
        <ListItem.Content style={styles.flexStyle}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name="github"
              style={{ marginRight: 10 }}
              color={"black"}
              size={30}
            />
            <Text style={{ fontSize: 16 }}>Github</Text>
          </View>
          <Icon
            name="right"
            color={"black"}
            size={25}
            onPress={() => navigation.navigate("github-info")}
          />
        </ListItem.Content>
      </ListItem>

      {/* 设置 */}
      <Text style={{ margin: 5, marginTop: 10 }}>设置</Text>
      <ListItem>
        <ListItem.Content style={styles.flexStyle}>
          <Text style={{ fontSize: 16 }}>自定义"最热"仓库标签</Text>
          <Icon
            name="right"
            color={"black"}
            size={25}
            onPress={() => navigation.navigate("custom-hot-tab")}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem>
        <ListItem.Content style={styles.flexStyle}>
          <Text style={{ fontSize: 16 }}>自定义"趋势"仓库标签</Text>
          <Icon
            name="right"
            color={"black"}
            size={25}
            onPress={() => navigation.navigate("custom-trend-tab")}
          />
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({
  flexStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
