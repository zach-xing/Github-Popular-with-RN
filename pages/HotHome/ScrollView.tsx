import { StyleSheet, View, FlatList, Image } from "react-native";
import { Text, ListItem } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { useFetchPopularRepos } from "../../api/hotHome";

interface IProps {
  value: string;
}

const ScrollView: React.FC<IProps> = (props) => {
  const { repoData, isLoading, refetchPopularRepos } = useFetchPopularRepos(
    props.value
  );
  const [refresh, setRefresh] = React.useState(false);

  if (isLoading) {
    return (
      <View>
        <Text h3>Loading...</Text>
      </View>
    );
  }

  // 刷新
  const refreshList = () => {
    setRefresh(true);
    refetchPopularRepos(() => setRefresh(false));
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={repoData!.items}
        refreshing={refresh}
        renderItem={({ item }) => (
          <ListItem key={item.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.full_name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
              <View style={styles.repoItemStyle}>
                {/* 作者的头像 */}
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: item.owner.avatar_url }}
                />
                {/* star 数 */}
                <View>
                  <Text style={{ lineHeight: 30 }}>
                    Star: {item.stargazers_count}
                  </Text>
                </View>
                {/* 收藏 action */}
                <View>
                  <Icon name="staro" color={"black"} size={25} />
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        )}
        onRefresh={refreshList}
      />
    </View>
  );
};

export default ScrollView;

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
