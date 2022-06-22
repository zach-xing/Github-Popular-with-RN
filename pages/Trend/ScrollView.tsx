import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import { useFetchTrend } from "../../api/trend";
import useStorage from "../../utils/storage";

interface IProps {
  language: string;
  timespan: "daily" | "weekly" | "monthly";
}

const ScrollView: React.FC<IProps> = (props) => {
  const [showLoading, setShowLoading] = React.useState(false);
  const { trendData, isLoading, refetch } = useFetchTrend(
    props.language,
    props.timespan
  );
  const {
    setAsyncItem: setAsyncItemWithTrendingData,
    getAsyncItem: getAsyncItemWithTrendingData,
  } = useStorage<any[]>("trending-data", []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const pressIcon = async (val: any) => {
    const arr = await getAsyncItemWithTrendingData();
    await setAsyncItemWithTrendingData([...new Set([val, ...arr!])]);
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={trendData}
        refreshing={showLoading}
        onRefresh={refetch}
        renderItem={({ item }) => {
          return (
            <ListItem key={item.rank} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "bold" }}>
                  {item.repositoryName}
                </ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>

                <View style={styles.flexRowStyle}>
                  <Text>Language: </Text>
                  <Text
                    style={{ color: item.languageColor, fontWeight: "bold" }}
                  >
                    {item.language !== null ? item.language : "other"}
                  </Text>
                </View>

                <View style={styles.itemInfoStyle}>
                  <View style={styles.flexRowStyle}>
                    <Text>Built By:</Text>
                    {item.builtBy.map((builtItem) => (
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
                    onPress={() => pressIcon(item)}
                  />
                </View>
              </ListItem.Content>
            </ListItem>
          );
        }}
      />
    </View>
  );
};

export default ScrollView;

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
