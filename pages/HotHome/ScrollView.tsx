import { View, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import React from "react";
import { useFetchPopularRepos } from "../../api/hotHome";

import HotScrollViewItem from "../../components/HotScrollViewItem";

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
        renderItem={({ item }) => <HotScrollViewItem key={item.id} {...item} />}
        onRefresh={refreshList}
      />
    </View>
  );
};

export default ScrollView;
