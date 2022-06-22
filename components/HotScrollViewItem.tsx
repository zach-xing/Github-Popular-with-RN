import { View, Text, StyleSheet, Alert, Button } from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";
import useStorage from "../utils/storage";

type IProps = {
  [k in keyof API.HotDataItem]: API.HotDataItem[k];
} & {
  collectionStatus: "collection" | "no-collection";
  refresh?: () => void;
};

/**
 * “最热”页面的滚动 item
 */
const HotScrollViewItem: React.FC<IProps> = (props) => {
  const {
    setAsyncItem: setAsyncItemWithHotData,
    getAsyncItem: getAsyncItemWithHotData,
  } = useStorage<API.HotDataItem[]>("hot-data", []);

  const pressIcon = async (
    val: any,
    status: "collection" | "no-collection"
  ) => {
    const arr = await getAsyncItemWithHotData();
    if (status === "collection") {
      // 收藏（在“最热”页面）
      if (arr!.find((item) => item.id === props.id) !== undefined) {
        Alert.alert("已经收藏过了", "在 “收藏/最热” 页面可查看", [
          { text: "知道了" },
        ]);
      } else {
        await setAsyncItemWithHotData([val, ...arr!]);
        Alert.alert("收藏成功", "在 “收藏/最热” 页面可查看", [
          { text: "知道了" },
        ]);
      }
    } else {
      // 取消收藏（在“收藏”页面）
      let idx = arr!.findIndex((item) => item.id === props.id);
      if (idx === -1) {
        Alert.alert("取消收藏成功", "刷新试试", [{ text: "知道了" }]);
      } else {
        arr?.splice(idx, 1);
        await setAsyncItemWithHotData(arr!);
        Alert.alert("取消收藏成功", "取消收藏成功", [{ text: "知道了" }]);
        props.refresh && props.refresh();
      }
    }
  };

  return (
    <>
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
    </>
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
