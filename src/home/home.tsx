import { StyleSheet, Text, SafeAreaView } from "react-native";

import { ArticleList } from "../components/article-list/article-list";
import { useUserAuthStore } from "../store/user-auth";

export function Home() {
  const user = useUserAuthStore((state) => state.user);

  console.log(user);

  return (
    <SafeAreaView style={homeStyles.container}>
      <Text>Home component</Text>
      <ArticleList />
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
