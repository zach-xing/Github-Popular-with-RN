import React from "react";
import { useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";

const BASE_URL = "https://github.com";

const RepoDetails = () => {
  const { params } = useRoute();

  return (
    <WebView source={{ uri: `${BASE_URL}/${(params as any).repoName!}` }} />
  );
};

export default RepoDetails;
