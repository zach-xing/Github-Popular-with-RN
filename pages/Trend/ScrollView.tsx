import { FlatList, Text, View } from "react-native";
import React from "react";
import { useFetchTrend } from "../../api/trend";
import TrendScrollViewItem from "../../components/TrendScrollViewItem";

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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={trendData}
        refreshing={showLoading}
        onRefresh={refetch}
        renderItem={({ item }) => (
          <TrendScrollViewItem
            collectionStatus={"collection"}
            key={item.rank}
            {...item}
          />
        )}
      />
    </View>
  );
};

export default ScrollView;
