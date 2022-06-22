import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import useStorage from "../utils/storage";

/**
 * “最热”页面的滚动 item
 */
const TrendScrollViewItem: React.FC<API.TrendDataItem> = (props) => {
  const {
    setAsyncItem: setAsyncItemWithTrendingData,
    getAsyncItem: getAsyncItemWithTrendingData,
  } = useStorage<any[]>("trending-data", []);

  const pressIcon = async (val: any) => {
    const arr = await getAsyncItemWithTrendingData();
    await setAsyncItemWithTrendingData([...new Set([val, ...arr!])]);
  };

  return (
    <ListItem key={props.rank} bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {props.repositoryName}
        </ListItem.Title>
        <ListItem.Subtitle>{props.description}</ListItem.Subtitle>

        <View style={styles.flexRowStyle}>
          <Text>Language: </Text>
          <Text style={{ color: props.languageColor, fontWeight: "bold" }}>
            {props.language !== null ? props.language : "other"}
          </Text>
        </View>

        <View style={styles.itemInfoStyle}>
          <View style={styles.flexRowStyle}>
            <Text>Built By:</Text>
            {props.builtBy.map((builtItem) => (
              <Image
                key={builtItem.username}
                style={{ width: 25, height: 25, borderRadius: 5 }}
                source={{ uri: builtItem.avatar }}
              />
            ))}
          </View>

          <Icon
            name="staro"
            color={"black"}
            size={25}
            onPress={() => pressIcon(props)}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  flexRowStyle: {
    display: "flex",
    flexDirection: "row",
  },
  itemInfoStyle: {
    width: "100%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TrendScrollViewItem;
