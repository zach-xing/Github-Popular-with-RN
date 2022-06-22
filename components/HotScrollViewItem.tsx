import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import useStorage from "../utils/storage";

/**
 * “最热”页面的滚动 item
 */
const HotScrollViewItem: React.FC<API.HotDataItem> = (props) => {
  const {
    setAsyncItem: setAsyncItemWithHotData,
    getAsyncItem: getAsyncItemWithHotData,
  } = useStorage<any[]>("hot-data", []);

  const pressIcon = async (val: any) => {
    const arr = await getAsyncItemWithHotData();
    await setAsyncItemWithHotData([...new Set([val, ...arr!])]);
  };

  return (
    <ListItem key={props.id} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{props.full_name}</ListItem.Title>
        <ListItem.Subtitle>{props.description}</ListItem.Subtitle>
        <View style={styles.repoItemStyle}>
          {/* 作者的头像 */}
          <Image
            style={styles.tinyLogo}
            source={{ uri: props.owner.avatar_url }}
          />
          {/* star 数 */}
          <View>
            <Text style={{ lineHeight: 30 }}>
              Star: {props.stargazers_count}
            </Text>
          </View>
          {/* 收藏 action */}
          <View>
            <Icon
              name="staro"
              color={"black"}
              size={25}
              onPress={() => pressIcon(props)}
            />
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  repoItemStyle: {
    marginTop: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HotScrollViewItem;
