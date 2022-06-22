import { View, Text, StyleSheet, Alert, Button } from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";
import useStorage from "../utils/storage";

type IProps = {
  [k in keyof API.TrendDataItem]: API.TrendDataItem[k];
} & {
  collectionStatus: "collection" | "no-collection";
  refresh?: () => void;
};

/**
 * “最热”页面的滚动 item
 */
const TrendScrollViewItem: React.FC<IProps> = (props) => {
  const {
    setAsyncItem: setAsyncItemWithTrendingData,
    getAsyncItem: getAsyncItemWithTrendingData,
  } = useStorage<API.TrendDataItem[]>("trending-data", []);

  const pressIcon = async (
    val: any,
    status: "collection" | "no-collection"
  ) => {
    const arr = await getAsyncItemWithTrendingData();
    if (status === "collection") {
      // 收藏（在“趋势”页面）
      if (arr!.find((item) => item.rank === props.rank)) {
        Alert.alert("已经收藏过了", "在 “收藏/趋势” 页面可查看", [
          { text: "知道了" },
        ]);
      } else {
        await setAsyncItemWithTrendingData([val, ...arr!]);
        Alert.alert("收藏成功", "在 “收藏/趋势” 页面可查看", [
          { text: "知道了" },
        ]);
      }
    } else {
      // 取消收藏（在“收藏”页面）
      let idx = arr!.findIndex((item) => item.rank === props.rank);
      if (idx === -1) {
        // 没找到
        Alert.alert("取消收藏成功", "刷新试试", [{ text: "知道了" }]);
      } else {
        arr?.splice(idx, 1);
        await setAsyncItemWithTrendingData(arr!);
        Alert.alert("取消收藏成功", "取消收藏成功", [{ text: "知道了" }]);
        props.refresh && props.refresh();
      }
    }
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

          <View>
            {props.collectionStatus === "collection" ? (
              <Button
                title="点击收藏"
                onPress={() => pressIcon(props, props.collectionStatus)}
              />
            ) : (
              <Button
                title="取消收藏"
                onPress={() => pressIcon(props, props.collectionStatus)}
              />
            )}
          </View>
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
